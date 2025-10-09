const numero1 = document.getElementById("IdInNumero1");
const botaoC = document.getElementById("btnExecutar");
const resultadoC = document.getElementById("idOnResultado");

function calculoFibonnaci(numero1) {
    let calculo = 0;
    let numeroAnterior = 0;
    let numeroAtual = 1;
    let proximo = 0;
    for (let contador = 1; contador < numero1; contador++) {
        calculo = numeroAnterior + numeroAtual;
        proximo = calculo;
        numeroAnterior = numeroAtual;
        numeroAtual = proximo;
    }
    return calculo;
}

function eventoBtnExecutar(){
    const numero1C = Number(numero1.value);
    const saida = numero1C + "-ésimo do termo de fibonnaci é" + " = " + calculoFibonnaci(numero1C);
    resultadoC.innerText = saida;
}