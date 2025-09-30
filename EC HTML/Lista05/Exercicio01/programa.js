const altura = document.getElementById("idInAltura");
const sexo = document.getElementById("idInSexo");
const resultado = document.getElementById("idOnResultado");

function calcularPesoIdeal(altura, sexo) {
    if (sexo === "masculino") {
        return (72.7 * altura) - 58;
    } else if (sexo === "feminino") {
        return (62.1 * altura) - 44.7;
    }
}

function eventoBtnCalcularPesoIdeal() {
    const valorAltura = Number(altura.value);
    const valorSexo = sexo.value;
    const valorFinal = calcularPesoIdeal(valorAltura, valorSexo);
    resultado.innerText = valorFinal;
}
