var arr = [1, 2, 3, 4, 5];
var reduce = arr.reduce(function(acumulado,atual, index,array){
    //acumulado é zero, segundo parametro do reduce, se nao passamos o segundo parametro o valor acumulado inicia com o valor do primeiro item do array e o atual o item 2
    //passa por todos os itens do array
    return acumulado+atual;
}, 0);//nao modifica o array principal, recebe 2 parâmetros
console.log(reduce);
/*======= reduceRight() ===================================
faz igual o reduce mas da direita para a esquerda, tipo o reverse
======= indexOf() ==============
procura de umvalor existe no indice do array
*/
var arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(3));//exite o 3 no array? retorna o indice 2, se nao existir retorna -1
var arr = ['v', 'i', 't', 't', 'o', 'r', 'i', 'a'];
console.log(arr.indexOf('p'));//retorna -1
console.log(arr.indexOf('v', 2));//a partir do indice 2 existe o v? nao, retorna -1
console.log(arr.indexOf('v', 0)>-1);
/*====== lastIndexOf() ==============
faz a mesma coisa, só que procura do final
======== isArray() ==================
*/
console.log(Array.isArray(arr));//retorna true or false, serve para verificar se é objeto ou não, tipo type of(mas so retorna objeto, nao diferencia o array do objeto, só valores primitivos)
//______________________________________________________________________________________________________________________________________________________________________________________________________________
(function(){
/*
Envolva todo o código desse desafio em uma IIFE.
*/

/*
Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
elemento será um objeto no formato:
{ number: [NUMBER] }
Os números devem ser de 1 a 10.
Mostre esse array no console.
*/
console.log( 'Number Objects Array:' );
var numberObjects = [];
for(var i = 1; i<=10; i++){
    numberObjects.push({ number: i});
}
console.log(numberObjects);

/*
Crie um array chamado `justNumbers`, que terá como elementos somente os
números do array criado acima. Mostre esse novo array no console.
*/
console.log( '\nJust Numbers:' );
var justNumbers = numberObjects.map(function(item){
    return item.number;
});//map retorna um novo array
console.log(justNumbers);

/*
Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
no console.
*/
console.log( '\nJust module of division by 2 or 3:' );
var justMod2Or3 =justNumbers.filter(function(item){
    return item % 2 === 0 || item % 3 === 0;
});//retorna os itens verdadeiros
console.log(justMod2Or3);

/*
Declare uma variável chamada operation que receba, do array criado acima,
um valor reduzido pela seguinte operação:
- Somar 1 ao último valor retornado;
- Multiplicar o resultado pelo valor atual.
O cálculo deve começar com zero.
Mostre o resultado no console.
*/
console.log( '\nOperation:' );
var operation = justMod2Or3.reduce(function(acumulado, atual){
    return (atual + 1)* atual;
}, 0);
console.log(operation);

/*
Faça o mesmo cálculo passado acima, mas começando do último item para o
primeiro. O nome da variável deve ser operation2. Mostre o resultado no
console.
*/
console.log( '\nOperation 2:' );
var operation2 = justMod2Or3.reduceRight(function(acumulado, atual){
    return (atual + 1)* atual;
}, 0);
console.log(operation2);

/*
Crie um array chamado `name`. Cada elemento desse array deve ser uma sílaba
do seu nome. Vamos reduzir esse array, juntando todas as sílabas, mas usando
a "língua do P".
PS.: Lembra da língua do "P"? Não? A língua do "P" é uma brincadeira
infantil, onde você coloca a letra "P" antes de cada sílaba de uma palavra
falada, como se você estivesse falando em código xD
*/
console.log( '\nSeu nome na língua do "P":' );
var name = [ 'Vi', 'ttó', 'ri', 'a'];
var reduceP = name.reduce(function(acumulado, atual){
    return acumulado +  'P ' + atual;
}, '');
console.log(reduceP);

/*
Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
e atribuirá o seu nome invertido (usando o array criado acima).
*/
console.log( '\nInversed Name:' );
var inversedName = name.reduceRight(function(acumulado, atual){
    return acumulado + atual;
});
console.log(inversedName, name.reverse().join(''));


/*
Mostre no console o array `numberObjects`.
*/
console.log( '\nNumber objects' );
console.log(numberObjects);

/*
Verifique se existem em algum índice de numberObjects um objeto ìgual a
{ number: 2 }. Se houver, mostre no console:
- "Existe um objeto { number: 2 } em numberObjects!"
Senão, mostre a frase:
- "Não existe um objeto { number: 2 } em numberObjects!"
Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
o que acontece ;)
*/
console.log( '\nExiste um { number: 2 } em numberObjects?' );
var obj = numberObjects[1];
if(numberObjects.indexOf(obj)>-1){
    return 'Existe um objeto { number: 2 } em numberObjects!';
}
return 'Não existe um objeto { number: 2 } em numberObjects :(';

/*
Fazendo o mesmo do exercício acima, mas começando a buscar do último índice,
será que obtemos um resultado diferente? Faça a busca a partir do índice 2.
*/
console.log( '\nE buscando a partir do último índice, o { number: 2 } existe?' );
if(numberObjects.lastIndexOf(numberObjects[1], 2)>-1){
    return 'Existe um objeto { number: 2 } em numberObjects!';
}
return 'Não existe um objeto { number: 2 } em numberObjects :(';


/*
Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no
formato de String.
*/
console.log( '\njustMod2Or3 é um array? Se for, a representação dele em String é:' );
if(Array.isArray(justMod2Or3)){
    console.log(justMod2Or3.toString());
}
})();
