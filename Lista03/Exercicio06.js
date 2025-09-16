let numero = 123;
const numeroA = Math.trunc(numero / 100);
const numeroB = Math.trunc((numero % 100) / 10);
const numeroC = numero % 10;
let invertido = (numeroC * 100) + (numeroB * 10) + numeroA;
console.log("Número invertido: " + invertido);
