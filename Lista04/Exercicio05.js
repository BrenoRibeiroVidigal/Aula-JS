const raizA = 10;
const raizB = 5;
const raizC = 2;

const somaRaiz = b * b - 4 * a * c;

if(somaRaiz < 0) {
    console.log("A raiz é imaginaria");
} else if(somaRaiz === 0) {
    console.log("A raiz é unica");
} else {
    console.log("A raiz é distinta");
}