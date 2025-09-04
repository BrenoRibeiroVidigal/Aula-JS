const areaAcres = 300;
const tipoPulverizacao = 2;
let strPulverizacao = "";
let valorPago = 0;
switch(tipoPulverizacao){
   case 1:
      strPulverizacao = "Pulverizacao contra ervas daninhas";
      valorPago = 50 * areaAcres;
      if(areaAcres > 300){
         valorPago = valorPago - (valorPago * 0.05);
      } else if(valorPago > 10750){
            valorPago = valorPago - (valorPago * 0.10);
      }
      break;
   case 2:
      strPulverizacao = "Pulverizacao contra gafanhotos";
      valorPago = 100 * areaAcres;
      if(areaAcres > 300){
         valorPago = valorPago - (valorPago * 0.05);
      } else if(valorPago > 10750){
            valorPago = valorPago - (valorPago * 0.10);
      }
      break;
   case 3:
      strPulverizacao = "Pulverizacao contra broca";
      valorPago = 150 * areaAcres;
      if(areaAcres > 300){
         valorPago = valorPago - (valorPago * 0.05);
      } else if(valorPago > 10750){
            valorPago = valorPago - (valorPago * 0.10);
      }
      break;
   case 4:
      strPulverizacao = "Pulverizacao contra tudo";
      valorPago = 250 * areaAcres;
     if(areaAcres > 300){
         valorPago = valorPago - (valorPago * 0.05);
      } else if(valorPago > 10750){
            valorPago = valorPago - (valorPago * 0.10);
      }
      break;
   default:
      strPulverizacao = "Tipo de pulverizacao errado";
      valorPago = 0;
}
   const saida = "Tipo da pulverizacao: " + strPulverizacao;
   const saida2 = "Valor da pulverizacao: " + valorPago;
   console.log(saida + "\n" + saida2);
