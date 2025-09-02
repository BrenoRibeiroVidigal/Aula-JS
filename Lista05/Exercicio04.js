let dinheiroReal = 50;

const euro = 5.418;
const libra = 6.336;
const dolar = 5.189;

let escolha = 4;

if(escolha == 1){
    let conversao = dinheiroReal * euro;
    console.log("Conversao para euro: "+conversao);
} else if(escolha == 2){
    let conversao = dinheiroReal * libra;
    console.log("Conversao para libra: "+conversao);
} else if(escolha == 3){
    let conversao = dinheiroReal * dolar;
    console.log("Conversao dolar: "+conversao);
}else{
    console.log("Tipo invalido")
}