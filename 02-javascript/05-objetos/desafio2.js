/* CRIE UMA CLASSE PARA REPRESETAR PESSOAS

1. Para cada pessoa teremos os atributos nome, peso e altura.
2. As pessaos devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura *altura));
3. Instancie uma pessoa chamada JOSÉ que tenha 70KG de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC

*/

class Pessoa {
    nome;
    peso;
    altura;
    falarImc;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

        this.falarImc = (function () { //Funções em OBJETOS são MÉTODOS
            let imc = peso / (altura ** 2);
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

            return `Olá, eu sou ${nome}, tenho ${peso}kg e ${altura}m de altura, meu IMC é ${imc.toFixed(2)} e eu estou ${resultado}`;
        })()
        
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose);

const alex = new Pessoa('Alex', 67.89, 1.64);//teste
console.log(alex); //Outro teste