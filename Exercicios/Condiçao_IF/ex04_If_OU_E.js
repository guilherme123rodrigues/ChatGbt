// As duas condição tem que ser verdadeira
let idade = 20
let dinheiro = 100

if (idade >= 18 && dinheiro >= 150) {
    console.log('Pode comprar')
}

// Umas das condição tem que ser verdadeira
let dia = 'SÁBADO'

if (dia.toLocaleLowerCase() === 'sábado' || dia.toLocaleLowerCase() === 'somingo') {
    console.log('Fim de semana')
}