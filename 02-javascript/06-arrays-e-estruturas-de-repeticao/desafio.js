//Crie um programa que dado o número, imprima a dua tabuada.

function imprimirTabuada(num) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    };
};

console.log(imprimirTabuada(1));
console.log(imprimirTabuada(5));