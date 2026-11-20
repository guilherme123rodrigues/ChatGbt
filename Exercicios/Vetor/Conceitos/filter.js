/*
let precos = [8, 15, 25, 5, 40, 12]
let precosFiltrados = precos.filter(valor => valor > 5) // Filtrando o array [precos] com valores maior que 5, e guardando em uma variável [precosFiltrados]

precosFiltrados.sort((a, b) => a - b) // Ornando em ordem crescente

console.log(`${precosFiltrados}`) // Mostrando no Output


let notas = [10, 9.5, 8, 7.5, 5]

let notaFiltradas = notas.filter(nota => nota >= 7)

console.log(notaFiltradas)

let idades = [12, 18, 25, 16, 30, 14]

let menoresDeidade = idades.filter(idade => idade < 18)

console.log(menoresDeidade)
*/

let produtos = [
    {nome: 'Teclado', preco: 150},
    {nome: 'Mouse', preco: 50},
    {nome: 'Monitor', preco: 800},
    {nome: 'Fone', preco: 100},
    {nome: 'Webcam', preco: 180},
]

let menorPrecos = produtos.filter(valor => valor.preco < 160)

console.log(menorPrecos)