// 1 - declare uma variável com nome weight
// let weight

// 2 - Que tipo de dado é a variável acima?
// console.log(typeof weight)

/*
    3 - Declare uma variável e atribua valores para cada um dos dados:
    name: string
    age: number
    stars: number (float)
    isSubscribed: boolean
*/

// let name = 'Eric'
// let age, stars

// age = 18
// stars = 8.5

// let isSubscribed = true

/* 
    4 - A variável student abaixo é de que tipo de dado?

    let student {}

    4.1 - Atribua a ela as mesmas propriedades e valores do exercicio 3.

    4.2 - Mostre no console a seguinte mensagem:
    <name> de idade <age> pesa <weight> kg.
*/

let student = {
    name: 'Eric',
    age: '18',
    weight: 71,
    stars: 8.5,
    isSubscribed: true
}

// console.log(typeof student)

// console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg`)

// 5- Crie uma variável com nome students para guardar um array vazio

let students = []

// 6 - Coloque nela o valor do objeto do exercicio 4 
students = [
    student
]

// 7- Coloque no console o valor da posição zero do array acima.
console.log(students[0])

// 8 - Crie um novo student e coloque na posição 1 do array students.

const rebeca = {
    nome: 'Rebeca',
    idade: 18,
    cidade: 'São paulo',
    gostaDeMim: true
}

students = [
    student,
    rebeca
]

console.log(students[1])