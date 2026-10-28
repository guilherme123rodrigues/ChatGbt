let vetor = ['Manga', 'Perá']
let inverter = vetor[0].split('').reverse().join('')
vetor.splice(0, 1, inverter)

console.log(vetor)