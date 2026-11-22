class Usuario {
    // Cria a idade privada, podedendo ser acessada/modificada apenas na classe, nõa pode ser acessada/modificada externamente
    #idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.#idade = idade;
    };

    // Com esse método, ele permite modificar externamente
    altarIdade(NovaIdade){
        this.#idade = NovaIdade;
    };

    // Com esse método, ele permite acessar externamente
    consultarIdade(){
        return this.#idade
    }
};

let usuario = new Usuario('Maria', 43)

// Exemplo
/// usuario.#idade = 12 // Ele vai lançar um erro, porque idade não pode ser acessada/modificada externamente, porque ela é privada, só a classe que pode acessar/modificar ela

//usuario.nome = 'Guilherme' // Aqui conseguimos acessar/modificar porque ela é pública

usuario.altarIdade(34) // Consiguimos alterar a idade privada porque estamos modificando ela dentro da classe, com um método alteraIdade() que pertence a classe
console.log(usuario.consultarIdade()) // Conseguimos consultar a idade privada porque estamos acessando ela dentro da classe, com um métoda consultarIdade() que peretnce a classe