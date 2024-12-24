const fs = require('fs')
const tokens = require('../src/constants/tokens')
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
            "prefix": generatePrefix(tokens[curr].value),
            "body": [`var(${curr})`],
            "description": generateDescription(tokens[curr].value)
          }
    }
}, {})

const buildPath = path.resolve(__dirname, "../../dist/tokens.json")
fs.writeFile(path.resolve(buildPath), JSON.stringify(snippets), () => {
   console.log(`snippets builded at: ${buildPath}`)
   return 
})