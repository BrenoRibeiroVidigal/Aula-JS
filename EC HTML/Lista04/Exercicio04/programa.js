const numero1 = document.getElementById("idInNumero1");
const numero2 = document.getElementById("idInNumero2");
const numero3 = document.getElementById("idInNumero3");
const numero4 = document.getElementById("idInNumero4");
const resultado = document.getElementById("idOnResultado");

function calcularMenorNumero(numero1, numero2, numero3, numero4) {
   let maior = numero1;
  if (numero2 > maior){
      maior = numero2;
  }
  if (numero3 > maior){
      maior = numero3;
  }
  if (numero4 > maior){
      maior = numero4;
  }
  let soma = numero1 + numero2 + numero3 + numero4 - maior;
  return soma;
}

function eventoBtnCalcularMenorNumero(){
    const valor1 = Number(numero1.value);
    const valor2 = Number(numero2.value);
    const valor3 = Number(numero3.value);
    const valor4 = Number(numero4.value);
    const valorFinal = calcularMenorNumero(valor1, valor2, valor3, valor4);
    resultado.innerText = valorFinal;
}
