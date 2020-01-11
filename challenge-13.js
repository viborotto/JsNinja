//Arrays são objetos numerados, ou seja tem propriedades e métodos
arr.toString()//converte o array em string e separa por virgula, igual o join(), a diferença é que no join conseguimos passar parâmetros
//toString() tem uma implementação diferente em cada tipo de objeto no JS
//====== concat() ============
arr.concat(5)//une o array com uma coisa, tipo o push, mas nesse caso nao modifica o array principal
arr.concat([6,7,8,9]);
arr.concat([6,7,8,9],[10,11,12,13]);
// ========= unshift() ===========
arr.push(6);//insere no final
arr.pop(); //esses dois modificam o array principal
arr.unshift(0); //insere o item no inicio do array, modificando, retorna o tamanho
arr.shift();//remove o primeiro item no array e retorna o item removido
/* ========== slice() ============
retorna o pedaço do array, subarray */
arr.slice(1); //nao modifica o principal, retorna o array a partir do indice 1
arr.slice(0, 2)// com os elementos <indice 1
/* ========== splice() ============
 modifica o principal, pode adicionar e remover itens do array*/
 arr.splice(3); //retorna a partir do indice 3 e remove esses indices retornados, alterando o array
 arr.splice(1, 3);//a partir do indice 1 quero remover 3
 arr.splice(1,0,'a'); //a partir do indice 1 nao quero remover, só adicionar 'a'
 arr.splice(2,0,'b','c','d');
 arr.splice(1,4,2,3,4);
 /* ========== forEach() ============
 como se fosse estrutura de repetição, mais funcuinal*/
 var arr = [1, 2, 3, 4, 5, 6, 7];
 arr.forEach(function(item, index, array){
     console.log(item, index, array);
 });//melhor performance que o for, pode recebersó um parametro
 var sum = 0;
 arr.forEach(function(item){
    sum += item;
 });
 console.log(sum);
  /* ========== every() ============
  retorna true ou false, baseado no retorno da funçao
  usado para testar itens do array*/
  var arr = [1, 2, 3, 4, 5, 6, 7];
  var every = arr.every(function(item){
    return item < 5;
  });
  console.log(every);//se todos fossem menor que 5 retornaria true
  /* ========== some() ============
  retorna true ou false, baseado no retorno da funçao
  usado para testar itens do array
  pelo menos algum elemento*/
  var some = arr.some(function(item){
    return item % 2 === 0;
  });//se pelo menos algum dos itens for divisivel por 2, retorna true
  console.log(some);
   /* ========== map() ============
  */
 var arr = [1,2,3,4,5];
 //recebe uma funcao por parametro, percorre todo o array, mas retorna um NOVO array(tipo o forEach)
 //nao modifica o principal
 var map = arr.map(function(item, index, array){
    return item+1;
 });
 console.log(item);
 //COM FOREACH
 var newArr = [];
 arr.forEach(function(item, index, array){
    newArr.push({index: index, item: item});
 });
 console.log('newArr:');
 console.log(newArr);
  /* ========== filter() ============
  gera um novo array com filtro*/
 var filter = arr.filter(function(item, index, array){
    return item > 2;
 });
 console.log(filter);
 //podemos usar o map e filter juntos
  //_________________________________________________________________________________________________
(function(){
  /*
Envolva todo o código desse desafio em uma IIFE.
*/

/*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.
*/
console.log( 'O array em formato de string é:' );
// ?

/*
Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/
// ?

/*
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.
*/
console.log( '\nAlguns Estados do Brasil:' );
// ?

/*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/
console.log( '\nMais estados adicionados:' );
// ?

/*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/
console.log( '\nEstado removido:' );
// ?

/*
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
// ?

/*
Mostre no console os estados que estão em `newSul`.
*/
console.log( '\nEstados do Sul do Brasil:' );
// ?

/*
Mostre no console todos os estados que estão em `brasil`.
*/
console.log( '\nAlguns Estados do Brasil:' );
// ?

/*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
// ?

/*
Mostre no console os estados do nordeste.
*/
console.log( '\nEstados do Nordeste:' );
// ?

/*
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/
// ?

/*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
// ?

/*
Mostre no console os estados em `newSudeste`.
*/
console.log( '\nEstados em newSudeste:' );
// ?

/*
Mostre no console os estados do `brasil`.
*/
console.log( '\nAlguns estados do Brasil:' );
// ?

/*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/
// ?

/*
Mostre o array `newBrasil` no console
*/
console.log( '\nnewBrasil:' );
// ?

/*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/
console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
// ?

/*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/
console.log( '\nCeará está incluído em `brasil`?' );
// ?

/*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/
// ?

/*
Mostre no console o array criado acima:
*/
console.log( '\nnewBrasil agora com mais informações:' );
// ?

/*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/
// ?

/*
Mostre o array filtrado acima no console.
*/
console.log( '\nEstados com ID par:' );
// ?
})();