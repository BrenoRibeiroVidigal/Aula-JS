const numeroX = document.getElementById("IdInNumeroX");
const numeroY = document.getElementById("IdInNumeroY");
const botaoC = document.getElementById("btnExecutar");
const resultadoC = document.getElementById("idOnResultado");

function calcularNumero(numeroX, numeroY) {
    let calculo = 1;
    for (let contador = 1; contador <= numeroY; contador++) {
        calculo *= numeroX;
    }
    return calculo;
}

function eventoBtnExecutar(){
    const numeroXC = Number(numeroX.value);
    const numeroYC = Number(numeroY.value);
    const saida = numeroXC + " ^ " + numeroYC +" = " + calcularNumero(numeroXC,numeroYC);
    resultadoC.innerText = saida;
}