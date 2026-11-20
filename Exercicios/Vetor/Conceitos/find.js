/*
let numeros = [5, 8, , 12, 17, 20, 25]

let resultado = numeros.find(numero => numero > 15)

console.log(resultado)

*/

let produtos = [
    {nome: "Notebook", preco: 3500, estoque: 5},
    {nome: "Mouse", preco: 80, estoque: 0},
    {nome: "Teclado", preco: 150, estoque: 12},
    {nome: "Monitor", preco: 1200, estoque: 3},
    {nome: "Headset", preco: 250, estoque: 0},
    {nome: "Webcam", preco: 180, estoque: 8}
]

let produtoEncontrado = produtos.find(produto => produto.nome == "Monitor")
let produtoDisponivel = produtos.find(produto => produto.preco < 200 && produto.estoque > 0)
let produtoInexistente = produtos.find(produto => produto.nome == "Impressora")

console.log(produtoEncontrado)
console.log(produtoDisponivel)
console.log(produtoInexistente)