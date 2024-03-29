const COMMIT = 'e2816fe719a4026ffa1ee0189dc89bdfdbafb164';
const SOURCEMAP_REMOTE_PATH = `/sourcemaps/${COMMIT}/core/vs/workbench/workbench.desktop.main.js.map`;
// const SOURCEMAP_REMOTE_PATH = `/sourcemaps/${COMMIT}/core/vs/workbench/services/extensions/node/extensionHostProcess.js.map`;
// const SOURCEMAP_REMOTE_PATH = `/sourcemaps/${COMMIT}/core/vs/workbench/api/node/extensionHostProcess.js.map`;

const fs = require('fs');
const path = require('path');
const https = require('https');
const cp = require('child_process');

get_sourcemap().then((fileName) => {

	const rawinput = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().trim();
	let inputFilename = 'input.txt';
	if (/</.test(rawinput)) {
		console.log(`Identified slow stack format!`);
		const pieces = rawinput.split(/</g);
		const result = [`Error: Slow Stack`];
		for (const piece of pieces) {
			const pieces2 = piece.split(/#/g);
			const name = pieces2[0];
			const location = pieces2[1];
			if (/sandbox_bundle/.test(location) || !location) {
				continue;
			}
			if (name === '(anonymous)') {
				result.push(`at ${location}`);
			} else {
				result.push(`at ${name} (${location})`);
			}
		}
		fs.writeFileSync(path.join(__dirname, 'input2.txt'), result.join('\n'));
		inputFilename = 'input2.txt';
	}

	let result = cp.execSync(`node ./node_modules/stack-beautifier/stack-beautifier.js ${fileName} -t ${inputFilename}`).toString();

	// console.log(result);
	const replacer = (filename, line, col) => {
		return `[\`${filename}:${line}:${col}\`](https://github.com/Microsoft/vscode/blob/${COMMIT}/src/vs/${filename}#L${line})`;
	}

	result = result.replace(/\(([^:\[\]]+):(\d+):(\d+)\)/g, function (_, m1, m2, m3) {
		return `(${replacer(m1, m2, m3)})`;
	});
	result = result.replace(/at ([^:\[\]]+):(\d+):(\d+)/g, function (_, m1, m2, m3) {
		return `at ${replacer(m1, m2, m3)}`;
	});
	result = result.replace(/at ([\w_.]+)/g, function (_, m1) {
		return `at \`${m1}\``;
	});

	result = result.replace(/ /g, '&nbsp;');
	result = result.replace(/\n/g, '<br/>');

	fs.writeFileSync('output.md', `Deminified using https://github.com/alexdima/vscode-stack-beautifier\n\n${result}`);
	// console.log(result);
});

function get_sourcemap() {
	const fileName = get_localfilename(SOURCEMAP_REMOTE_PATH);
	if (fs.existsSync(fileName)) {
		return Promise.resolve(fileName);
	}
	return https_get_raw_text({
		host: `ticino.blob.core.windows.net`,
		path: SOURCEMAP_REMOTE_PATH
	}).then((sourcemap) => {
		fs.writeFileSync(fileName, sourcemap.body);
		return fileName;
	})
}

function get_localfilename(remotePath) {
	return `${COMMIT}.${path.basename(remotePath)}`;
}

function https_get_raw_text(options) {
	options.port = 443;
	return new Promise((c, e) => {
		let req = https.get(options, (resp) => {
			let bufs = [];
			resp.on('data', (chunk) => {
				bufs.push(chunk);
			});
			resp.on('end', () => {
				c({
					host: options.host,
					path: options.path,
					statusCode: resp.statusCode,
					headers: resp.headers,
					body: Buffer.concat(bufs).toString()
				});
			});
		});
		req.on("error", e);
	});
}
