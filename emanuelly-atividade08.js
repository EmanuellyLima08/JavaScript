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
