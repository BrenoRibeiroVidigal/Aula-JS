const a = document.getElementById("idInValorA");
const b = document.getElementById("idInValorB");
const c = document.getElementById("idInValorC");
const resultado = document.getElementById("idOnResultado");

function calcularRaiz(a, b, c) {
const somaRaiz = b * b - 4 * a * c;

if(somaRaiz < 0) {
    return("A raiz é imaginaria");
} else if(somaRaiz === 0) {
    return("A raiz é unica");
} else {
    return("A raiz é distinta");
}
}

function eventoBtnCalcularRaiz() {
    const aN = Number(a.value);
    const bN = Number(b.value);
    const cN = Number(c.value);
    const raiz = calcularRaiz(aN, bN, cN);
    const saida = raiz;
    resultado.innerText = saida;
}