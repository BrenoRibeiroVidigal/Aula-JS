const litros = 15;
const tipo = 4;

if(tipo == 1){
    let conversaoCombustivel = litros * 4.805;
    console.log("O preço a ser pago é: " + conversaoCombustivel)
} else if(tipo == 2){
    let conversaoCombustivel = litros * 5.953;
    console.log("O preço a ser pago é: " + conversaoCombustivel)
}else if(tipo == 3){
    let conversaoCombustivel = litros * 6.565;
    console.log("O preço a ser pago é: " + conversaoCombustivel)
}else{
    console.log("Tipo invalido")
}