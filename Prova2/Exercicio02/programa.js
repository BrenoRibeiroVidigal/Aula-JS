const nome = document.getElementById("idInNome");
const anoNascimento = document.getElementById("idInAnoNascimento");
const resultado = document.getElementById("idOnResultado");

function calcularIdade(anoNascimento, nome){
    const calculoIdade = 2025 - anoNascimento;
    if(calculoIdade < 5){
        return "Nome: " + nome + "\n" + "Idade: " + calculoIdade + "\n" + "Ano de nascimento: " + anoNascimento + "\n" + "Categoria: " + "Sem categoria";
    } else if(calculoIdade >= 5 && calculoIdade <= 7){
        return "Nome: " + nome + "\n" + "Idade: " + calculoIdade + "\n" + "Ano de nascimento: " + anoNascimento + "\n" + "Categoria: " + "Infantil A";
    } else if(calculoIdade >= 8 && calculoIdade <= 10){
        return "Nome: " + nome + "\n" + "Idade: " + calculoIdade + "\n" + "Ano de nascimento: " + anoNascimento + "\n" + "Categoria: " + "Infantil B";
    } else if(calculoIdade >= 11 && calculoIdade <= 13){
        return "Nome: " + nome + "\n" + "Idade: " + calculoIdade + "\n" + "Ano de nascimento: " + anoNascimento + "\n" + "Categoria: " + "Juvenil A";
    } else if(calculoIdade >= 14 && calculoIdade <= 17){
        return "Nome: " + nome + "\n" + "Idade: " + calculoIdade + "\n" + "Ano de nascimento: " + anoNascimento + "\n" + "Categoria: " + "Juvenil B";
    } else if(calculoIdade > 18){
        return "Nome: " + nome + "\n" + "Idade: " + calculoIdade + "\n" + "Ano de nascimento: " + anoNascimento + "\n" + "Categoria: " + "Senior";
    }
}

function eventoBtnCalcularCategoria(){
    const nomeN = (nome.value);
    const anoNascimentoN = Number(anoNascimento.value);
    const valorFinal = calcularIdade(anoNascimentoN, nomeN);
    resultado.innerText = valorFinal;
}