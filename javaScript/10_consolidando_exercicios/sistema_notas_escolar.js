/* 
    Criar um algoritmo que transforme as notas do sistema numérico 
    para sistema de notas em caracteres tipo A B C.

    De 90 para cima - A
    Entre 80 - 89   - B
    Entre 70 - 79   - C
    Entre 60 - 69   - D
    Menor que 60    - F
*/

const notas = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 15, 25, 35, 45, 55, 89, 79, 69, 47, 84];
const caracteres = ['A', 'B', 'C', 'D', 'F'];

for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 60) {
        console.log(`Nota número: ${notas[i]} = ${caracteres[4]}`);
    } 
    
    else if (notas[i] == 60 || notas[i] <= 69) {
        console.log(`Nota número: ${notas[i]} = ${caracteres[3]}`);
    } 

    else if (notas[i] == 70 || notas[i] <= 79) {
        console.log(`Nota número: ${notas[i]} = ${caracteres[2]}`);
    }

    else if (notas[i] == 80 || notas[i] <= 89) {
        console.log(`Nota número: ${notas[i]} = ${caracteres[1]}`);
    }

    else if (notas[i] >= 90) {
        console.log(`Nota número: ${notas[i]} = ${caracteres[0]}`);
    }
}