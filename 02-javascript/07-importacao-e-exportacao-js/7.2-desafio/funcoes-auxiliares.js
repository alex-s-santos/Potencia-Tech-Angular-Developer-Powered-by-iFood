/* Usando exportaçãoe  importação, resolva:
 Uma sala de aula contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
 faça um programa que receba os 5 números sorteados para os aluno e mostre o maior número sorteado.

 Dados de entrada:
 5
 50
 10
 98
 23

 Saída:
 98
*/
let numerosSorteados = [5, 50, 10, 98, 23];

function gets(numeros) {
    let maiorNumero
    for (let i = 0; i < numeros.length; i++) {
        if(maiorNumero === undefined || maiorNumero < numeros[i]) {
            maiorNumero = numeros[i];
        }    
    }
    
    return maiorNumero;
}

function print(texto) {

    console.log(texto);
}

module.exports = {gets, print, numerosSorteados};