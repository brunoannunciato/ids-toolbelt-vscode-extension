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
		const edit = new vscode.WorkspaceEdit()
		const fullRange = new vscode.Range(
			document.positionAt(0),
			document.positionAt(fileContent.length)
		)
		const splittedContent = fileContent.split('\n')

		const originalContent = splittedContent.map(row => {
			if (row.includes('{') || row.includes('}') || row.trim() === '' || row.includes('@import')) return row

			return row.split(':')
		})
		
		
		const tokensEntries = Object.entries(tokens)

		const convertedContent = originalContent.map(row => {
			if (!Array.isArray(row)) return row

			const possibleValues = tokensEntries.filter((token) => {
				const { value, usage } = token[1]

				return usage.includes(row[0].trim()) && ` ${row[1]}`.toLowerCase().includes(` ${value}`.toLowerCase())
			})

			let newRowContent = row 

			const applyTokenToRow = (choosedValue) => {
				return newRowContent = [newRowContent[0], newRowContent[1].replaceAll(choosedValue[1].value.toLowerCase(), `var(${choosedValue[0].trim().toLowerCase().replace(';', '')})`)]
			}

			if (possibleValues.length) {
				const propValues = row[1].split(' ')
				propValues.shift()

				for (let i = 0; i < Math.min(propValues.length, possibleValues.length); i++) {
					applyTokenToRow(possibleValues[i])
				}
			
				return newRowContent
			}

			return row
		})

		const newContentArray = convertedContent.map(row => {
			if (!Array.isArray(row)) return row

			return `${row[0]}: ${row[1].trim()}`
		})

		const fileNewContent = newContentArray.join('\n')

		edit.replace(document.uri, fullRange, fileNewContent)

		vscode.workspace.applyEdit(edit).then(() => {
			vscode.window.showInformationMessage('Os tokens foram aplicados com sucesso!')
		})
	})



	context.subscriptions.push(applyTokens)
}

module.exports = applyTokensCommand