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

const {gets, print, numerosSorteados} = require('./funcoes-auxiliares');

print(gets(numerosSorteados));