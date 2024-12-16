const vscode = require('vscode')

const applyTokensCommand = (context) => {
    const applyTokens = vscode.commands.registerCommand('ids-toolbelt.applyIds', function () {
		const editor = vscode.window.activeTextEditor;

		if (!editor) {
			vscode.window.showErrorMessage('Nenhum arquivo ativo encontrado!');
			return;
		}
		
		const document = editor.document;
		const fileContent = document.getText()

		const updatedContent = fileContent.replace(/32px/g, 'token-ids');

		if (updatedContent === fileContent) {
			vscode.window.showInformationMessage('Nenhuma ocorrência de "32px" encontrada!');
			return;
		}

		const edit = new vscode.WorkspaceEdit();
		const fullRange = new vscode.Range(
			document.positionAt(0),
			document.positionAt(fileContent.length)
		);

		edit.replace(document.uri, fullRange, updatedContent);

		vscode.workspace.applyEdit(edit).then(() => {
			vscode.window.showInformationMessage('"32px" foi substituído por "token-ids"!');
		});
	});



	context.subscriptions.push(applyTokens);
}

module.exports = applyTokensCommand