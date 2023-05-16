//Faça um programa para calcular o custo de uma viagem
/*
Você terá 5 variáveis:
1 - Preço do Etanol;
2 - Preço da Gasolina;
3 - Tipo de Combutível que está no carro;
4 - Gasto médio de combustível por km;
5 - Distância a percorrer na viagem;

Imprima no console o valor que será gasto para realizar a viagem.
*/

//Variáveis
const PRECO_ETANOL = 3.89;
const PRECO_GASOLINA = 5.05;
const GASTO_MEDIO_POR_KM = 10;
let tipoDeCombustivel;
let distanciaPercorrida;

//testes
tipoDeCombustivel = 'etanol';
distanciaPercorrida = 120;

//Lógica
let quantidadeDeCombustivelNecessarioParaViagem = distanciaPercorrida / GASTO_MEDIO_POR_KM;
let mensagemDeRetorno;
let valorNecessarioParaViagem;

if(tipoDeCombustivel == 'etanol') {
    valorNecessarioParaViagem = quantidadeDeCombustivelNecessarioParaViagem * PRECO_ETANOL;
    mensagemDeRetorno = `O valor necessário para a viagem, usando: ${tipoDeCombustivel}, será de: ${valorNecessarioParaViagem.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`;
} else if(tipoDeCombustivel == 'gasolina'){
    valorNecessarioParaViagem = quantidadeDeCombustivelNecessarioParaViagem * PRECO_GASOLINA;
    mensagemDeRetorno = `O valor necessário para a viagem, usando: ${tipoDeCombustivel}, será de: ${valorNecessarioParaViagem.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`;
} else {
    mensagemDeRetorno = 'Tipo de combustível inválido';
};

//Impressões no console
console.log(mensagemDeRetorno);