//Declaração literal

const pessoa = {
    nome: 'Alex Santos',
    altura: 1.64,
    peso: 68,
    idade: 30,
    apresentacao: function(){
        return console.log(`Olá, meu nome é ${this.nome}, e eu tenho ${this.idade} anos.`);
    } 
};

//Acessar atributos
console.log(pessoa); //Mostra o objeto completo com as coleções chave/valor
console.log(pessoa.nome); //Acessa um atributo especifico através da notação ponto

//Incluir atributo
pessoa.apelido = 'Alex';
console.log(pessoa);

//Excluir atributo
delete pessoa.apelido;
console.log(pessoa);

//Chamando método de dentro do objeto
pessoa.apresentacao();


//Criando método dinamicamente no objeto que realiza uma operação lógica a partir de elementos do método e do objeto
pessoa.anoNascimento = function() {
    const tempo = new Date;
    let anoAtual = tempo.getFullYear();
    let anoNascimento = anoAtual - this.idade;

    return anoNascimento;
};

console.log(pessoa.anoNascimento()); //Retorno do método

//Acessar o atributo através de uma string
console.log(/*nome do obj*/pessoa/*Entre colchetes*/['nome'/*a string com a mesma chave do atributo*/]);
console.log(pessoa['idade']); //Mais limpo :)

//Atribuir valore dinamicamente através de string
pessoa['teste'] = 'teste';
console.log(pessoa);