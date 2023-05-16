//Declaração literal
let variavelQualquer;//Declarando apenas para colocar no array
const listaAleatoria = ['Alex', 30, true, obj = {}, function(){}, variavelQualquer]; //Em JS os arrays aceitam tipos
//Diferentes no mesmo array (string, number, boolean, objetos, funções, variáveis etc.)

const pessoas = ['Alex', 'João', 'José'];

//Acessar item do array
console.log(pessoas[0]); //Acesso a partir do índice iniciando do zero
console.log(pessoas[2]);

//Para incluir valores no final do array
pessoas.push('André');
console.log(pessoas);

//Para incluir item em posição especifica
pessoas[5] = 'Pedro';
console.log(pessoas); 

console.log(pessoas[4]); //Quando um valor não é declarado para uma posição, ele retorna undefined

//Para excluir o último valor
pessoas.pop();
console.log(pessoas);

let novaVariavel = pessoas.pop(); //Posso acessar o valor excluído, salvar numa variável, imprmir ou fazer qualquer outra operação
console.log(novaVariavel);

//Para excluir o primeiro valor
pessoas.shift();
console.log(pessoas);

//Para saber o tamanho (quantidade de itens de um array)
console.log(pessoas.length);

//Para saber o índice de um item específico
console.log(pessoas.indexOf('José'));
console.log(pessoas.indexOf('André'));