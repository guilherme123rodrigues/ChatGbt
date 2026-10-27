let numero1 = [1, 3, 5, 9] // Primeiro array/vetor
let numero2 = [0, 4, 2, 10] // Segundo array/vetor
let numero3 = numero1.concat(numero2) // Juntando o primeiro array/vetor com o segundo, criando um, terceiro array/vetor

console.log(`${numero3.sort((a, b) => a - b)}`) // Mostrando o resultado na Output em ordem crescente.