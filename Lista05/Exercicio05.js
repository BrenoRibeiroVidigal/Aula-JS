const precoProduto = 1500;
const codigo = 5;

if(codigo == 1){
    let desconto = precoProduto * 0.10;
    let precoProdutoAtualizado = precoProduto - desconto;
    console.log("O preço do produto a ser pago é: " + precoProdutoAtualizado)
} else if(codigo == 2){
    let desconto = precoProduto * 0.05;
    let precoProdutoAtualizado = precoProduto - desconto;
    console.log("O preço do produto a ser pago é: " + precoProdutoAtualizado)
}else if(codigo == 3){
    console.log("O preço do produto a ser pago é: " + precoProduto)
}else if(codigo == 4){
    let taxa = precoProduto * 0.10;
    let precoProdutoAtualizado = precoProduto + taxa;
    console.log("O preço do produto a ser pago é: " + precoProdutoAtualizado)
}else{
    console.log("Tipo invalido")
}