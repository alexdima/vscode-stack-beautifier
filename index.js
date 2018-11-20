const COMMIT = 'ebe9ea85a0a0bb087dccc98949542605dfc51f6f';

const fs = require('fs');
const https = require('https');

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

function get_sourcemap(commit) {
    const fileName = `${commit}.workbench.main.js.min.map`;
    if (fs.existsSync(fileName)) {
        return Promise.resolve(fileName);
    }
    return https_get_raw_text({
        host: `ticino.blob.core.windows.net`,
        path: `/sourcemaps/${COMMIT}/core/vs/workbench/workbench.main.js.map`
    }).then((sourcemap) => {
        fs.writeFileSync(fileName, sourcemap.body);
        return fileName;
    })
}

get_sourcemap(COMMIT).then((fileName) => {
    console.log(fileName);
});