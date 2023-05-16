//Orientação a objeto com JS

//Criando classes: servem para criar  um modelo de objeto para ser instanciado com esse modelo em outros objetos.
//Classe é uma definição - instância é uma ocorrência do objeto seguindo o padrão da classe

class Pessoa { //Por convensão coloca-se sempre com letra maiúscula
    nome;
    idade;

    descrever() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    };
}; //A classe cria um modelo

const alex = new Pessoa(); //Instanciando a classe pessoa
alex.nome = 'Alex Santos';
alex.idade = 30;
console.log(alex);

const teste = new Pessoa();
teste.nome = 'José João';
teste.idade = 45;
console.log(teste);

//const teste2 = new Pessoa('Pedro', 75); Dessa maneira, não passa os parâmetros, apenas usando um construtor

//Ambos seguem o mesmo padrão

alex.descrever();
teste.descrever();


//Constructor - Serve para deixar um valor obrigatório para uma chave especifica, ou seja ao ser instanciado, o objeto precisa ter o valor do atributo do método construtor
class Pessoa2 {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade) { //Esse método pede os valores para os artibutos especificos quando se instancia o objeto
        this.nome = nome; //Aqui a chave nome da classe receberá o nome que vem do parâmetro do método construtor na instanciação
        this.idade = idade;
        this.anoNascimento = (function(){
            const tempo = new Date;
            let anoAtual = tempo.getFullYear();
    
            let anoNascimento = anoAtual - idade;
    
            return anoNascimento;
        })();//Chamando a função IIFE p/ atribuir valor na execução
    }
}

const teste2 = new Pessoa2('Alex', 30);
console.log(teste2);