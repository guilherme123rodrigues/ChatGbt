class Configuracao {
    static #instancia

    // Verifica se já tem uma instância criada
    constructor(nome, versao, idioma) {
        if(Configuracao.#instancia){
            return Configuracao.#instancia
        }
        return Configuracao.#instancia = this

        this.nome = nome
        this.versao = versao
        this.idioma = idioma
    }

    static obterInstancia() {
        if(!Configuracao.#instancia) {
            return new Configuracao()
        }

        return Configuracao.#instancia
    }

    apresentar() {
        return `Nome: ${this.nome}
Versão: ${this.versao}
Idioma: ${this.idioma}`
    }
}

let conf1 = Configuracao.obterInstancia()
let conf2 = new Configuracao('Sistama de configuração', '1.0', 'Português')


console.log(conf2.apresentar())
