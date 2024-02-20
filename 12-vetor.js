//const numeros = [1, 2, 3, 4, 5];
//console.log(numeros);
//console.log(numeros[2]);

//numeros[2] = 6
//console.log(numeros);
//console.log(numeros[2]);

//Criando variáveis do tipo array
var dinos = ["Tiranossauro Rex", "Estegossauro", "Anquilossauro"];
console.log(dinos); //retorna todos os itens do arrey
console.log(dinos[0]); //retorna o primeiro índice do array
console.log("");
console.table(dinos); //cria tabela com os itens do array
console.log("O vetor tem", dinos.length, "elementos!");

//Adicionando elementos ao vetor existente
dinos.push("Brontossauro"); //array.push adiciona um item ao final do vetor
console.table(dinos);

dinos.unshift("Tricerátops"); //array.unshift adiciona um item ao início do vetor
console.table(dinos);

//Alterando elementos com base no índice (posição)
dinos[3] = "Titanossauro";
console.table(dinos);

//Obtendo um elemento com base em seu índice
console.log("Primeira posição:", dinos[0]); //retorna um elemento específico
console.log("Segunda posição:", dinos[1]);
console.log("Item da posição 20:", dinos[20]); //retorna indefinido

//Removendo o elemento do vetor
dinos.pop(); //remove o último elemento do vetor
console.table(dinos);

dinos.shift(); //remove o primeiro elemento do vetor
console.table(dinos);

dinos.splice(1, 1); //remove o elemento a partir do índice 1, contando  1
console.table(dinos)