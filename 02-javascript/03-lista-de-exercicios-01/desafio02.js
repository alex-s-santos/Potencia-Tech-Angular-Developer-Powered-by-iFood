/*O IMC indica a condição de peso de uma pessoal adulta
Formual: peso (em kg) ÷ altura² (em metros)

Faça um algoritmo que calcule e imprima o IMC e classifique conforme tabela a baixo:

Abaixo de 18.5 - Abaixo do peso
Entre 18.5 e 25 - peso normal
Entre 25 e 30 - acima do peso
Entre 30 e 40 - obeso
A cima de 40 - obesidade mórbida
*/

//Variáveis - entradas
let peso;
let altura;

//Testes
peso = 67;
altura = 1.64;

//Lógica
let imc = (peso / (altura**2)).toFixed(2);
let resultado;

if(imc > 0 && imc < 18.5) {
    resultado = 'a baixo do peso';
} else if(imc >= 18.5 && imc < 25) {
    resultado = 'no peso normal';
} else if(imc >= 25 && imc < 30) {
    resultado = 'a cima do peso';
}  else if(imc >= 30 && imc < 40) {
    resultado = 'obeso';
}  else if(imc > 40) {
    resultado = 'com obesidade mórbida';
} else {
    resultado = '[Este valor é inválido]';
};

//Saída
console.log(`Seu IMC é: ${imc}, e você está ${resultado}.`)