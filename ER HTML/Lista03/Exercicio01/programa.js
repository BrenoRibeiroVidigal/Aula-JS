const numero1 = document.getElementById("IdInNumero1");
const numero2 = document.getElementById("IdInNumero2");
const botaoC = document.getElementById("btnExecutar");
const resultadoC = document.getElementById("idOnResultado");

function calcularNumero(numero1, numero2) {
    let calculo = 0;
    for (let contador = 1; contador <= numero2; contador++) {
        calculo += numero1;
    }
    return calculo;
}

function eventoBtnExecutar(){
    const numero1C = Number(numero1.value);
    const numero2C = Number(numero2.value);
    const saida = numero1C + " * " + numero2C +" = " + calcularNumero(numero1C,numero2C);
    resultadoC.innerText = saida;
}