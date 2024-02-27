// Atividade 03 sobre array

//Exercício 1: Crie um array de frutas
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.table(frutas);

//Exercício 2: Adicione Tangerina no final
console.log("");
frutas.push("Tangerina");
console.table(frutas);

//Exercício 3: Adicione Goiaba no início
console.log("");
frutas.unshift("Goiaba");
console.table(frutas);

//Exercício 4: Exiba o conteúdo do índice 5
console.log("");
console.log("Conteúdo do índice 5:", frutas[5]);

//Exercício 5: Exclua o elemento Uva
console.log("");
frutas.splice(4, 1);
console.log(frutas);
//Outra forma de fazer:
//var position = frutas.indexOf("Uva");
//frutas.splice(position, 1);
//console.log(frutas);

//Exercício 6: Crie uma cópia do array com os elementos apenas com índices 2, 3 e 4
console.log("");
var frutasCopia = frutas.slice(2, 5);
console.table(frutasCopia);

//Exercício 7: Crie e imprima um vetor com cinco valores numéricos
console.log("");
var numeros = [1, 2, 3, 4, 5];
console.table(numeros);

//Exercício 8: Imprima o elemento 3
console.log("");
console.log("O terceiro elemento do vetor é:", numeros[2]);

//Exercício 9: faça uma cópia do vetor original
console.log("");
var numerosCopia = numeros.slice();
console.log("Vetor Números Cópia");
console.table(numerosCopia);

//Exercício 10: altere o conteúdo do vetor cópia, duplicando os valores do vetor original
console.log("");
console.log("Alterando o Vetor Cópia, duplicando os valores do vetor original");
numerosCopia[0] = numeros [0] * 2;
numerosCopia[1] = numeros [1] * 2;
numerosCopia[2] = numeros [2] * 2;
numerosCopia[3] = numeros [3] * 2;
numerosCopia[4] = numeros [4] * 2;
console.table(numerosCopia);
