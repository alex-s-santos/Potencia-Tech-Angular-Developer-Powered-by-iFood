/* CRIE UMA CLASSE PARA REPRESENTAR CARROS

Os carros possuem uma marca, uma cor e um gasto de combustível por km rodado, crie um método que dado a quantidade de km
e o preço do combustível nos dê o valor gasto em reais para realizar o percurso.
*/

class Carro {
    marca;
    cor;
    gastoDeCombustivelPorLitro;
    valorNecessarioParaAViagem;

    constructor(marca, cor, gastoPorLitro, totalKmDaViagem, precoCombustivel) {
        this.marca = marca;
        this.cor = cor;
        this.gastoDeCombustivelPorLitro = gastoPorLitro;

        this.valorNecessarioParaAViagem = (function() {
            let valorParaAViagem = (totalKmDaViagem / gastoPorLitro) * precoCombustivel;

            return valorParaAViagem.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        })();
    };
};

const uno = new Carro('fiat', 'branco', 12, 120, 5.26);
const ferrari = new Carro('ferrari', 'vermelha', 6, 430, 3.26);

console.log(uno);
console.log(ferrari);