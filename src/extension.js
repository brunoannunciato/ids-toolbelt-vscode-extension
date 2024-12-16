const showTokenValue = require('./functions/showTokenValue')
const applyTokensCommand = require('./functions/applyTokensCommand')


/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {
	showTokenValue(context)
	applyTokensCommand(context)
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
