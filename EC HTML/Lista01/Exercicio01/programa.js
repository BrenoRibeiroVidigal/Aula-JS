const numero = document.getElementById("idInNumero");
const resultado = document.getElementById("idOnResultado");

function calcularParImpar(numero) {
    const resto = numero%2;
    if(resto==0) {
        return "O numero é par";
    }
    if(resto!=0) {
        return "O numero é impar";
    }
}
function eventoBtnCalcularParImpar() {
    const numeroN = Number(numero.value);
    const parImpar = calcularParImpar(numeroN);
    const saida = "O numero digitado é: " + parImpar;
    resultado.innerText = saida;
}