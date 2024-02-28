//Exercícios função
//Ativ 1: função retorno de idade
function idade(ano) {
  return 2024 - ano;
}
console.log(`A idade dessa pessoa é ${idade(2008)}.`);

//Ativ 2: função retorno do nº de km que um carro pode viajar
console.log(`----------------------------------------------`);
function km(combustivel) {
  return 12 * combustivel;
}
console.log(`Com 36 Litros, o carro pode viajar ${km(36)} Km.`);

//Lista de Exercícios
//Ativ 1
console.log(`------------------------------------------`);
function votar(idade) {
  if (idade < 16) console.log(`Você não pode votar!`);
  else if (idade >= 16 && idade < 18) console.log(`Você vota opcionalmente!`);
  else console.log(`Você pode votar`);
}
votar(13);

//Ativ 2
console.log(`------------------------------------------`);
function votacao(idade2) {
  switch (true) {
    case idade2 < 16:
      console.log(`Você não pode votar!`);
      break;
    case idade2 >= 16 && idade2 < 18:
      console.log(`Você vota opcionalmente!`);
      break;
    default:
      console.log(`Você pode votar!`);
      break;
  }
}
votacao(40);
