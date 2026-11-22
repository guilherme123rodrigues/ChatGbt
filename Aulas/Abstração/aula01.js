
// Função que recebe qualquer objeto
function realizarPagamento(pagamento, valor = 0) {
    // pagamento = Classe, valor = 
    // Pagar é o métoda da classe
    pagamento.pagar(valor);
};


// Classe Pai
class Pagamento {

    // Contrutor que verificar se a classe que foi instãnciada é a da classe pai
    constructor() {

        // Verificando qual calsse foi instânciada.
        if (new.target === Pagamento) {

            // Irá retornar um erro na tela. Se classe instânciada for a classe Pagamento
            throw new Error("Classe abstrata!");
        };
    };

    pagar(valor) {
        // Obriga as classe filhas ter o método da classe pai que é o método Pagar(valor)
        throw new Error("Implemente o método pagar()");
    };
};

// Classes filhas
class Pix extends Pagamento {
    pagar(valor) {
        console.log(`Valor de ${(valor).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} realizado via Pix! Teve um desconto de 10%, valor atualizado para ${(valor * 0.90).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`);
    };
};


class Cartao extends Pagamento {
    pagar(valor) {
        console.log(`Valor de ${valor.toLocaleString('pt-br', {style: 'currency', currency: 'brl'})} realizado via Cartão`);
    };
};

class Boleto extends Pagamento {
    pagar(valor) {
        console.log(`Valor de ${(valor).toLocaleString('pt-br', {style: 'currency', currency: 'brl'})} relaizado via Boleto! Teve uma taxa de 5%, valor atualizado para ${(valor* 1.05).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`);
    };
};


let pix = new Pix();

realizarPagamento(pix, 340); // Passando os paramento para a função realizarPagamento