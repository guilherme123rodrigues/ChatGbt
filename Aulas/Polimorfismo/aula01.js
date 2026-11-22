
// Classe Pai
class Animal {
    emitirSom() {
      console.log(`O aniaml emitiu um som`)  
    };
};


//Classe Filha
class Cachorro extends Animal {
    emitirSom() {
        console.log('Au au au!');
    }
};

//Classe Filha
class Gato extends Animal {
    emitirSom() {
        console.log('Miau miau!');
    };
};

//Classe Filha
class Passaro extends Animal {
    emitirSom() {
        console.log('Piu piu!');
    };
};

//Essas classes filhas vão erdar os metodos da classe Pai

let dog = new Cachorro();
let cat = new Gato();
let passaro = new Passaro()

dog.emitirSom()
cat.emitirSom()
passaro.emitirSom()


// Polimorfismo permite que classes diferentes tenhha o métodos com o mesmo nome, mas com saidas diferentes