let publicoTotal = 100;
const ingressoPopular = (publicoTotal*0.10) * 5;
const ingressoGeral = (publicoTotal*0.50)* 10;
const ingressoArquibancada = (publicoTotal*0.30) * 20;
const ingressoCardeiras = (publicoTotal*0.10) * 40;
let rendaTotal = ingressoPopular + ingressoGeral + ingressoArquibancada + ingressoCardeiras;
console.log("A renda total foi de: "+rendaTotal);