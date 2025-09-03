const precoProduto = 25;
const tipoDinheiro = 2;
let strDinheiroTipo = "";
let valorTaxa = 0;
switch(tipoDinheiro){
   case 1:
      strDinheiroTipo = "A vista no dinheiro";
      valorTaxa = precoProduto -(precoProduto * 0.10);
      break;
   case 2:
      strDinheiroTipo = "A vista no cartao";
      valorTaxa = precoProduto - (precoProduto * 0.05);
      break;
   case 3:
      strDinheiroTipo = "Em 2 vezes";
      valorTaxa = precoProduto;
      break;
   case 4:
      strDinheiroTipo = "Em 3 vezes";
      valorTaxa = (precoProduto * 0.10)+ precoProduto;
      break;
   default:
      strDinheiroTipo = "Tipo de pagamento errado";
      valorTaxa = 0;
}
   const saida = "Tipo do pagamento: " + strDinheiroTipo;
   const saida2 = "Valor da taxa a ser paga: R$ " + valorTaxa;
   console.log(saida + "\n" + saida2);