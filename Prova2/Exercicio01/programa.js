const nome = document.getElementById("idInNome");
const peso = document.getElementById("idInPeso");
const resultado = document.getElementById("idOnResultado");

function calcularPeso(peso, nome){
    const calculo = (peso *2.64) / 9.87;
    let saida = "Nome: " + nome + "\n"+"O peso em jupiter é: "+calculo;
    return saida;
}

function eventoBtnCalcularPeso(){
    const nomeN = (nome.value);
    const pesoN = Number(peso.value);
    const valorFinal = calcularPeso(pesoN,nomeN);
    resultado.innerText = valorFinal;
}