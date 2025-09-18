const numero = document.getElementById("idInNumero");
const resultado = document.getElementById("idOnResultado");

function calcularQuadradoPerfeito(numero){
const raizQuadrada = Math.trunc(Math.sqrt(numero));
if(Math.pow(raizQuadrada,2) === numero){
    return("O numero é quadrado perfeito");
}else{
    return("nn é quadrado perfeito");
}
}

function eventoBtnCalcularTarifa(){
    const numeroN = Number(numero.value);
    const verificado = calcularQuadradoPerfeito(numeroN);
    const saida = verificado;
    resultado.innerText = saida;
}