//Improtando arquivos - Só se importa o que foi exportado


/*
Essa maneira já chama todas as funções contidas no exports
const funcoes = require('./export.js');

console.log(funcoes); //Imprime o objeto com as funções

*/

const {gets, print} = require('./export'); //Assim usando o operador destructuring para já usar os elementos a partir da importação

print(gets()); //Possibilita usar os elementos criados na importação