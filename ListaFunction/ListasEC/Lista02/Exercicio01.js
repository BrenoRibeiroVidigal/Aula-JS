function verificarNumeroQuadradoPerfeito(numero){
    const raizQuadrada = Math.trunc(Math.sqrt(numero));
if(Math.pow(raizQuadrada,2) === numero){
    return "O numero é quadrado perfeito";
}else{
    return "nn é quadrado perfeito";
}
}

const numero = 144;
const resultado = verificarNumeroQuadradoPerfeito(numero);
console.log(resultado);