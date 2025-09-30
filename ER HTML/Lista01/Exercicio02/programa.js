const valor = document.getElementById("idInValor");
const tipoDinheiro = document.getElementById("idInTipoDinheiro");
const resultado = document.getElementById("idOnResultado");

function calcularConversao(tipoDinheiro, valor){

}

function eventoBtnCalcularDinheiro(){
    const tipoDinheiroN = (tipoDinheiro.value);
    const valorN = Number(valor.value);
    const valorFinal = calcularConversao(tipoDinheiroN, valorN);
    resultado.innerText = valorFinal;
}
