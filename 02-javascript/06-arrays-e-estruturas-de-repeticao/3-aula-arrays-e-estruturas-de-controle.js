//Percorrendo arrays com estruturas de repetição
const NOTAS = [];

NOTAS.push(5.5);
NOTAS.push(8.2);
NOTAS.push(9);
NOTAS.push(6.4);
NOTAS.push(3.5);

console.log(NOTAS)

let soma = 0;

for (let i = 0; i < NOTAS.length; i++) {
    soma = soma + NOTAS[i];  
};

const MEDIA = soma / NOTAS.length;

console.log(MEDIA.toFixed(1));