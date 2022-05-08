// callback function = chamando uma função e retornando outra.

const sayMyName = (name) => {
    console.log('Antes de executar uma callback')
    name()
    console.log('Depois de executar uma callback')
}

sayMyName(
    () => {
        console.log(10 + 10)
    }
)