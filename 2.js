function IndicesMaiorMenor(array) {
    let maiorValor = array[0], menorValor = array[0];
    let indMaior = 0, indMenor = 0

    for (let ind = 1; ind < array.length; ind++) {
        if (array[ind] > maiorValor) maiorValor = array[ind], indMaior = ind
        if (array[ind] < menorValor) menorValor = array[ind], indMenor = ind
    }
    return { indMaior, indMenor };
}

const numeros = [7, 6, 8, 4, 1]
const { indMaior, indMenor } = IndicesMaiorMenor(numeros)

console.log(`O índice do maior valor é ${indMaior}`)
console.log(`O índice do menor valor é ${indMenor}`)