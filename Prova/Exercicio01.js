let quiloWats = 100;
let salarioMinimo = 1518;

const valorPorQuiloWatts = salarioMinimo * (1/4);
const valorTotalPago = valorPorQuiloWatts * quiloWats;
const valorPagoDesconto = valorTotalPago - (valorTotalPago * 0.25);

const saida = "Valor de cada quilowatts: R$" + valorPorQuiloWatts + "\n" + "Valor total a ser pago: R$" + valorTotalPago + "\n" + "Valor a ser pago com desconto: R$" + valorPagoDesconto;

console.log(saida);