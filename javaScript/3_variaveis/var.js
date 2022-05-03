// var é global e, também local.
// o javascript lê o código de cima para baixo

console.log('> existe x antes do bloco? ', x) // undefined

{
    var x = 0
}

console.log ('> Existe x depois do bloco? ', x)