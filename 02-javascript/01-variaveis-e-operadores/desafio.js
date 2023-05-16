//Faça um programa para calcular o valor gasto de combustível em uma viagem

/*
Você terá 3 variáveis:
1 - preço do combustível
2 - Gasto médio de combustível do carro por km
3- distância percorrida em KM na viagem

Imprima no console o valor que será gasto na viagem
*/

let precoCombustivel;
let gastoMedioPorKm;
let distanciaPercorrida;

//Testes
//Com gasolina
precoCombustivel = 5.05;
gastoMedioPorKm = 9;
distanciaPercorrida = 120;

let calcularValorGastoNaViagem = (distanciaPercorrida / gastoMedioPorKm) * precoCombustivel;
console.log(calcularValorGastoNaViagem.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));

//Com alcool
precoCombustivel = 3.89;
gastoMedioPorKm = 7;
distanciaPercorrida = 120;

calcularValorGastoNaViagem = (distanciaPercorrida / gastoMedioPorKm) * precoCombustivel;
console.log(calcularValorGastoNaViagem.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));