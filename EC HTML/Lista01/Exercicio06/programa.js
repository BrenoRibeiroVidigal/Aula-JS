const nome = document.getElementById("idInNome");
const numeroConta = document.getElementById("idInConta");
const salarioSemestral = document.getElementById("idInSaldo");
const resultado = document.getElementById("idOnResultado");

function calcularTarifa(salarioSemestral) {
if(salarioSemestral<=1000) {
    let tarifa = 25;
    const salarioAtualizado= salarioSemestral - tarifa;
    return("Saldo com a tarifa aplicada: "+salarioAtualizado + "(Tarifa: "+tarifa+")");
}if(salarioSemestral>1001 && salarioSemestral<=2000) {
    let tarifa = 20;
    const salarioAtualizado= salarioSemestral - tarifa;
    return("Saldo com a tarifa aplicada: "+salarioAtualizado + "(Tarifa: "+tarifa+")");
}if(salarioSemestral>2001 && salarioSemestral<=3500) {
    let tarifa = 13;
    const salarioAtualizado= salarioSemestral - tarifa;
    return("Saldo com a tarifa aplicada: "+salarioAtualizado + "(Tarifa: "+tarifa+")");
}if(salarioSemestral>3501) {
    return("Saldo com a tarifa aplicada: "+salarioSemestral + "(Tarifa foi isenta)");
}
}

function eventoBtnCalcularTarifa() {
    const nomeN = String(nome.value);
    const numeroContaN = Number(numeroConta.value);
    const salarioSemestralN = Number(salarioSemestral.value);
    const tarifa = calcularTarifa(salarioSemestralN);
    const saida = "O cliente " + nomeN + " com a conta de número " + numeroContaN + " tem o " + tarifa;
    resultado.innerText = saida;
}