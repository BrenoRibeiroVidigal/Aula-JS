const precoProduto = 1000;
let precoAtualizado = 0;
let classificacao = "";
if(precoProduto <= 50){
    precoAtualizado += precoProduto + (precoProduto * 0.06);
} else if(precoProduto > 50 && precoProduto <= 100){
    precoAtualizado += precoProduto + (precoProduto * 0.15);
} else {
    precoAtualizado += precoProduto + (precoProduto * 0.20);
}

if(precoAtualizado <= 90){
    classificacao+= "Barato"
} else if(precoAtualizado > 90 && precoAtualizado <= 220){
    classificacao+= "Normal";
} else if(precoAtualizado > 220 && precoAtualizado <= 300){
    classificacao+= "Caro";
} else{
    classificacao+= "Muito caro"
}

const saida = "Preço atualizado: R$" + precoAtualizado + "\n" + "Classificação do produto: " + classificacao;
console.log(saida);