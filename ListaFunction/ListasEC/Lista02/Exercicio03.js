function verificarTriangulo(a,b,c){
    if(a+b > c && a+c>b && b+c>a){
   if(a == b & b == c){
    return "É triangulo Equilatero";
   } else if(a == b || a == c || b == c){
    return "É triangulo Isosceles";
   } else{
    return "É triangulo Escaleno";
   }
} else{
    return "Não é triangulo";
}
}

const a = 10;
const b = 10;
const c = 10;
const resultado = verificarTriangulo(a,b,c);
console.log(resultado);