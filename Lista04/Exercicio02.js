const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite o salario do funcionario: ', salario => {

    if (salario <= 1412) {
        let ajuste = Number(salario) * 0.50;
        let salarioAjustado = Number(salario) + Number(ajuste);
        console.log("Salario ajustado é: " + salarioAjustado);
    } else if (salario > 1412) {
        let ajuste = Number(salario) * 0.40;
        salarioAjustado = Number(salario) + Number(ajuste);
        console.log("Salario ajustado é: " + salarioAjustado);
    }
    readline.close();
});