const a = document.getElementById("idInNumeroA");
const b = document.getElementById("idInNumeroB");
const c = document.getElementById("idInNumeroC");
const resultado = document.getElementById("idOnResultado");

function calcularTriangulo(a,b,c){
    if(a+b > c && a+c>b && b+c>a){
   if(a == b & b == c){
    return("É triangulo Equilatero")
   } else if(a == b || a == c || b == c){
    return("É triangulo Isosceles")
   } else{
    return("É triangulo Escaleno")
   }
} else{
    return("Não é triangulo")
}
}

function eventoBtnCalcularTriangulo(){
    const aN = Number(a.value);
    const bN = Number(b.value);
    const cN = Number(c.value);
    const tipoTriangulo = calcularTriangulo(aN,bN,cN);
    resultado.innerText = tipoTriangulo;
}
