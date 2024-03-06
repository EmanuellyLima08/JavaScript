//Supondo que a população de um país A seja de a habitantes com uma
//taxa anual de crescimento de 3% e que a população de um país B seja
//de b habitantes, com uma taxa anual de crescimento de 1.5%, fazer um
//algoritmo que calcule e escreva o número de anos necessários para que
//a população do país A ultrapasse ou iguale a população do país B,
//mantidas essas taxas de crescimento.

var popA = 100003;
var popB = 300004;
const crescA = 1.03;
const crescB = 1.015;
var anos = 0;

while (popA < popB) {
  popA *= crescA;
  popB *= crescB;
  anos++;
}
console.log(`A população A chegou a ${Math.round(
  popA
)} habitantes, ultrapassando a população do país B de ${Math.round(popB)}.
Para isso, foi-se necessários ${anos} anos.`);

//Criar um "jogo da velha" que mostre as informações dentro da imagem
//abaixo. Inserir as informações de forma randômica. Informar no final
//quem ganhou X ou O.

console.log(`------------------------------------`);
// console.log(`___|___|___`)
// console.log(`___|___|___`)
// console.log(`   |   |   `)

let board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
]; // inicializa o tabuleiro com uma matriz 3x3 vazia
let currentPlayer = "X"; // define o jogador atual como X

while (!isGameOver()) {
  // enquanto o jogo não acabar, ou seja, enquanto não houver vencedor
  let row, col;
  do {
    row = Math.floor(Math.random() * 3); // escolhe uma linha aleatória
    col = Math.floor(Math.random() * 3); // escolhe uma coluna aleatória
  } while (board[row][col] !== " "); // continua escolhendo enquanto a célula estiver ocupada

  board[row][col] = currentPlayer; // preenche a célula
  currentPlayer = currentPlayer === "X" ? "O" : "X"; // troca o jogador
}

console.log(`${board[0][0]} | ${board[0][1]} | ${board[0][2]}`);
//console.log(`___|___|___`);
console.log(`${board[1][0]} | ${board[1][1]} | ${board[1][2]}`);
//console.log(`___|___|___`);
console.log(`${board[2][0]} | ${board[2][1]} | ${board[2][2]}`);
//console.log(`   |   |   `);

let winner = getWinner(); // verifica quem ganhou
console.log(` ${winner}` ? `O vencedor é ${winner}!` : `Empate!`); // imprime o resultado

function isGameOver() {
  // verifica se alguém ganhou ou se não existem mais espaços vazios no tabuleiro
  return getWinner() || !board.flat().includes(" ");
}

function getWinner() {
  // todas as possíveis linhas vencedoras
  const lines = [
    [board[0][0], board[0][1], board[0][2]],
    [board[1][0], board[1][1], board[1][2]],
    [board[2][0], board[2][1], board[2][2]],
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]],
  ];

  for (let line of lines) {
    // para cada linha
    if (line[0] !== " " && line[0] === line[1] && line[0] === line[2]) {
      // se todas as células são iguais e não vazias
      return line[0]; // retorna o vencedor
    }
  }
  return null; // se ninguém ganhou ainda, retorna null
}



//Outra forma de fazer (passada em aula)
// const tabuleiro = [
//     [" ", " ", " "],
//     [" ", " ", " "],
//     [" ", " ", " "]
// ];
// let jogadorX = "X";
// let jogadorO = "O";

// function jogar(jogador) {
//     let linha, coluna;
//     do {
//       linha = Math.floor(Math.random() * 3);
//       coluna = Math.floor(Math.random() * 3);
//     } while (tabuleiro[linha][coluna] !== " ");
  
  
//     tabuleiro[linha][coluna] = jogador;
//   }
