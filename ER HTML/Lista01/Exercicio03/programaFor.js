const numero = document.getElementById("idInNumeroInteiroPositivo");
const resultado = document.getElementById("idOnResultado");

function calcularNumero(numero){
    
}

function eventoBtnCalcularNumeroInteiroPositivo(){
    const numeroN = Number(numero.value);
    const valorFinal = calcularConversao(numeroN);
    resultado.innerText = valorFinal;
}
