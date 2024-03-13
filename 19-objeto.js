// //Definindo uma classe Pessoa
// // class Pessoa {
// //   constructor(pNome, pIdade) {
// //     this.nome = pNome;
// //     this.idade = pIdade;
// //   }
// //   apresentarSe() {
// //     console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
// //   }
// //   envelhecer() {
// //     this.idade++;
// //   }
// // }

// // //Criando objetos do "tipo" Pessoa
// // var pessoa1 = new Pessoa("Emanuelly", 16);
// // var p2 = new Pessoa("Gustavo", 30);

// // pessoa1.apresentarSe();
// // p2.apresentarSe();

// // pessoa1.envelhecer();
// // pessoa1.apresentarSe();

// // p2.envelhecer();
// // p2.apresentarSe();

// // //---------------------------------------------------------------
// // //Abstração: abstraindo as características mais importantes
// // //e descartando detalhes irrelevantes, criando assim uma representação simplificada
// // console.log(`--------------------Abstração----------------------`);

// // class Pet {
// //   constructor(nome, idade, tipo) {
// //     this.nome = nome;
// //     this.idade = idade;
// //     this.tipo = tipo;
// //   }

// //   alimentar() {
// //     console.log(`${this.nome} foi alimentado!`);
// //   }
// // }
// // const meuPet = new Pet("Rex", 2, "Cachorro");
// // console.log(
// //   `Meu pet é um ${meuPet.tipo} chamado ${meuPet.nome} e tem ${meuPet.idade} anos!`
// // );
// // meuPet.alimentar();

// // //-------------------------------------------------------------
// // //Herança: uma classe (classe filha / subclasse) herda
// // //as características de outra classe (classe mãe / superclasse);
// // console.log(`----------------------Herança----------------------`);
// // class Animal {
// //   constructor(nome, idade, tipoAlimentacao) {
// //     this.nome = nome;
// //     this.idade = idade;
// //     this.tipoAlimentacao = tipoAlimentacao;
// //   }

// //   alimentar() {
// //     console.log(`O animal ${this.nome} foi alimentado!`);
// //   }

// //   emitirSom() {
// //     console.log(`Barulho padrão de animal!`);
// //   }
// // }

// // class Cachorro extends Animal {
// //   alimentar() {
// //     console.log(`O cachorro ${this.nome} foi alimentado!`);
// //   }

// //   emitirSom() {
// //     console.log(`Au au!`);
// //   }
// // }
// // const pet = new Animal("Carlos", 10, "Comida espacial");
// // const meuCachorro = new Cachorro("Rex", 3, "Ração");

// // pet.alimentar();
// // pet.emitirSom();
// // console.log("");
// // meuCachorro.alimentar();
// // meuCachorro.emitirSom();

// // //-------------------------------------------------------------
// // //Encapsulamento: : visa “proteger” algumas propriedades
// // // da classe para que elas não possam ser acessadas ou
// // //modificadas diretamente por outras partes do código.
// // console.log(`------------------Encapsulamento-------------------`);
// // class Petzinho {
// //   constructor(nome, idade, tipo) {
// //     this.nome = nome;
// //     this.idade = idade;
// //     this.tipo = tipo;
// //   }

// //   getNome() {
// //     return this.nome;
// //   }

// //   setNome(novoNome) {
// //     this.nome = novoNome;
// //   }
// // }

// // const novoPetzinho = new Petzinho("Bob", 3, "Cachorro");

// // console.log(novoPetzinho.getNome()); //"Bob"
// // novoPetzinho.setNome("Rex");
// // console.log(novoPetzinho.getNome()); //"Rex"

// //----------------------------------------------------------------
// //Poliformismo: um objeto pode ser tratado de maneiras diferentes,
// //dependendo do contexto em que é utilizado.
// console.log(`-------------------Poliformismo--------------------`);
// class Animal {
//   constructor(nome) {
//     this.nome = nome;
//   }

//   fazerBarulho() {
//     console.log("O animal faz um barulho genérico.");
//   }
// }

// class Cachorro extends Animal {
//   constructor(nome) {
//     super(nome);
//   }

//   fazerBarulho() {
//     console.log("O cachorro late!");
//   }
// }

// class Gato extends Animal {
//   constructor(nome) {
//     super(nome);
//   }

//   fazerBarulho() {
//     console.log("O gato mia!");
//   }
// }

// // Exemplo de uso
// const animais = [
//   new Cachorro("Rex"),
//   new Gato("Mia"),
//   new Animal("Bob"), // Animal genérico
// ];

// for (const animal of animais) {
//   animal.fazerBarulho();
// }

//--------------------------------------------------------------
console.log(`---------------------Exemplos---------------------`);
//Criando uma classe Retângulo
class Retangulo {
  constructor(comprimento, largura) {
    this.comprimento = comprimento;
    this.largura = largura;
  }
  obterPerimetro() {
    return this.comprimento * 2 + this.largura * 2;
  }
  obterArea() {
    return this.comprimento * this.largura;
  }
  setComprimento(novoComprimento) {
    this.comprimento = novoComprimento;
  }
  setLargura(novaLargura) {
    this.largura = novaLargura;
  }
}

//Criando um objeto do "tipo" Retângulo
const ret = new Retangulo(10, 15);

function displayRet(retangulo){
console.table(retangulo);
console.log(`Comprimento = ${retangulo.comprimento}`);
console.log(`Largura = ${retangulo.largura}`);
console.log(`Área = ${retangulo.obterArea()}`);
console.log(`Perímetro = ${retangulo.obterPerimetro()}`);
}
displayRet(ret);
ret.setComprimento(20);
ret.setComprimento(20);
displayRet(ret);
ret.setLargura(20);
displayRet(ret); 