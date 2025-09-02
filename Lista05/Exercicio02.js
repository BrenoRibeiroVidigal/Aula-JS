const valorCarro = 9000;
const valorArCondicionado = 1750;
const valorPinturaMetalica = 800;
const valorVidroEletrico = 1200;
const valorDirecaoHidraulica =  2000;

let preco = valorCarro;

const escolhaAr = true;
const escolhaPintura = false;
const escolhaVidro = false;
const escolhaDirecao = true;

if(escolhaAr == true){
    preco += valorArCondicionado;
}if(escolhaPintura == true){
    preco += valorPinturaMetalica;
}if(escolhaVidro == true){
    preco += valorVidroEletrico;
}if(escolhaDirecao == true){
    preco += valorDirecaoHidraulica;
}
console.log("Preço final é: " + preco);