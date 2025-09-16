function valorAtualizadoPrestacao(prestacao,taxa,atraso){
   return prestacao + (prestacao*(taxa/100)* atraso);
}

const valorPrestacao = 10;
const valorTaxa = 10;
const valorAtraso = 10;
const resultado = valorAtualizadoPrestacao(valorPrestacao,valorTaxa,valorAtraso);
console.log(resultado);