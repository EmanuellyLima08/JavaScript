//Dada a matriz abaixo, faça um programa em JavaScript
//que imprima os elementos da sua diagonal principal
var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
console.table(matriz);

for (let i = 0; i < matriz.length; i++) {
    console.log("Os elementos da diagonal principal são:", matriz[i][i]);
}

