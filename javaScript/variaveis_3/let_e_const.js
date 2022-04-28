// const e let são locais e só funcionam no escopo onde foi criada.

console.log('> existe y antes do bloco? ', y)

{
    let y = 0 // não existe no escopo global, retornara erro.
}

console.log('> existe y antes do bloco? ', y)

// Iniciando váriavel antes de atribuir seu valor

{
    console.log('> existe y antes do bloco? ', x)
    let x = 0 // retornará erro, pois o seu valor deve ser iniciado antes de ser chamado, ou seja, sua variárivel existe, porém não se sabe o valor.
}

console.log('> existe y antes do bloco? ', x) // aqui retornará erro, pois o x não está neste bloco.

// Caso certo 

{
    let a = 0
    console.log('> existe y antes do bloco? ', a)
}