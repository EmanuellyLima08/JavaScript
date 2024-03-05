let contador = 0;

while (contador < 5) {
  contador++;
  console.log(contador);
}

console.log("--------------------------------------");
var x = 11;
while (x > 10) {
  console.log(`Entrei no laço while...`);
  x--;
}
console.log(`Terminei!`);

console.log("--------------------------------------");
var countdown = 5;
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log(`Lançamento!`);

//Estourando o limite do cartão - versão while
console.log("--------------------------------------------------");
var limite = 500;
var fatura = 0;

while (fatura <= limite) {
  let gasto = Math.random() * 100; //Math.random() cria valor aleatório entre 0 e 1
  fatura += gasto;
  console.log(
    `Gastei R$ ${gasto.toFixed(2)} ------------- Fatura: R$ ${fatura.toFixed(
      2
    )}`
  );

  fatura > limite && console.log(`Estourou o limite do cartão!`); //&& faz somente um IF, sem else.
}

//Estourando o limite do cartão - versão do while
console.log("--------------------------------------------------");
var limite = 500;
var fatura = 0;

do {
  let gasto = Math.random() * 100;
  fatura += gasto;
  console.log(
    `Gastei R$ ${gasto.toFixed(2)} ------------- Fatura R$ ${fatura.toFixed(2)}`
  );
  fatura > limite && console.log(`Estourou o limite do cartão!`);
} while (fatura <= limite);
