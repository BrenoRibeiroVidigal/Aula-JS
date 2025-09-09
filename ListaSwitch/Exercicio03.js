const numero = 25;
const numero2 = 25;
const tipoOperacao = "/";
let strOperacao = "";
let valorTaxa = 0;
switch(tipoOperacao){
   case "+":
      strOperacao = "Soma";
      valorTaxa = numero + numero2;
      break;
   case "-":
      strOperacao = "Subtracao";
      valorTaxa = numero - numero2;
      break;
   case "*":
      strOperacao = "Multiplicacao";
      valorTaxa = numero * numero2;
      break;
   case "/":
      strOperacao = "Divisao";
      valorTaxa = numero / numero2;
      break;
   default:
      strOperacao = "Tipo de operação errado";
      valorTaxa = 0;
}
   const saida = "Tipo da operação: " + strOperacao;
   const saida2 = "Valor da operação: " + valorTaxa;
   console.log(saida + "\n" + saida2);