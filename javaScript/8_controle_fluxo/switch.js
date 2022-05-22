let expression = 'c';

switch(expression) {
    case 'a': // Caso a resposta seja essa. 
        console.log('a');
        break 
    
    case 'b':
        console.log('b');
        break // Para dizer que o caso acabou.

    default: // valor padrão a ser executado caso nenhum caso for verdadeiro.
        console.log('Nenhum');
        break
}