/* 
    expressão new
    criar um novo objeto    
    this = chave 
*/

function person(name) {
    this.name = name
    this.walk = function () {
        return this.name + ' Está andando'
    }
}

const eric = new person('Eric')
const rebeca = new person('Rebeca')

console.log(eric.walk() + ' e ' + rebeca.walk())