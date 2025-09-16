function calculoDelta(valorA,valorB,valorC){
    return Math.pow(valorB,2) - 4 * valorA * valorC;
}

const valor1 = 0;
const valor2 = 10;
const valor3 = 15;
const resultado = calculoDelta(valor1,valor2,valor3);
console.log(resultado);