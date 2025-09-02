const nome = "Breno";
const numeroConta = 666;
const salarioSemestral = 1000;
if(salarioSemestral<=1000) {
    let tarifa = 25;
    const salarioAtualizado= salarioSemestral - tarifa;
    console.log("Salário com a tarifa aplicada: "+salarioAtualizado + "(Tarifa: "+tarifa+")");
}if(salarioSemestral>1001 && salarioSemestral<=2000) {
    let tarifa = 20;
    const salarioAtualizado= salarioSemestral - tarifa;
    console.log("Salário com a tarifa aplicada: "+salarioAtualizado + "(Tarifa: "+tarifa+")");
}if(salarioSemestral>2001 && salarioSemestral<=3500) {
    let tarifa = 13;
    const salarioAtualizado= salarioSemestral - tarifa;
    console.log("Salário com a tarifa aplicada: "+salarioAtualizado + "(Tarifa: "+tarifa+")");
}if(salarioSemestral>3501) {
    console.log("Salário com a tarifa aplicada: "+salarioSemestral + "(Tarifa foi isenta)");
}