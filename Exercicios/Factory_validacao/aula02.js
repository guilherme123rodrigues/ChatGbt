// Classe que não pode ser instânciada
class Usuario {
    constructor() {

        // Verifica se a classe foi instânciada
        if(new.target === Usuario) {
            // Caso ela for instânciada irá mostrar uma mensagem de erro e encerrara o programa
            // throw -> Cria a exceção
            // new Error -> Cria objeto Error com a mesgaem personaizada
            throw new Error("Classe abstrara! Não pode ser instânciada");
        };
    };

    // Static permiti chamar o método da classe sem instãncia-lá
    static solicitar(nome, idade, genero) {

        // validação dos parâmtros
        if (nome === '' || idade < 0 || genero === '') {
            throw new Error('Valor inválido!');
        };

        // Retornar objeto passando os parãmetros
        return new CriarUsuario(nome, genero, idade);
    };
};


// Cria objeto
class CriarUsuario {
    // Deixa a idade privada, apenas a classe consegue acessar/modificar
    #idade
    constructor(nome, idade, genero) {
        this.nome = nome;
        this.#idade = idade;
        this.genero = genero;
    };

    // Método da classe que permiti alterar a idade privada
    alteraIdade(NovaIdade) {
        this.#idade = NovaIdade;
    };

    // Método que permiti mostrar a idade privada
    mostraIdade() {
        return this.#idade
    };

    // método pra apresentar os dados, até as que estão privadas
    apresentar() {
        return `Nome: ${this.nome}
Idade: ${this.#idade}
Gênero: ${this.genero}`
    }
};


let pessoa = Usuario.solicitar('Guilherme', 'Masculino',35)
console.log(pessoa.apresentar())

