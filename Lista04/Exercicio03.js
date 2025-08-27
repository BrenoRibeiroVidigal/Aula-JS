const numero = 3025;
const doisPrimeiros = Math.trunc(numero / 100);
const doisUltimos = Math.trunc(numero % 100);
const resultado = Math.pow(doisPrimeiros + doisUltimos,2);
if (resultado == numero) {
    console.log("numero é certo");
}if (resultado != numero) {
    console.log("numero nn é certo");
}
