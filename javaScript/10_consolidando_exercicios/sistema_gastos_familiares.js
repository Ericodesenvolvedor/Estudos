/* 
    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:

    receitas: []
    despesas: []

    Agora, cire uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a familia está com saldo positivo ou negativo, seguido do valor do saldo.
*/

const gastosFamiliares = {
    receitas: [1200, 650],
    despesas: [100, 400, 80, 250, 120]
}

function calcularValores(value1, value2) {
    return value1 + value2
}

let totalReceitas = gastosFamiliares.receitas.reduce(calcularValores);
let totalDespesas = gastosFamiliares.despesas.reduce(calcularValores);

function saldo(receitas, despesas) {
    valorFinal = receitas - despesas;

    if (valorFinal < 0) {
        console.log(`O valor final é ${valorFinal} e vocês estão com saldo negativo`);
    } else {
        console.log(`O valor final é ${valorFinal} e vocês estão com saldo positivo`);
    }
}

saldo(totalReceitas, totalDespesas);