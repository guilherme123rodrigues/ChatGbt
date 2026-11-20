let produtos = [
    {nome: "Notebook", preco: 3500, estoque: 5},
    {nome: "Mouse", preco: 80, estoque: 0},
    {nome: "Teclado", preco: 150, estoque: 12},
    {nome: "Monitor", preco: 1200, estoque: 3},
    {nome: "Headset", preco: 250, estoque: 0},
    {nome: "Webcam", preco: 180, estoque: 8}
]

let produtosDisponiveis = produtos.filter(produto => produto.estoque > 0)
let produtoEncontrado = produtos.find(produto => produto.preco > 1000)
let indiceDoProduto = produtos.findIndex(produto => produto.nome === "Webcam")

console.log(produtosDisponiveis)
console.log(produtoEncontrado)
console.log(indiceDoProduto)