const x1 = 1;
const y1 = 2;
const x2 = 3;
const y2 = 4;
let quadrante = "";
let eixo = "";
let calculoDistancia = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));

if(y1 < 0 && x1 < 0){
    quadrante += "3º quadrante";
} else if(y1 < 0 && x1 > 0){
    quadrante += "4º quadrante";
} else if(y1 >0 && x1 > 0){
    quadrante += "1º quadrante";
} else if(y1 > 0 && x1 < 0){
    quadrante += "2º quadrante";
}else{
    quadrante+= "Não esta em nenhum quadrante";
}

if(y1 != 0 && x1 == 0){
    eixo+= "Está no eixo x";
} else if(y1 == 0 && x1 != 0){
    eixo+= "Está no eixo y";
}else if(y1 == 0 && x1 == 0){
    eixo+= "Está no ponto central";
}else{
    eixo+= "Não está no eixo";
}
const saida = "Calculo da distancia: " + calculoDistancia + "\n" + "Quadrante: " + quadrante + "\n" + "Eixo: " + eixo;
console.log(saida);