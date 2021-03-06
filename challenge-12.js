/* Criação de OBJETOS
.são mutaveis diferentemente de valores literais
.sao dois objetos diferente em lugares diferentes da memoria
.manipulados por referência
=formas de criar
1.literais
2.Constructor(new);
3. com Object.crear()
*/
var obj = {
    prop1: 'prop1',
    prop2: 'prop2'
}
var obj2 = {
    prop1: 'prop1',
    prop2: 'prop2'
}
obj.prop1 = propriedade1;
//modificar os valores
//deletar
delete obj.prop1;
obj = {};
var newObj = new Object();
//mais rapido usar o literal
var obj = Object.create();
Object.prototype()//é um prototipo do objeto que esta sendo criado  
//cada vez que vc cria um obj ele herda seu prototipo
//cada objeto tem um prototipo herdado de outro objeto
var obj = {x:1, y:2};
var obj2 = Object.create(obj);//criado a partir do outro    
obj2 //retorna vazio
obj2.prototype //retorna undefined
obj2.x //retorna 1 pq herdou as propriedades do obj
obj.hasOwnProperty('x')
//retorna true
// =======Métodos de objetos========
Object.keys(obj) //retorna array com propriedades do objeto
Object.keys(obj).length
obj.isPrototypeOf(obj2) //retorna true
JSON.stringify(obj)//transforma o objeto em padrao JSON
//é uma string que representa um objeto java script
JSON.parse(str)//volta pra objeto
//===========ARRAYS - MÉTODOS=====================
//Adicionar itens
var arr = []
arr[0] = 10
arr[1] = 5
arr[2] = 'oito'
arr[12] = 'doze'
arr.push('mais um item')
arr.pop()//remove o ultimo item
arr.join()//junta em string o metodo arr
arr.join('_')
arr.reverse() //vai inverter o array, modifica o array
arr.sort()//ordena por ordem alfabética e também modifica o array principal

(function(){
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var person = {
    name: 'Vittoria',
    lastname: 'Borotto',
    age: 20
};
console.log( 'Propriedades de "person":' );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person));

/*
Crie um array vazio chamado `books`.
*/
var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push({name: 'jQuery Mobile', pages: 250});
books.push({name: 'JavaScript de Alto Desempenho', pages: 150});
books.push({name: 'CSS3', pages: 280});
console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
console.log(books);

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
var lastBook = book.pop();
console.log(lastBook);

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
console.log(books);

/*
Converta os objetos que ficaram em `books` para strings.
*/
books = JSON.stringify(books);
//books.toString()
console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
console.log(books);

/*
Converta os livros novamente para objeto.
*/
books = JSON.parse(books);
console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for(var i =0; i< Object.keys(books).length;i++){//percorreo array
    for(prop in books[i]){//percorre o objeto
        console.log(prop + ':' + books[i][prop]);
    }
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['V','I','T','T','O','R','I','A'];
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(myName.join(''));

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log(myName.reverse().join('')).

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log(myName.sort());
})();