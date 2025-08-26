let raio = 5;
let altura = 10;
let areaBase = Math.PI * Math.pow(raio,2)*2;
let areaLado = 2* Math.PI*raio*altura;

let areaDaLata = areaBase + areaLado;
console.log("Area da lata: "+areaDaLata);