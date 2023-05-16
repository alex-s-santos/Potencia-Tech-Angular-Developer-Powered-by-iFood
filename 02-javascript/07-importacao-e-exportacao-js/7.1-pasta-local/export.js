//Essas são as funções que iremos exportar

function gets() {
    return 10;
}

function print(texto) {
    console.log(texto);
}

//exportando arquivos

module.exports = {gets, print}; //O module.exports é um objeto vazio usado para exportar quaisquer arquivos para fora do arquivo atual

/*
Seria o mesmo que:

module.exports = {
    gets: gets,
    print: print
} -> Objeto literal


Outra maneira de fazer apenas com um arquivo é: module.exports.gets = gets; Atribuindo valor a chave gets como no objeto
literal. OBS: O primeiro exemplo é o mais moderno.
*/