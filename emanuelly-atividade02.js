// Variáveis e Constantes
// Atividade 1
var nome = "Emanuelly";
var anoNascimento = 2008;
console.log("A", nome, "nasceu em", anoNascimento);

var anoHoje = 2024;
var idade = anoHoje - anoNascimento;
console.log(nome, "tem", idade, "anos");

// Atividade 2
console.log("------------------------------------------------------------------");
var largura = 6;
var comprimento = 12;
var area = largura * comprimento;
console.log(
  "A área de um retângulo de largura",
  largura,
  "cm e de comprimento",
  comprimento,
  "cm é igual a",
  area,
  "cm²"
);

// Atividade 3
console.log("-----------------------------------------------------------------------");
var altura = 5
var volume = area * altura;
console.log("Se a altura deste retângulo fosse", altura, "cm, o seu volume seria", volume, "cm³");

// Atividade 4 
console.log("--------------------------------------------------------------------------");
var a = 2
var b = 3
var c = -1
var delta = b**2 -4 * a * c
console.log("O valor de delta é", delta);

// Atividade 5
console.log("----------------------------------------------------------------------------");
var compra = 450
var desconto = compra / 100 * 3
var valorFinal = compra - desconto;
console.log("O valor do desconto é R$", desconto, "| O valor final da compra é R$", valorFinal);

// Atividade 6
console.log("--------------------------------------------------------------------------------");
var velMedia = 95
var horas = 3.5
var distancia = velMedia * horas;
console.log("A distância percorrida foi de", distancia, "km");
