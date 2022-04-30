const comidaFavorita = [
    'BatataFrita', 
    'Mandioca', 
    'Arroz',
    'Feijão'
]

// Acessando itens da array (lenght/indice)

console.log(comidaFavorita[0]) // [0] - indice/posição que se encontra.

// Para saber a contagem total de itens

console.log(comidaFavorita.length) // retornará 4.

// acessando objeto que está dentro da array

const series = [
    'como vender drogas online',
    'Sex education',
    'Karate kid',
    {
        karate: 'karate kid 1',
        karate2: 'karate kid 2'
    }
]

console.log(series[3].karate2)