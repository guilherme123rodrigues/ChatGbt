function realizarPagamento(tipo) {
    tipo.pagar();
};

// Classe Pai
class Pagamento {
    pagar() {
        console.log('Processando pagamento...');
    };

    des
};


// Classes Filhas, erdando os métodos da classe Pai
class Pix extends Pagamento {
    pagar() {
        console.log('Pagamento realizado via Pix!');
    };
};

class Cartao extends Pagamento {
    pagar() {
        console.log('Pagamento realizado via Cartão!');
    };
};

class Boleto extends Pagamento {
    pagar()  {
        console.log('Pagamento realizado via Boleto!');
    };
};

class Dinheiro extends Pagamento {
    pagar() {
        console.log('Pagamento realizado via Dinheiro!');
    };
};

let pix = new Pix();
let cartao = new Cartao();
let boleto = new Boleto();
let dinheiro = new Dinheiro()

let forma = dinheiro;

if (forma === cartao) {
    realizarPagamento(cartao);
} else if (forma === pix) {
    realizarPagamento(pix);
} else if (forma === boleto) {
    realizarPagamento(boleto);
} else {
    realizarPagamento(dinheiro);
};