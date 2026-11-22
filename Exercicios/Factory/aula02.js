class Usuario {
    static criar(cargo, salario = 0) {
        return new criarUsuario(cargo, salario);
    };
};

class criarUsuario {
    constructor(cargo, salario) {
        this.cargo = cargo;
        this.salario = salario;
    };
};

let usuario = Usuario.criar('TI', 8900)
console.log('Cargo', usuario.cargo, 'Salário', usuario.salario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))