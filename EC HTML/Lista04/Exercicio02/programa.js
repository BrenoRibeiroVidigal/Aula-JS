const valor = document.getElementById("idInValor");
const resultado = document.getElementById("idOnResultado");

function inverterNumero(valor, invertido = 0) {
  if (valor === 0) return invertido;
  let resto = valor % 10;
  let novoInvertido = invertido * 10 + resto;
  let proximo = Math.trunc(valor / 10);
  return inverterNumero(proximo, novoInvertido);
}

function calcularPalindromo(valor) {
  let numeroInvertido = inverterNumero(valor);
  if (numeroInvertido === valor) {
    return "É palindromo";
  } else {
    return "Nao é palindromo";
  }
}

function eventoBtnCalcularPalindromo(){
    const valorN = Number(valor.value);
    const valorFinal = calcularPalindromo(valorN);
    resultado.innerText = valorFinal;
}
