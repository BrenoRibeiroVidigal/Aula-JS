const corEtiqueta = document.getElementById("idInCorEtiqueta");
const quantidadeProduto = document.getElementById("idInQuantidadeProduto");
const valorUnitario = document.getElementById("idInValorUnitario");
const resultado = document.getElementById("idOnResultado");

function calcularPrecoFinal(corEtiqueta, quantidadeProduto, valorUnitario) {
    if(corEtiqueta === "verde") {
        if(quantidadeProduto <= 10) {
            return valorUnitario * quantidadeProduto - (valorUnitario * quantidadeProduto * 0.05);
        } else if(quantidadeProduto > 10) {
            return valorUnitario * quantidadeProduto - (valorUnitario * quantidadeProduto * 0.10);
        }
    } else if(corEtiqueta === "amarelo") {
        if(quantidadeProduto <= 5) {
            return valorUnitario * quantidadeProduto - (valorUnitario * quantidadeProduto * 0.15);
        } else if(quantidadeProduto > 10) {
            return valorUnitario * quantidadeProduto - (valorUnitario * quantidadeProduto * 0.20);
        } else{
            return valorUnitario * quantidadeProduto;
        }
    }
}

function eventoBtnCalcularPrecoFinal() {
    const valorCorEtiqueta = corEtiqueta.value;
    const valorQuantidadeProduto = Number(quantidadeProduto.value);
    const valorValorUnitario = Number(valorUnitario.value);
    const valorFinal = calcularPrecoFinal(valorCorEtiqueta, valorQuantidadeProduto, valorValorUnitario);
    resultado.innerText = valorFinal;
}
