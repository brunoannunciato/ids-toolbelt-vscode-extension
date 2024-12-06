const vscode = require('vscode');


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log("extension called")
	const applyTokens = vscode.commands.registerCommand('ids-toolbelt.applyIds', function () {
		vscode.window.showInformationMessage('Tokens aplicados com sucesso!');
	});

	context.subscriptions.push(applyTokens);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
