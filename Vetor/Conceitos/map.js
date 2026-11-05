/*
let valor = [1600, 2500, 3200, 4500, 5100, 6050]
let valorMultiplicado = valor.map(num => num * 0.12 )

console.log(valorMultiplicado)
*/

let produtos = [
    {nome: "Teclado", preco: 45},
    {nome: "Fone de ouvido", preco: 145},
    {nome: "Monitor", preco: 645},
    {nome: "SDD", preco: 345},
]

let desconto10 = produtos.map(produto => ({nome: produto.nome, preco: produto.preco * 0.75}))

console.log(desconto10)