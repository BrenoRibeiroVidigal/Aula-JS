const valorPrestacao = 100;
let taxaJuros = 50;
let tempoAtraso = 30;

let valorAtualizadoPrestaco = valorPrestacao + (valorPrestacao*(taxaJuros/100)* tempoAtraso);

console.log("Valor a ser pago: " + valorAtualizadoPrestaco);