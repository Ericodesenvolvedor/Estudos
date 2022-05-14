// Manipulando arrays

let techs = ['html', 'css', 'js']

// Adicionar um item no fim
techs.push('nodeJs')

// Adicionar um item no começo
techs.unshift('sql')

// Remover item do final
techs.pop()

// Remover item do começo
techs.shift()

// Pegar somente alguns itens
// console.log(techs.slice(1, 3)) // inicio e fim

// remote 1 ou mais itens
techs.splice(1, 1)

// encontra uma posição
let index = techs.indexOf('css')

console.log(techs)