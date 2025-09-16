function inverterNumero(numero) {
    let numeroA = Math.trunc(numero / 100);
    let numeroB = Math.trunc((numero % 100) / 10);
    let numeroC = numero % 10;

    return (numeroC * 100) + (numeroB * 10) + numeroA;
}

let numero = 123;
let resultado = inverterNumero(numero);
console.log(resultado);