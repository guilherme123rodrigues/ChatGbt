
// Função que recebe qual objeto
function realizarPagamento(pagamento, valor = 0) {
    // pagamento = Classe, valor = valor
    pagamento.pagar(valor);
};

// Classe Pai
class Pagamento {

    // Contrutor que verificar se a classe que foi instãnciada é a da classe pai
    constructor() {

        // Verificando qual calsse foi instânciada.
        if (new.target === Pagamento) {

            // Irá retornar um erro na tela.
            throw new Error("Classe abstrata!");
        };
    };

    pagar(valor) {
        // Obriga as classe filhar ter o método da classe pai
        throw new Error("Implemente o método pagar()");
    };
};


// Classes filhas
class Pix extends Pagamento {
    pagar(valor) {
        console.log(`Valor de ${(valor * 0.90).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} realizado em Pix! Teve um desconto de 10%`);
    };
};


class Cartao extends Pagamento {
    pagar(valor) {
        console.log(`Valor de ${valor.toLocaleString('pt-br', {style: 'currency', currency: 'brl'})} realizado via Cartão`);
    };
};

class Boleto extends Pagamento {
    pagar(valor) {
        console.log(`Valor de ${(valor* 1.15).toLocaleString('pt-br', {style: 'currency', currency: 'brl'})} relaizado via Boleto! Teve uma taxa de 15%`);
    };
};


let pix = new Cartao();
realizarPagamento(pix, 340); // Passando os paramento para a função realizarPagamento