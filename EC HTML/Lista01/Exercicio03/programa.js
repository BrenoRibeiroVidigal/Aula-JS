const nuumero = document.getElementById("idInNumero");
const resultado = document.getElementById("idOnResultado");

function verificarNumero(numero){
    const doisPrimeiros = Math.trunc(numero / 100);
    const doisUltimos = Math.trunc(numero % 100);
    const resultado = Math.pow(doisPrimeiros + doisUltimos,2);
if (resultado == numero) {
    return "é certo";
}if (resultado != numero) {
    return "nn é certo";
}
}

function eventoBtnCalcularNumero(){
    const numeroN = Number(nuumero.value);
    const verificado = verificarNumero(numeroN);
    const saida = "O numero digitado " + verificado;
    resultado.innerText = saida;
}