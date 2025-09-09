const quantidadeDinheiro = 250;
const tipoDinheiro = 4;
let strDinheiroTipo = "";
let valorConversao = 0;
switch(tipoDinheiro){
   case 1:
      strDinheiroTipo = "Euro";
      valorConversao = quantidadeDinheiro / 6.617;
      break;
   case 2:
      strDinheiroTipo = "Libra esterlina";
      valorConversao = quantidadeDinheiro / 6.816;
      break;
   case 3:
      strDinheiroTipo = "Dolar";
      valorConversao = quantidadeDinheiro / 5.071;
      break;
   case 4:
      strDinheiroTipo = "Iene";
      valorConversao = quantidadeDinheiro / 3.018;
      break;
   default:
      strDinheiroTipo = "Tipo de dinheiro errado";
      valorConversao = 0;
}
   const saida = "Tipo do Dinheiro: " + strDinheiroTipo;
   const saida2 = "Valor convertido: $ " + valorConversao;
   console.log(saida + "\n" + saida2);