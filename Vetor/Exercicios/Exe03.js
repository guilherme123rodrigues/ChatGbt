let vetor = ['Manga', 'Perá']
let inverte = vetor[0].split('').reverse().join('')
vetor.splice(0, 1, inverte)

console.log(vetor)