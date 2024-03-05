//Laço de repetição FOR
//escrever para o usuário 1000x "Prestar mais atenção nas aulas!"

//mostrando números pares
for (let i = 0; i <= 1000; i += 2) {
  console.log(i);
}

//mostrando números ímpares
console.log("-------------------------------------");
for (let i = 1; i <= 1000; i += 2) {
  console.log(i);
}

//mostrando números ímpares com IF
console.log("--------------------------------------");
for (let i = 1; i < 1000; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

//Escreva todos os números de 1 a 20 com FOR
console.log("---------------------------------------");
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
//Escreva todos os números PARES de 1 a 20 com FOR
console.log("---------------------------------------");
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

console.log("----------------------------------------");
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

//Dado um vetor com números 5, 6, 8, 14, 0, 9, 7, 2.
//Calcule e exiba a somatória de seus elementos utilizando o FOR
console.log("-----------------------------------------");
const numeros = [5, 6, 8, 14, 0, 9, 7, 2];
var soma = 0 //o zero representa que a variável contém números

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
}
console.log(`A somatória dos elementos do vetor é: ${soma}`);

//Dado o vetor com números 5, 6, 8, 14, 0, 9, 7, 2.
//Multiplique todos os seus elementos por 3 utilizando o loop FOR
//Em seguida, mostre o novo vetor
console.log("-------------------------------------------");
let num = [5, 6, 8, 14, 0, 9, 7, 2];
console.table(num);
for (let i = 0; i < num.length; i++) {
    num[i] *= 3
}
console.table(num);

//Dada a matriz 2x3, escrever para o usuário todos os seus elementos 
//com as respectivas posições da matriz
//[8, 4, 3]
//[3, 7, 8]
console.log("-----------------------------------");
var matriz = [
    [8, 4, 3],
    [3, 7, 8]
]
console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
   // console.log(linha);
    for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    console.log(`Matriz [ ${linha}, ${coluna}] = ${matriz[linha][coluna]}`);
    }
}
