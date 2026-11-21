class Criar {
    static solicitar(tipo, dados) {
        if (tipo === 'Moto') {
            return new Moto(dados.marca, dados.cilindrada)
        };

        if (tipo === 'Carro') {
            return new Carro(dados.marca, dados.modelo)
        };
    };
};

class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    };

    apresentar() {
        console.log(`Marca: ${this.marca}`)
        console.log(`Modelo: ${this.modelo}`)
    }
};

class Moto {
    constructor(marca, cilindrada) {
        this.marca = marca;
        this.cilindrada = cilindrada;
    };

    apresentar() {
        console.log(`Marca: ${this.marca} Cilindrada: ${this.cilindrada}`)
    };
};

let veiculo = Criar.solicitar('Carro', { marca: 'Honda', modelo: 'Fit' })
veiculo.apresentar()