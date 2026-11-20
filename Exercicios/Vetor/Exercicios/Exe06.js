/*
let produtos = [
    {nome: "Teclado", preco: 100},
    {nome: "Mouse", preco: 50},
    {nome: "Monitor", preco: 800}
]

let produto10 = produtos.map(produto => ({nome: produto.nome, precoComDesconto: produto.preco * 0.90}))

console.log(produto10)
*/

let alunos = [
    {nome: "Ana", nota: 5},
    {nome: "Pedro", nota: 4},
    {nome: "Marcos", nota: 5.5}
]

let calculo = alunos.map(aluno => ({nome: aluno.nome, notaFinal: aluno.nota + 2, avaliacao: aluno.nota + 2 > 7?"Aprovado":"Reprovado"}))

console.log(calculo)

let al = [ 2, 4, 3, 5]
al.splice(1, 1, 6)

console.log(al)