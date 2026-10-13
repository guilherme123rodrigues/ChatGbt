function gerar() {

    let botao = window.document.querySelector('#botao')

            botao.addEventListener('click', () => {
                let valor = window.document.querySelector('#valor')
                let tabuada = window.document.getElementById('tabuada')
                let cont = 0
                while (cont <= 10) {
                    tabuada.innerHTML += `${valor.value} x ${cont} = ${valor.value*cont}<br>`
                    cont++
                }

            }
        )
}