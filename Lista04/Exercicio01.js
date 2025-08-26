const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Digite um numero: ', numero => {
    if (numero % 2 == 0) {
        console.log("O numero é par");
    } else {
        console.log("O numero é impar");
    }
    readline.close();
});
