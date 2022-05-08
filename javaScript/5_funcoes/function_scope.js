let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(createThink(subject)) // Aqui entramos dentro da função e modificamos seu valor de retorno.
console.log(subject) // Essa retornará o valor da váriavel let subject.