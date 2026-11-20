let funcionarios = [
    {nome: "Carlos", salario: 2500, setor: "TI"},
    {nome: "Maria", salario: 3500, setor: "RH"},
    {nome: "Pedro", salario: 4000, setor: "TI"},
    {nome: "Ana", salario: 3000, setor: "Financeiro"},
    {nome: "Lucas", salario: 4500, setor: "TI"}
]

let indiceFuncionario = funcionarios.findIndex(funcionario => funcionario.setor === "TI")
let indiceSalario = funcionarios.findIndex(funcionario => funcionario.salario > 3000)
let indiceRoberto = funcionarios.findIndex(funcionario => funcionario.nome === "Roberto")


console.log(indiceFuncionario)
console.log(indiceSalario)
console.log(indiceRoberto)