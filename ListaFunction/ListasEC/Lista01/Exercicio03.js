function verificarNumero(numero){
    const doisPrimeiros = Math.trunc(numero / 100);
    const doisUltimos = Math.trunc(numero % 100);
    const resultado = Math.pow(doisPrimeiros + doisUltimos,2);
if (resultado == numero) {
    return "numero é certo";
}if (resultado != numero) {
    return "numero nn é certo";
}
}

const numero = 3035;
const resultado = verificarNumero(numero);
console.log(resultado);