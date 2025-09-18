let salario = document.getElementById("idInSalario");
const resultado = document.getElementById("idOnResultado");

function calcularSalario(salario){
if (salario <= 1412) {
        let ajuste = salario * 0.50;
        let salarioAjustado = salario + ajuste;
        return(salarioAjustado);
    }if (salario > 1412) {
        let ajuste = salario * 0.40;
        salarioAjustado = salario + ajuste;
        return(salarioAjustado);
}
}

function eventoBtnCalcularSalario() {
    const salarioN = Number(salario.value);
    const salarioAjustado = calcularSalario(salarioN);
    const saida = "O salario ajustado é: " + salarioAjustado;
    resultado.innerText = saida;
}

