let list1 = ['Teclado', 'Mouser', 'Monitor']
let list2 = ['Webcan', 'Fone', 'Microfone'] 
let produto = list1.concat(list2) // Juntando a list1 com o list2.
produto.reverse() // Invertendo a ordem, modificando o vetor original
let copia = produto .toReversed() // Faz uma  cópia do vetor com a ordem invertida novamente colocando em ordem original, porque eu inverti duas vezes
let first = produto.at(0) // Localizando o primeiro item da lista
let last = produto.at(-1) // localziando o último item da lista

console.log(`Invertendo: ${produto}`)
console.log(`Renvertendo: ${copia}`)
console.log(`Primerio produto: ${first}`)
console.log(`Ultimo produto: ${last}`)
