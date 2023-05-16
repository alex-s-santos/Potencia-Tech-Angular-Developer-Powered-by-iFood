/*OBS Esta aula criei usando a base de meus conhecimento previos antes do bootcamp para tornar a experiência
Mais completa, visto que a segunda parte da aula seria como usar array e estruturas de repetição juntos. Que nesse meu
repositório será a 3ª aula.
*/

//Estrutura FOR
for(let i = 0; i <= 5; i++) {
    console.log(i);
};

//Estrutura WHILE
let i = 0;

while(i <= 5) {
    console.log(i);

    i++;
};

//Estrutura DO WHILE

let contador = 1;

do {
    console.log(contador);
    contador++;
} while(contador == 1);
//A diferença do WHILE para o DO WHILE é que o DO WHILE executa ao menos uma vez, caso a variável de controle saia do
//laço. No exemplo imprime o contador e quando chega no laço entende que já foi satisfeito e para.