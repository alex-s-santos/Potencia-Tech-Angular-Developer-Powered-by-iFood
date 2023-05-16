let {nome, lista, obj, calcularImc, Carro, Date} = require('./export');

console.log(nome);
console.log(lista[3]);
console.log(obj.peso);
console.log(calcularImc(obj.peso, obj.altura).toFixed(2));

let uno = new Carro('Fiat', 'Uno Economy', 'Chumbo', 12, 120, 5.29);
let caiman = new Carro('Porsh', 'Caiman S', 'Vermelho', 9, 146, 5.29);

console.log(uno);
console.log(caiman.cor);
console.log(caiman.totalGastoNaViagem);


//Simulando como pegar o new Date
const time = new Date;

const ano = time.getFullYears; //Observação: Aqui não invoco como função, por ser apenas uma chave do objeto criado
const hora = time.getTime;

console.log(ano, hora);