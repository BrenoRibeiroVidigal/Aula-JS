function calculoDasMedia(nota1,nota2,nota3,tipo){
    let strMediaTipo = "";
let media = 0;
switch(tipoMedia){
   case 1:
      strMediaTipo = "Media Aritmetica";
      media = (nota1+nota2+nota3)/3;
      break;
   case 2:
      strMediaTipo = "Media Ponderada";
      media = (nota1*3 + nota2*3 + nota3*4)/10;
      break;
   case 3:
      strMediaTipo = "Media Harmonica";
      media = 3 / ((1 / nota1) + (1 / nota2) + (1 / nota3));
      break;
   case 4:
      strMediaTipo = "Media Geometrica";
      media = Math.pow((nota1 * nota2 * nota3), 1/3);
      break;
    case 5:
      strMediaTipo = "Media Quadratica";
      media = Math.sqrt(((Math.pow(nota1,2) + Math.pow(nota2,2) + Math.pow(nota3,2)) / 3));
      break;
   default:
      strMediaTipo = "Tipo de media errado";
      media = 0;
}
   const saida = "Tipo da media: " + strMediaTipo;
   const saida2 = "Valor da media: " + media;
   return(saida + "\n" + saida2);
}

const nota1 = 10;
const nota2 = 5;
const nota3 = 12;
const tipoMedia = 2;
const resultado = calculoDasMedia(nota1,nota2,nota3,tipoMedia);
console.log(resultado);