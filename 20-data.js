//Criando um objeto do tipo "data" Date()
var data1 = new Date();
console.log(data1);

//Criando um obejto do tipo data com data específica
var data2 = new Date("2005=05-12");
console.log(data2);

//Extraindo partes de uma data
var data3 = new Date("2008=01-25");
console.log(`Data: ${data3}`);
console.log(`Ano: ${data3.getFullYear()}`);
console.log(`Mês: ${data3.getMonth() + 1}`);
console.log(`Dia: ${data3.getDate()}`);

const mes = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  " Dezembro",
];
console.log(`Retornando o mês por escrito!`);
console.log(`Mês: ${mes[data3.getMonth()]}`);

const diaDaSemana = [
  "Domigo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
console.log(`Dia da semana: ${diaDaSemana[data3.getDay()]}`);

var difAnos = data1.getFullYear() - data3.getFullYear(); //calculando a diferença dos anos
if (
  data1.getMonth() < data3.getMonth() ||
  (data1.getMonth() === //verifica se o mês do aniversário já passou neste ano ou se o mês do aniversário é o mesmo, mas o dia atual ainda é anterior ao dia do aniversário
  data3.getMonth() && data1.getDate() < data3.getDate())) {
  difAnos--; //se uma dessas condições for verdadeira, então subtraímos um ano
}
console.log(`A Emanuelly tem ${difAnos} anos!`);

//correção passada em aula:
// const diferenca = data1.getTime() - data3.getTime()
// const idade = Math.floor(diferenca / (1000 * 60 * 60 *24 * 365.25));
// console.log(`Idade: ${idade}`);
