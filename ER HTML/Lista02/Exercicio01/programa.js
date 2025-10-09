const numeroC = document.getElementById("IdInNumero");
const botaoC = document.getElementById("btnExecutar");
const tipoDeCalculo = document.getElementById("IdInTipoDeCalculo");
const resultado = document.getElementById("idOnResultado");

function verificarNumeroPerfeito(numeroC){
    let somaDivisores = 0;
    for(let divisor = 1; divisor <= numeroC / 2; divisor++) {
        if(numeroC % divisor === 0) somaDivisores += divisor;
    }
    return (somaDivisores === Number(numeroC));
}

function calcularNumerosCaracteristicas(){
    let valor = 1000;
    let saida = "";
    while(valor <= 9999){
        aux1 = Math.trunc(valor/100);
        aux2 = valor%100;
        aux3 = aux1 + aux2;
        aux4 = aux3 * aux3;
        if(aux4 === valor)saida += valor + " ";
        valor++
    }
    return saida;
}

function verificarTriangular(numeroC){
    let contador = 1;
    while((contador * (contador + 1) * (contador + 2)) < numeroC) contador++;
    let valor = (contador * (contador + 1) * (contador + 2));
    return (valor == numeroC);
}

function calcularFatorial(numeroC){
    let fatorial = 1;
    while(numeroC >= 1){
        fatorial *= numeroC;
        numeroC--;
    }
    return fatorial;
}

function verificarPrimo(numeroC) {
    if(numeroC <= 1) return "o numero nao é primo";
    for (let i = 2; i < numeroC; i++) {
            if (numeroC % i == 0) {
            return "o numero nao é primo";
        }
    }
    return "o numero é primo";
}


function eventoBtnExecutar(){
    const numeroN = numeroC.value;
    const tipoDeCalculoN = tipoDeCalculo.value;
    let saida = "";
    if(tipoDeCalculoN === "Numero perfeito"){
        if(verificarNumeroPerfeito(numeroN) === true)
            saida += "O numero " + numeroN + " é numero perfeito";
        else saida += "O numero " + numeroN + " não é numero perfeito";
    } else if(tipoDeCalculoN === "Numero com caracteristica"){
        saida += "\nNumeros com a característica: " + calcularNumerosCaracteristicas();
    } else if(tipoDeCalculoN === "Numero triangular"){
    if(verificarTriangular(numeroN) == true)
        saida += "\nO numero " + numeroN + " é numero triangular";
    else saida += "\nO numero " + numeroN + " não é numero triangular";
    } else if(tipoDeCalculoN === "Calcular Fatorial"){
        saida += "\nFatorial do " + numeroN + " é = " + calcularFatorial(numeroN);
    }  else if(tipoDeCalculoN === "Numero primo"){
        saida += "\n" + verificarPrimo(numeroN);
    }
    resultado.innerText = saida;
}