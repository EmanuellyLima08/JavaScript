//Exercício
//Criar matriz 3x3
var matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.table(matriz);

//Exibir ao usuário os valores das diagonais (4)
console.log(
  "Os valores da diagonal 1:",
  matriz[0][0],
  matriz[1][1],
  matriz[2][2]
);
console.log(
  "Os valores da diagonal 2:",
  matriz[2][2],
  matriz[1][1],
  matriz[0][0]
);
console.log(
  "Os valores da diagonal 3:",
  matriz[0][2],
  matriz[1][1],
  matriz[2][0]
);
console.log(
  "Os valores da diagonal 4:",
  matriz[2][0],
  matriz[1][1],
  matriz[0][2]
);


//Atividade de Criação de Cadastro de usuário
console.log("--------------------------------------------------");
var usuario = [
  "Emanuelly",
  16,
  "Azul",
  "Abacate",
  "Rua Riachuelo, nº 107 - São Paulo",
  "Thor",
];
console.table(usuario);

//Exibição ao usuário:
console.log("Olá, ", usuario[0], "! Seja bem-vinda ao nosso sitema");
console.log(
  "Você mora no endereço",
  usuario[4],
  ", e tem um pet chamado",
  usuario[5]
);
console.log("Sua idade é", usuario[1], "e gosta muito da fruta", usuario[3]);
console.log("Sua cor favorita é", usuario[2]);
