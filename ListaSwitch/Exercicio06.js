const nota1 = 25;
const nota2 = 25;
const nota3 = 25;
const tipoMedia = 2;
let strMediaTipo = "";
let media = 0;
switch(tipoMedia){
   case 1:
      media = (nota1+nota2+nota3)/3;
      break;
   case 2:
      media = (nota1*3 + nota2*3 + nota3*4)/10;
      break;
   case 3:
      
      break;
   case 4:
      
      break;
    case 5:
      
      break;
   default:
      strMediaTipo = "Tipo de media errado";
      media = 0;
}
   const saida = "Tipo da media: " + strMediaTipo;
   const saida2 = "Valor da media: " + media;
   console.log(saida + "\n" + saida2);