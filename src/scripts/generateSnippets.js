const fs = require('fs')
const tokens = require('../mappers/tokens')
const path = require('path')

console.log("building snippets...")

const keys = Object.keys(tokens)

const generatePrefix = (value) => {
    const pattern = "rem"
    const remLength = value.match(new RegExp(pattern, "g") || [])?.length || 0

    if (remLength === 1) {
        return [value, `${Number(value.replace('rem', '')) * 16}px` ]
    }

    return [value]
}

const generateDescription = (value) => {
    const pattern = "rem"
    const remLength = value.match(new RegExp(pattern, "g") || [])?.length || 0

    if (remLength === 1) {
        return `variável retorna: ${value}; \n com 16px de base resulta em: ${`${Number(value.replace('rem', '')) * 16}px`}`
    }

    return `Variável retorna: ${value}`
}

const snippets = keys.reduce((acc, curr) => {
    
    return {
        ...acc,
        [curr]: {
            "prefix": generatePrefix(tokens[curr]),
            "body": [`var(${curr})`],
            "description": generateDescription(tokens[curr])
          }
    }
}, {})

fs.writeFile(path.resolve(__dirname, "../snippets/tokens.json"), JSON.stringify(snippets), () => {
   console.log("snippets builded at: /snippets/tokens.json")
   return 
})