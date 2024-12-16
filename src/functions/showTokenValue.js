const vscode = require('vscode')
const tokenList = require('../constants/tokens')

const showTokenValue = (context) => {
    const command = vscode.languages.registerHoverProvider('*', {
        provideHover(document, position) {
            const wordRange = document.getWordRangeAtPosition(position, /var\(--[^\)]+\)/)

            if (wordRange) {
                const tokenVariable = document.getText(wordRange)
                const token = tokenVariable.replace('var(', '').replace(')', '')
                const idsToken = tokenList[token]

                const pattern = "rem"
                const remLength = idsToken.match(new RegExp(pattern, "g") || [])?.length || 0

                if (idsToken) {
                    if (remLength === 1) {
                        return new vscode.Hover(`**IDS Tokens:**\n\r\n\r **Valor do token:** *${idsToken}* \n\r **Valor convertido:** ${Number(idsToken.replace('rem', '')) * 16}px \n\r base 16px`);    
                    }

                    return new vscode.Hover(` **IDS Tokens:**\n\r **Valor do token:** *${idsToken}*`);
                }
            }
        }
    });

    context.subscriptions.push(command);
}

module.exports = showTokenValue