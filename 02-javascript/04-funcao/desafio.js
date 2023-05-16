//Faça uma função que calcule se alguém é maior de idade a partir do ano de nascimento

function calcularIdade(anoNascimento) {
    let tempo = new Date;
    let anoAtual = tempo.getFullYear();
    let idade = anoAtual - anoNascimento;
    let ehMaior;

    if(idade >= 18) {
        ehMaior = 'é de maior';
    } else {
        ehMaior = 'você ainda não é de maior';
    }

    return console.log(`Você tem ${idade} anos e ${ehMaior}`);
};

calcularIdade(1993);
calcularIdade(2020);