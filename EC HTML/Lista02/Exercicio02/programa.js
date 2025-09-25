const valorCarro = document.getElementById("idInValorCarro");
const valorArCondicionado = document.getElementById("idInArcondicionado");
const valorPinturaMetalica = document.getElementById("idInPinturaMetalica");
const valorVidroEletrico = document.getElementById("idInVidroEletrico");
const valorDirecaoHidraulica = document.getElementById("idInDirecaoHidraulica");
const resultado = document.getElementById("idOnResultado");

function calcularValor(valorCarro,valorArCondicionado,valorPinturaMetalica,valorVidroEletrico,valorDirecaoHidraulica){

const escolhaAr = valorArCondicionado;
const escolhaPintura = valorPinturaMetalica;
const escolhaVidro = valorVidroEletrico;
const escolhaDirecao = valorDirecaoHidraulica;

if(escolhaAr == "Sim"){
    valorCarro += 1750;
}if(escolhaPintura == "Sim"){
    valorCarro += 800;
}if(escolhaVidro == "Sim"){
    valorCarro += 1200;
}if(escolhaDirecao == "Sim"){
    valorCarro += 2000;
}
return valorCarro;
}

function eventoBtnCalcularValorDoCarro(){
    const valorCarroN = Number(valorCarro.value);
    const valorArCondicionadoN = (valorArCondicionado.value);
    const valorPinturaMetalicaN = (valorPinturaMetalica.value);
    const valorVidroEletricoN = (valorVidroEletrico.value);
    const valorDirecaoHidraulicaN = (valorDirecaoHidraulica.value);
    const valorFinal = calcularValor(valorCarroN, valorArCondicionadoN, valorPinturaMetalicaN, valorVidroEletricoN, valorDirecaoHidraulicaN);
    resultado.innerText = "Preço final é: " + valorFinal;
}