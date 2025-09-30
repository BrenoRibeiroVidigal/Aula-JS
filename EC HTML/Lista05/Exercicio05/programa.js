const matriculaFuncionario = document.getElementById("idInMatriculaFuncionario");
const nome = document.getElementById("idInNome");
const numeroDependentes = document.getElementById("idInNumeroDependentes");
const salarioBase = document.getElementById("idInSalarioBase");
const producaoTotal = document.getElementById("idInProducaoTotal");
const resultado = document.getElementById("idOnResultado");

function calcularContracheque(matriculaFuncionario, nome, numeroDependentes, salarioBase, producaoTotal) {
    let salarioBruto = salarioBase;
    let gratificacao = 0;
    if(producaoTotal <= 1000){
        gratificacao = 500;
        salarioBruto += gratificacao;
    } else if(producaoTotal > 1001 && producaoTotal <= 2000){
        gratificacao = 1250;
        salarioBruto += gratificacao;
    } else if(producaoTotal > 2000){
        gratificacao = 2250;
        salarioBruto += gratificacao;
    } else{
        gratificacao = 0;
        salarioBruto += gratificacao;
    }

    let descontoInss = 0;
    if(salarioBruto <= 1412){
        descontoInss = salarioBruto * 0.075;
    } else if(salarioBruto > 1412.01 && salarioBruto <= 2666.68){
        descontoInss = salarioBruto * 0.09;
    } else if(salarioBruto > 2666.69 && salarioBruto <= 4000.03){
        descontoInss = salarioBruto * 0.12;
    } else{
        descontoInss = salarioBruto * 0.14;
    }

    let descontoIrpf = 0;
    if(salarioBruto <= 2259.20){
        descontoIrpf = 0;
    } else if(salarioBruto > 2259.21 && salarioBruto <= 2826.65){
        descontoIrpf = salarioBruto * 0.075;
    } else if(salarioBruto > 2826.66 && salarioBruto <= 3751.05){
        descontoIrpf = salarioBruto * 0.15;
    } else if(salarioBruto > 3751.06 && salarioBruto <= 4664.68){
        descontoIrpf = salarioBruto * 0.225;
    } else{
        descontoIrpf = salarioBruto * 0.275;
    }

    let descontoDependentes = 0;
    if(numeroDependentes > 0){
        descontoDependentes = (123 * numeroDependentes);
    }else{
        descontoDependentes = 0;
    }

    let salarioLiquido = salarioBruto - descontoInss - descontoIrpf;
    return "Matricula: " + matriculaFuncionario + "\nNome: " + nome+ "\nNúmero de dependentes: " + numeroDependentes + "\nSalario base: R$" + salarioBase + "\nGratificação: R$" + gratificacao + "\nSalario bruto: R$" + salarioBruto + "\nDesconto INSS: R$" + descontoInss + "\nDesconto IRPF: R$" + descontoIrpf + "\nDesconto dos dependentes: R$" + descontoDependentes + "\nSalario liquido: R$" + salarioLiquido;
}

function eventoBtnCalcularContracheque() {
    const valorMatricula = Number(matriculaFuncionario.value);
    const valorNome = nome.value;
    const valorNumeroDependentes = Number(numeroDependentes.value);
    const valorSalarioBase = Number(salarioBase.value);
    const valorProducaoTotal = Number(producaoTotal.value);
    const valorFinal = calcularContracheque(valorMatricula, valorNome, valorNumeroDependentes, valorSalarioBase, valorProducaoTotal);
    resultado.innerText = valorFinal;
}
