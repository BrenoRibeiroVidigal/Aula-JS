const idade = document.getElementById("idInEleitor");
const resultado = document.getElementById("idOnResultado");


function verificarIdade(idade){
    if (idade < 16) {
        return "voce é não eleitor";
    }if(idade >= 18 && idade <= 65){
            return "voce é eleitor obrigatorio";
        } if(idade >= 16 && idade < 18 || idade > 65) {
            return "voce é eleitor facultativo";
    }
}

function eventoBtnCalcularIdade() {
    const idadeN = Number(idade.value);
    const eleitor = verificarIdade(idadeN);
    const saida = eleitor;
    resultado.innerText = saida;
}