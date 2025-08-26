let custoDeCarroFabrica = 15000;
let calculoImpostoDistribuidor = custoDeCarroFabrica * 0.12;
let calculoImpostoFabrica = custoDeCarroFabrica* 0.30;
let custoDoCarroConsumidor = custoDeCarroFabrica + calculoImpostoDistribuidor + calculoImpostoFabrica;
console.log("Custo do carro para consumidor é: "+ custoDoCarroConsumidor);