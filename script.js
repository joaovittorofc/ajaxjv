// Classe base (abstração)
class Animal {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  emitirSom() {
    console.log(`${this.nome} fez um som.`);
  }
}

// Classe herdeira 1
class Cachorro extends Animal {
  emitirSom() {
    console.log(`${this.nome} latiu: Au au!`);
  }
}

// Classe herdeira 2
class Gato extends Animal {
  emitirSom() {
    console.log(`${this.nome} miou: Miau!`);
  }
}

// Instâncias
const rex = new Cachorro("Rex", 5);
const luna = new Gato("Luna", 3);
const max = new Cachorro("Max", 2);

// Teste de métodos
rex.emitirSom();  // Rex latiu: Au au!
luna.emitirSom(); // Luna miou: Miau!
max.emitirSom();  // Max latiu: Au au!

console.log(rex instanceof Animal);  // true
console.log(luna instanceof Gato);   // true
