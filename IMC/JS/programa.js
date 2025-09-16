const nome = document.getElementById("idInNome");
const peso = document.getElementById("idInPeso");
const altura = document.getElementById("idInAltura");
const btnCalcularIMC = document.getElementById("btnCalcularIMC");
const resultado = document.getElementById("idOnResultado");

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function eventoBtnCalcularIMC() {
    const pesoN = Number(peso.value);
    const alturaN = Number(altura.value);
    const imc = calcularIMC(pesoN, alturaN);
    const saida = "O paciente " + nome.value + " tem o IMC de " + imc;
    resultado.innerText = saida;
}
