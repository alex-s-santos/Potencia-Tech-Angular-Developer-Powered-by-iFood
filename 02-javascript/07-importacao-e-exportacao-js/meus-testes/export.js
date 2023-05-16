let nome = 'Alex'; //Funciona com variáveis
let lista = [0, 1, 2, 3, 4, 5]; //Funciona com Arrays
let obj = { //Funciona com objetos
    nome: 'Alex',
    idade: 30,
    peso: 67.77,
    altura: 1.64
}

function calcularImc(peso, altura) { //Funciona com Funções
    let imc = peso / (altura ** 2);
    return imc
} 

class Carro { //Funciona com classes
    marca;
    modelo;
    cor;
    kmPorLitro;

    constructor(marca, modelo, cor, kmPorLitro, kmViagem, precoGasolina) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;

        this.totalGastoNaViagem = (function(){
            let valorNecessarioParaViagem = (kmViagem / kmPorLitro) * precoGasolina;

            return `R$${valorNecessarioParaViagem.toFixed(2)}`;
        })()
    }
}

//Simulando o new Date

class Date {
    getFullYears = 2023;
    getTime = '13:50';
}

module.exports = {nome, lista, obj, calcularImc, Carro, Date};