const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite a sua idade: ', idade => {
    if (idade < 16) {
        console.log("voce é não eleitor")
    }else if(idade >= 18 && idade < 65){
            console.log("voce é eleitor obrigatorio")
        } else if(idade >= 16 && idade < 18 || idade > 65) {
            console.log("voce é eleitor facultativo")
    }
    readline.close();
});