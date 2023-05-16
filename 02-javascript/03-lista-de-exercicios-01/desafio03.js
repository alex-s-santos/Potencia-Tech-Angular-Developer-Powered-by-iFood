/*Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha de condição
de pagamento, conforme tabela a baixo.

Opção 1 - cartão de débito - recebe 10% de desconto;
Opção 2 - Dinheiro ou pix - recebe 15% de desconto;
Opção 3 - 2x preço normal de etiqueta;
Opção 4 - a cima de duas vezes, juros de 10%
*/

//Entradas
let preco;
let formaDePagamento;
let valorAPagar;

//Testes
console.log('Opções: [1] - débito | Opções: [2] - débito | Opções: [3] - débito | Opções: [4] - débito')

preco = 100;
formaDePagamento = 4;

//Lógica
switch(formaDePagamento){
    case 1: 
        valorAPagar = (preco - (preco * 0.10));
    break

    case 2: 
        valorAPagar = (preco - (preco * 0.15));
    break

    case 3: 
        valorAPagar = (preco);
    break

    case 4: 
        valorAPagar = (preco + (preco * 0.10));
    break

    default:
        valorAPagar = 'Opção inválida.';
};

//Saídas
console.log('Valor a pagar: ' + valorAPagar.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));