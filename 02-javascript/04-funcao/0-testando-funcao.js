//Declaração literal

function teste() {

    console.log('teste');
};

//Invocando função literal
teste();

//Trabalhando com funções
function main() {
    function calcularImc(peso, altura) {
        let imc = (peso / (altura**2)).toFixed(2);
        return imc;
    };
    
    function classificarImc() {    //funções dentro de funções como pequenos blocos para deixar mais clean e funcional
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
        
        return resultado;
    };

    let imc = calcularImc(67, 1.64); //Atribuindo função a uma variável
    let classificacao = classificarImc(imc);

    return `Seu IMC é: ${imc}, e você está ${classificacao}.`;
};

console.log(main());

//Função IIFE (immediately invaked function expretion - Invocação imediata da função [a função invoca a si mesma])

(function() { //Coloca a função entre parênteses e os parênteses da invocação no final
    function calcularImc(peso, altura) {
        let imc = (peso / (altura**2)).toFixed(2);
        return imc;
    };
    
    function classificarImc() {    //funções dentro de funções como pequenos blocos para deixar mais clean e funcional
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
        
        return resultado;
    };

    let imc = calcularImc(67, 1.64); //Atribuindo função a uma variável
    let classificacao = classificarImc(imc);
   
    return console.log(`Seu IMC é: ${imc}, e você está ${classificacao}.`);
})()/*Parênteses como se invova normal*/;