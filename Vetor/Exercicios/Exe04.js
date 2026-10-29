// Função para pegar apenas valores [PAR]
function vetor() {
    let array = [] // crio um Array/Vetor para armazenar os valores
    let c = 10 // Crio um contador para controlar o loop

    // Cria um loop com condição
    do {

        // Verifico se o resto da divisão de [c] por [2] é [0]
        if (c % 2 === 0) {

            // Se for [0], eu pego e adiciono no final do Array/Vetor
            array.push(c)
        }

        // Subtraio 1 do valor c
        c--
    } while (c > 0) // Verifico se [c] é maior que [0], pra encerrar o loop
    return array // No final do loop retorno o array com os valores [PAR]
}

// Armazenamento recebe o retorno da função com os valores dentro de um Array/Vetor
let armazenamento = vetor()

console.log(`${armazenamento.reverse()}`) // Exibo os valores em ordem crescente com o reverse