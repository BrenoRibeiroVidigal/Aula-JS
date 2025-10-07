const numero = document.getElementById("idInNumero");
const frequencia = document.getElementById("idInFrequencia");
const nota1 = document.getElementById("idInNota1");
const nota2 = document.getElementById("idInNota2");
const nota3 = document.getElementById("idInNota3");
const notaMedia = document.getElementById("idInNotaMedia");
const resultado = document.getElementById("idOnResultado");

function calcularNota(nota1, nota2, nota3, notaMedia, numero, frequencia){
    const calculo = (nota1 + (nota2 * 2) + (nota3 * 3) + notaMedia) / 7;
    if(calculo < 4.0){
        return "Numero: " + numero + "\n" + "Frequencia: " + frequencia + "\n" + "Nota1: " + nota1 + "\n" + "Nota2: " + nota2 + "\n" + "Nota3: " + nota3 + "\n"
        + "Media dos exercicios: " + notaMedia + "\n" + "Conceito: " + "E" + "\n" + "REPROVADO";
    } else if(calculo >= 4.1 && calculo <= 6.0){
        return "Numero: " + numero + "\n" + "Frequencia: " + frequencia + "\n" + "Nota1: " + nota1 + "\n" + "Nota2: " + nota2 + "\n" + "Nota3: " + nota3 + "\n"
        + "Media dos exercicios: " + notaMedia + "\n" + "Conceito: " + "D" + "\n" + "REPROVADO";
    } else if(calculo >= 6.1 && calculo <= 7.5){
        if(frequencia >= 100 * 0.75){
        return "Numero: " + numero + "\n" + "Frequencia: " + frequencia + "\n" + "Nota1: " + nota1 + "\n" + "Nota2: " + nota2 + "\n" + "Nota3: " + nota3 + "\n"
        + "Media dos exercicios: " + notaMedia + "\n" + "Conceito: " + "C" + "\n" + "APROVADO";
        } else {
            return "Numero: " + numero + "\n" + "Frequencia: " + frequencia + "\n" + "Nota1: " + nota1 + "\n" + "Nota2: " + nota2 + "\n" + "Nota3: " + nota3 + "\n"
        + "Media dos exercicios: " + notaMedia + "\n" + "Conceito: " + "C" + "\n" + "REPROVADO";
        }
    } else if(calculo >= 7.6 && calculo <= 9.0){
        if(frequencia >= 100 * 0.75){
        return "Numero: " + numero + "\n" + "Frequencia: " + frequencia + "\n" + "Nota1: " + nota1 + "\n" + "Nota2: " + nota2 + "\n" + "Nota3: " + nota3 + "\n"
        + "Media dos exercicios: " + notaMedia + "\n" + "Conceito: " + "B" + "\n" + "APROVADO";
        } else {
            return "Numero: " + numero + "\n" + "Frequencia: " + frequencia + "\n" + "Nota1: " + nota1 + "\n" + "Nota2: " + nota2 + "\n" + "Nota3: " + nota3 + "\n"
        + "Media dos exercicios: " + notaMedia + "\n" + "Conceito: " + "B" + "\n" + "REPROVADO";
        }
    } else if(calculo >= 9.1 && calculo <= 10.0){
        if(frequencia >= 100 * 0.75){
        return "Numero: " + numero + "\n" + "Frequencia: " + frequencia + "\n" + "Nota1: " + nota1 + "\n" + "Nota2: " + nota2 + "\n" + "Nota3: " + nota3 + "\n"
        + "Media dos exercicios: " + notaMedia + "\n" + "Conceito: " + "A" + "\n" + "APROVADO";
        } else {
            return "Numero: " + numero + "\n" + "Frequencia: " + frequencia + "\n" + "Nota1: " + nota1 + "\n" + "Nota2: " + nota2 + "\n" + "Nota3: " + nota3 + "\n"
        + "Media dos exercicios: " + notaMedia + "\n" + "Conceito: " + "A" + "\n" + "REPROVADO";
        }
    } 
}

function eventoBtnCalcularNota(){
    const numeroN = Number(numero.value);
    const frequenciaN = Number(frequencia.value);
    const nota1N = Number(nota1.value);
    const nota2N = Number(nota2.value);
    const nota3N = Number(nota3.value);
    const notaMediaN = Number(notaMedia.value);
    const valorFinal = calcularNota(nota1N, nota2N, nota3N, notaMediaN, numeroN, frequenciaN);
    resultado.innerText = valorFinal;
}