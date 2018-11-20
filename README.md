## How to use

* checkout
* npm install
* edit `index.js` and replace with your COMMIT
* edit `input.txt` and replace with your stack trace
* run `node index.js`
* output in `output.txt`

#### Input
COMMIT `ebe9ea85a0a0bb087dccc98949542605dfc51f6f`

```
/Applications/Visual Studio Code - Insiders.app/Contents/Resources/app/out/vs/workbench/workbench.main.js:185
    at new e (file:///Applications/Visual Studio Code - Insiders.app/Contents/Resources/app/out/vs/workbench/workbench.main.js:2037:828)
    at new e (file:///Applications/Visual Studio Code - Insiders.app/Contents/Resources/app/out/vs/workbench/workbench.main.js:2040:545)
    at file:///Applications/Visual Studio Code - Insiders.app/Contents/Resources/app/out/vs/workbench/workbench.main.js:2047:159
    at file:///Applications/Visual Studio Code - Insiders.app/Contents/Resources/app/out/vs/workbench/workbench.main.js:1926:480
    at file:///Applications/Visual Studio Code - Insiders.app/Contents/Resources/app/out/vs/workbench/workbench.main.js:1926:518
    at V (file:///Applications/Visual Studio Code - Insiders.app/Contents/Resources/app/out/vs/workbench/workbench.main.js:1916:839)
    at t._renderOnce (file:///Applications/Visual Studio Code - Insiders.app/Contents/Resources/app/out/vs/workbench/workbench.main.js:1923:831)
    at t.change (file:///Applications/Visual Studio Code - Insiders.app/Contents/Resources/app/out/vs/workbench/workbench.main.js:1926:254)
    at t.changeViewZones (file:///Applications/Visual Studio Code - Insiders.app/Contents/Resources/app/out/vs/workbench/workbench.main.js:1949:459)
    at file:///Applications/Visual Studio Code - Insiders.app/Contents/Resources/app/out/vs/workbench/workbench.main.js:2046:623
    at o._changeDecorations (file:///Applications/Visual Studio Code - Insiders.app/Contents/Resources/app/out/vs/workbench/workbench.main.js:1207:185)
    at o.changeDecorations (file:///Applications/Visual Studio Code - Insiders.app/Contents/Resources/app/out/vs/workbench/workbench.main.js:1206:478)
    at t.changeDecorations (file:///Applications/Visual Studio Code - Insiders.app/Contents/Resources/app/out/vs/workbench/workbench.main.js:1945:46)
    at e._renderCodeLensSymbols (file:///Applications/Visual Studio Code - Insiders.app/Contents/Resources/app/out/vs/workbench/workbench.main.js:2046:583)
    at file:///Applications/Visual Studio Code - Insiders.app/Contents/Resources/app/out/vs/workbench/workbench.main.js:2044:884
    at process._tickCallback (internal/process/next_tick.js:188:7)
```

#### Output

Deminified using https://github.com/alexandrudima/vscode-stack-beautifier

/Applications/Visual&nbsp;Studio&nbsp;Code&nbsp;-&nbsp;Insiders.app/Contents/Resources/app/out/vs/workbench/workbench.main.js:185<br/>
&nbsp;&nbsp;at&nbsp;onDidChangeConfiguration&nbsp;([./editor/contrib/codelens/codelensWidget.ts:87:38](https://github.com/Microsoft/vscode/blob/ebe9ea85a0a0bb087dccc98949542605dfc51f6f/src/vs/./editor/contrib/codelens/codelensWidget.ts#L87))<br/>
&nbsp;&nbsp;at&nbsp;[./editor/contrib/codelens/codelensWidget.ts:247:24](https://github.com/Microsoft/vscode/blob/ebe9ea85a0a0bb087dccc98949542605dfc51f6f/src/vs/./editor/contrib/codelens/codelensWidget.ts#L247)<br/>
&nbsp;&nbsp;at&nbsp;[./editor/contrib/codelens/codelensController.ts:253:23](https://github.com/Microsoft/vscode/blob/ebe9ea85a0a0bb087dccc98949542605dfc51f6f/src/vs/./editor/contrib/codelens/codelensController.ts#L253)<br/>
&nbsp;&nbsp;at&nbsp;func&nbsp;([./editor/browser/view/viewImpl.ts:589:9](https://github.com/Microsoft/vscode/blob/ebe9ea85a0a0bb087dccc98949542605dfc51f6f/src/vs/./editor/browser/view/viewImpl.ts#L589))<br/>
&nbsp;&nbsp;at&nbsp;callback&nbsp;([./editor/browser/view/viewImpl.ts:498:18](https://github.com/Microsoft/vscode/blob/ebe9ea85a0a0bb087dccc98949542605dfc51f6f/src/vs/./editor/browser/view/viewImpl.ts#L498))<br/>
&nbsp;&nbsp;at&nbsp;func&nbsp;([./editor/browser/view/viewImpl.ts:581:9](https://github.com/Microsoft/vscode/blob/ebe9ea85a0a0bb087dccc98949542605dfc51f6f/src/vs/./editor/browser/view/viewImpl.ts#L581))<br/>
&nbsp;&nbsp;at&nbsp;safeInvokeNoArg&nbsp;([./editor/browser/view/viewImpl.ts:359:10](https://github.com/Microsoft/vscode/blob/ebe9ea85a0a0bb087dccc98949542605dfc51f6f/src/vs/./editor/browser/view/viewImpl.ts#L359))<br/>
&nbsp;&nbsp;at&nbsp;_renderOnce&nbsp;([./editor/browser/view/viewImpl.ts:478:7](https://github.com/Microsoft/vscode/blob/ebe9ea85a0a0bb087dccc98949542605dfc51f6f/src/vs/./editor/browser/view/viewImpl.ts#L478))<br/>
&nbsp;&nbsp;at&nbsp;change&nbsp;([./editor/browser/widget/codeEditorWidget.ts:1247:40](https://github.com/Microsoft/vscode/blob/ebe9ea85a0a0bb087dccc98949542605dfc51f6f/src/vs/./editor/browser/widget/codeEditorWidget.ts#L1247))<br/>
&nbsp;&nbsp;at&nbsp;changeViewZones&nbsp;([./editor/contrib/codelens/codelensController.ts:222:16](https://github.com/Microsoft/vscode/blob/ebe9ea85a0a0bb087dccc98949542605dfc51f6f/src/vs/./editor/contrib/codelens/codelensController.ts#L222))<br/>
&nbsp;&nbsp;at&nbsp;callback&nbsp;([./editor/common/model/textModel.ts:1502:12](https://github.com/Microsoft/vscode/blob/ebe9ea85a0a0bb087dccc98949542605dfc51f6f/src/vs/./editor/common/model/textModel.ts#L1502))<br/>
&nbsp;&nbsp;at&nbsp;_changeDecorations&nbsp;([./editor/common/model/textModel.ts:1467:15](https://github.com/Microsoft/vscode/blob/ebe9ea85a0a0bb087dccc98949542605dfc51f6f/src/vs/./editor/common/model/textModel.ts#L1467))<br/>
&nbsp;&nbsp;at&nbsp;changeDecorations&nbsp;([./editor/browser/widget/codeEditorWidget.ts:1019:31](https://github.com/Microsoft/vscode/blob/ebe9ea85a0a0bb087dccc98949542605dfc51f6f/src/vs/./editor/browser/widget/codeEditorWidget.ts#L1019))<br/>
&nbsp;&nbsp;at&nbsp;changeDecorations&nbsp;([./editor/contrib/codelens/codelensController.ts:221:15](https://github.com/Microsoft/vscode/blob/ebe9ea85a0a0bb087dccc98949542605dfc51f6f/src/vs/./editor/contrib/codelens/codelensController.ts#L221))<br/>
&nbsp;&nbsp;at&nbsp;_renderCodeLensSymbols&nbsp;([./editor/contrib/codelens/codelensController.ts:121:10](https://github.com/Microsoft/vscode/blob/ebe9ea85a0a0bb087dccc98949542605dfc51f6f/src/vs/./editor/contrib/codelens/codelensController.ts#L121))<br/>
&nbsp;&nbsp;at&nbsp;hasListeners&nbsp;([./base/common/event.ts:302:11](https://github.com/Microsoft/vscode/blob/ebe9ea85a0a0bb087dccc98949542605dfc51f6f/src/vs/./base/common/event.ts#L302))<br/>

