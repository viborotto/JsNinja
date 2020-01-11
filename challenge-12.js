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
