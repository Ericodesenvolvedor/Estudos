// Alterar o tipo de dado

// proto coersion (o dado number é forçado a virar string para ocorrer concatenação)
let concatenacao = '2' + 10
console.log(concatenacao)

// proto conversion (O dado é manipulado manualmente, agora temos dois tipos números, ocorrerá um calculo.)
concatenacao = Number('2') + 10
console.log(concatenacao)