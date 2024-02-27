//Criando uma matriz
var matriz = [
  [9, 0, 1],
  [7, 1, 2],
  [6, 2, 8],
  [1, 3, 9]
];

console.table(matriz);

//Obtendo elemento com base em seus índices
console.log("Matriz[1, 2] =", matriz [1][2]);
console.log("Matriz[2, 0] =", matriz [2][0]);

//Alterando valores de elementos com base em seus índices
matriz[1][2] = 20;
matriz[2][0] = 30;
console.table(matriz);

//Exercício
var matriz2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.table(matriz2);
console.log("Os valores da diagonal principal são:", matriz2[0][0], matriz2[1][1], matriz2[2][2]);