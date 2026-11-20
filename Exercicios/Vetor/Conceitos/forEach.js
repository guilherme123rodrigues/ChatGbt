/*
let funcionarios = ['Maria', 'Pedro', 'Eduardo', 'João', 'Carlos', 'Tadeu', 'Felie']

funcionarios.forEach(funcionario => 
    {
        console.log(`Funcionario: ${funcionario}`)
    }
)
*/

let produtos = [
    { nome: 'Teclado', preco: 340 },
    { nome: 'Mouse', preco: 323 },
    { nome: 'Webcam', preco: 65 }
]

produtos.forEach((produto, indice) => { 
console.log(`Código ${indice} Produto: ${produto.nome} de ${produto.preco.toLocaleString("pt-br", {style: "currency", currency : "BRL"})} por apenas ${(produto.preco * 0.90).toLocaleString('pt-br', {style: 'currency', currency: 'brl'})}`)
}
)