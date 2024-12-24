const vscode = require('vscode')
const tokens = require('../constants/tokens')

const applyTokensCommand = (context) => {
    const applyTokens = vscode.commands.registerCommand('ids-toolbelt.applyIds', function () {
		const editor = vscode.window.activeTextEditor

		if (!editor) {
			vscode.window.showErrorMessage('Nenhum arquivo ativo encontrado!')
			return
		}
		
		const document = editor.document
		const fileContent = document.getText()
		let updatedContent = fileContent

		Object.entries(tokens).forEach(([variableName, { value, usage }]) => {
			usage.forEach((cssProperty) => {
			  const regex = new RegExp(`(${cssProperty}\\s*:\\s*)(?:[^;]*?\s)?${value}`, "gm")

			  updatedContent = updatedContent.replace(regex, `$1var(${variableName})`)
			})
		  })

		if (updatedContent === fileContent) {
			vscode.window.showInformationMessage('Nenhum token foi encontrado no arquivo')
			return
		}

		const edit = new vscode.WorkspaceEdit()
		const fullRange = new vscode.Range(
			document.positionAt(0),
			document.positionAt(fileContent.length)
		)

		edit.replace(document.uri, fullRange, updatedContent)

		vscode.workspace.applyEdit(edit).then(() => {
			vscode.window.showInformationMessage('Os tokens foram aplicados com sucesso!')
		})
	})



	context.subscriptions.push(applyTokens)
}

module.exports = applyTokensCommand