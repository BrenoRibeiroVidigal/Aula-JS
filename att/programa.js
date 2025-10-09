const precoFilmeC = document.getElementById("IdInPrecoFilme");
const diaDaSemanaC = document.getElementById("IdInDiaDaSemana");
const tipoFilmeC = document.getElementById("IdInTipoDoFilme");
const botaoC = document.getElementById("btnExecutar");
const resultadoC = document.getElementById("idOnResultado");

function calcularDesconto(precoFilmeC, diaDaSemanaC, tipoFilmeC) {
    let desconto = 0;
    let acrescimo = 0;
    if(diaDaSemanaC == 2 || diaDaSemanaC == 3 || diaDaSemanaC == 5){
        desconto = precoFilmeC * 0.40;
    }
    if(tipoFilmeC == "Lançamento"){
        acrescimo = precoFilmeC * 0.15;
    }

    const calculo = precoFilmeC - desconto + acrescimo;
    return calculo;
}

function eventoBtnExecutar(){
    const precoFilmeN = precoFilmeC.value;
    const diaDaSemanaN = diaDaSemanaC.value;
    const tipoFilmeCN = tipoFilmeC.value;
    const valorFinal = calcularDesconto(precoFilmeN, diaDaSemanaN, tipoFilmeCN);
    resultadoC.innerText = "Valor final: " + valorFinal;
}