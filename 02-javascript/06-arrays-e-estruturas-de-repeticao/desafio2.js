//Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado

let numeros = [];
let soPares = [];
let soImpares = [];

numeros.push(5);
numeros.push(6);
numeros.push(56);
numeros.push(48);
numeros.push(87);
numeros.push(78947);
numeros.push(423);
numeros.push(432);
numeros.push(543);
numeros.push(78947);
numeros.push(515);
numeros.push(245);
numeros.push(45254);
numeros.push(95742647);
numeros.push(62426);
numeros.push(345798);
numeros.push(14417);
numeros.push(858);

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 == 0) {
        soPares.push(numeros[i]);
    } else {
        soImpares.push(numeros[i]);
    }
}

console.log(numeros);
console.log(soPares); //Objetivo da lição
console.log(soImpares);