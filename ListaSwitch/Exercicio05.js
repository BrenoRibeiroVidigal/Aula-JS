/*const areaAcres = 301;
const tipoPulverizacao = 1;
const nomeFazendeiro = "Samuel lima";
let strPulverizacao = "";
let valorPago = 0;
switch(tipoPulverizacao){
   case 1:
      strPulverizacao = "Pulverizacao contra ervas daninhas";
      valorPago = 50 * areaAcres;
      if(areaAcres > 300){
         valorPago = valorPago - (valorPago * 0.05);
      } if(valorPago > 10750){
            valorPago = valorPago - (valorPago * 0.10);
      }
      break;
   case 2:
      strPulverizacao = "Pulverizacao contra gafanhotos";
      valorPago = 100 * areaAcres;
      if(areaAcres > 300){
         valorPago = valorPago - (valorPago * 0.05);
      } if(valorPago > 10750){
            valorPago = valorPago - (valorPago * 0.10);
      }
      break;
   case 3:
      strPulverizacao = "Pulverizacao contra broca";
      valorPago = 150 * areaAcres;
      if(areaAcres > 300){
         valorPago = valorPago - (valorPago * 0.05);
      }if(valorPago > 10750){
            valorPago = valorPago - (valorPago * 0.10);
      }
      break;
   case 4:
      strPulverizacao = "Pulverizacao contra tudo";
      valorPago = 250 * areaAcres;
     if(areaAcres > 300){
         valorPago = valorPago - (valorPago * 0.05);
      } if(valorPago > 10750){
            valorPago = valorPago - (valorPago * 0.10);
      }
      break;
   default:
      strPulverizacao = "Tipo de pulverizacao errado";
      valorPago = 0;
}
   const saida = "Tipo da pulverizacao: " + strPulverizacao;
   const saida2 = "Valor da pulverizacao: " + valorPago;
   const saida3 = "Nome do fazendeiro: " + nomeFazendeiro;
   console.log(saida + "\n" + saida2 + "\n" + saida3);
*/

const areaAcres = 300;
const tipoPulverizacao = 4;
const nomeFazendeiro = "Samuel Lima";

let strPulverizacao = "";
let valorPago = 0;

switch(tipoPulverizacao){
   case 1:
      strPulverizacao = "Pulverizacao contra ervas daninhas";
      valorPago = 50 * areaAcres;
      break;
   case 2:
      strPulverizacao = "Pulverizacao contra gafanhotos";
      valorPago = 100 * areaAcres;
      break;
   case 3:
      strPulverizacao = "Pulverizacao contra broca";
      valorPago = 150 * areaAcres;
      break;
   case 4:
      strPulverizacao = "Pulverizacao contra tudo";
      valorPago = 250 * areaAcres;
      break;
   default:
      strPulverizacao = "Tipo de pulverizacao errado";
      valorPago = 0;
}

switch(true){
   case (areaAcres > 300):
      valorPago -= valorPago * 0.05;
      break;
}

switch(true){
   case (valorPago > 10750):
      valorPago = (valorPago - 10750) * 0.9;
      break;
}

console.log("Tipo da pulverizacao: " + strPulverizacao);
console.log("Valor da pulverizacao: " + valorPago.toFixed(2));
console.log("Nome do fazendeiro: " + nomeFazendeiro);
