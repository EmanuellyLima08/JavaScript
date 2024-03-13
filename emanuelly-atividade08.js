// Criar uma classe Aluno em JavaScript que represente um aluno em uma
//instituição de ensino. A classe deve receber informações do aluno,
//calcular sua idade e apresentar-se como métodos.

// Requisitos:
// A classe Aluno deve ter os seguintes atributos:
// ra: Número de Registro do Aluno (string)
// nome: Nome completo do aluno (string)
// dataNascimento: Data de nascimento do aluno (data)
// curso: Curso do aluno (string)

// A classe Aluno deve ter os seguintes métodos:
// calcularIdade(): Calcula e retorna a idade do aluno em anos.
// apresentar(): Exibe as informações do aluno no formato:

class Aluno {
  constructor(ra, nome, dataNascimento, curso) {
    this.ra = ra;
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.curso = curso;
  }
  calcularIdade() {
    return 2024 - this.dataNascimento;
  }
  apresentar() {
    console.log(`Meu nome é ${this.nome}, tenho ${this.calcularIdade()} anos.
Eu estudo no Sesi Senai, curso ${this.curso} e estou no 2º ano EM,
meu RM é ${this.ra}.`);
  }
}

const aluno1 = new Aluno(
  "1234",
  "Emanuelly",
  2008,
  "Desenvolvimento de Sistemas"
);
aluno1.apresentar();

//Crie e utilize uma classe "Sorvete" contendo as propriedades: sabor,
//preço e tamanho (P | M | G)
//Crie um sorvete de morango grande
//Crie um sorvete de chocolate pequeno
//Crie um sorvete de melância médio
//Altere o preço do sorvete de morango grande para R$10,51
console.log(`------------------------------------------------------`);
class Sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
  criarSorvete() {
    console.log(
      `O sorvete de ${this.sabor}, de tamanho ${this.tamanho}, custa R$ ${this.preco}!`
    );
  }
  getPreco() {
    //encapsulamento - proteger
    return this.preco;
  }
  setPreco(novoPreco) {
    this.preco = novoPreco;
  }
}
const sMorango = new Sorvete("Morango", 9, "G");
const sChocolate = new Sorvete("Chocolate", 3.5, "P");
const sMelancia = new Sorvete("Melância", 6, "M");
sMorango.criarSorvete();
sChocolate.criarSorvete();
sMelancia.criarSorvete();

sMorango.setPreco(10.51);
sMorango.criarSorvete();

//Exercícios
//1. Comparação de strings (sem case sensitive): Escreva uma função em JavaScript, que recebe duas strings e verifica se elas são iguais, ignorando o tamanho das letras (maiúsculas e minúsculas)
console.log(`---------------------------------------------------`);
function comparaStrings(string1, string2) {
  if (string1.toLowerCase() === string2.toLowerCase()) {
    //strings convertidas para minúsculas e feita a comparação
    console.log("As strings são iguais.");
  } else {
    console.log("As strings são diferentes.");
  }
}
comparaStrings("Olá, eu sou a Emanuelly", "Oi, sou o João");

//2.Extrair números de uma string: Crie uma função em JavaScript que recebe uma string e retorna uma lista contendo apenas os números encontrados nela.
console.log(`----------------------------------------------------`);
function extraiNumeros(string) {
  return string.match(/\d+/g) || []; //o método match() retorna um array contendo todas as correspondências encontradas na string ou null se não houver correspondências. || é utilizado para retornar um array vazio [] no caso de o resultado de match() ser null.
}
console.log(
  //A função extrai esses números e os retorna em um array
  extraiNumeros(
    "Olá, meu nome é Emanuelly, tenho 16 anos, nasci no ano de 2008, tenho 2 pets!"
  )
);

//3.Inverter a ordem das palavras em uma frase: Desenvolva uma função em JavaScript que recebe uma frase e retorna uma nova string com a ordem das palavras invertida.
console.log(`----------------------------------------------------`);
function inverteOrdemPalavras(frase) {
  //a frase é primeiro dividida em um array de palavras usando o método split(" "), onde " " é o delimitador que separa as palavras. Isso retorna um array contendo todas as palavras da frase. reverse() inverte a ordem das palavras dentro do array. join(" ") junta todas as palavras do array em uma única string, separando-as novamente por um espaço. Isso cria a frase com a ordem das palavras invertida.
  return frase.split(" ").reverse().join(" ");
}
console.log(inverteOrdemPalavras("Olá, meu nome é Emanuelly, tenho 16 anos!"));
