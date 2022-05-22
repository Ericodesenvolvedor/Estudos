// 1 - registra a função, dispara um erro, o try executa a função, e o cath recebe o erro, com o parametro.

function sayMyName(nome = '') {
    if (nome === '') {
        throw new Error('Nome invalido!');
    }

    console.log('Depois do erro');
}

try {
    sayMyName();
} catch(e) {
    console.log(e);
}