/*
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Digite um numero: ', numero => {
    if (numero % 2 == 0) {
        console.log("O numero é par");
    } else {
        console.log("O numero é impar");
    }
    readline.close();
});
*/

const numero = 15;
const resto = numero%2;
if(resto==0) {
    console.log("O numero é par");
}
if(resto!=0) {
    console.log("O numero é impar");
}