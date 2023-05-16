//Faça um algoritmo que dadas as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima sua média e sua classificação conforme taleba a baixo
/*
Calssificação:

- Média menor que 5, Reprovado;
- Média entre 5 e 7, recuperação;
- Média maior ou igual a 7, aprovado;
*/

//Variáveis - Entrada
let nota1;
let nota2;
let nota3;


//Testes
nota1 = 7;
nota2 = 8.3;
nota3 = 10;

//Lógica
let media = (nota1 + nota2 + nota3) / 3;
let resultado;

if(media > 0 && media < 5) {
    resultado = 'Você está reprovado';
} else if(media > 5 && media < 7) { 
    resultado = 'Você está de recuperação';
} else if(media >= 7 && media < 10) {
    resultado = 'Parabéns, aprovado!'
} else {
    resultado = 'Média inválida';
};

//Impressão no console - Saída
console.log(`Média: ${media.toFixed(1).replace('.', ',')} | ${resultado}.`);