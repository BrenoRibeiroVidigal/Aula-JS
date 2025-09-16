function verificarIdade(idade){
    if (idade < 16) {
        return "voce é não eleitor";
    }if(idade >= 18 && idade <= 65){
            return "voce é eleitor obrigatorio";
        } if(idade >= 16 && idade < 18 || idade > 65) {
            return "voce é eleitor facultativo";
    }
}

const idade = 16;
const resultado = verificarIdade(idade);
console.log(resultado);