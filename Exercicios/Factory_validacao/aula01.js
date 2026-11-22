class CriarFactory {
    static Solicitar(nome, idade=0) {
        return new CriarUsuario(nome, idade)
    };
};

class CriarUsuario{
    constructor(nome, idade) {
        if(nome === '') {
            throw new Error('Nome inválido!')
        } else if (idade <= 0) {
            throw new Error('Idade inválida!')
        };

        this.nome = nome;
        this.idade=  idade
    };

    apresentar() {
        console.log(`Me chamo ${this.nome} tenho ${this.idade} anos.`)
    }
};

let usuario = CriarFactory.Solicitar('Guilherme', 10)
usuario.apresentar()
