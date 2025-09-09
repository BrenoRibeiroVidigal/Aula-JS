const a = 3;
const b = 4;
const c = 5;

if(a+b > c && a+c>b && b+c>a){
   if(a == b & b == c){
    console.log("É triangulo Equilatero")
   } else if(a == b || a == c || b == c){
    console.log("É triangulo Isosceles")
   } else{
    console.log("É triangulo Escaleno")
   }
} else{
    console.log("Não é triangulo")
}