// console.log("JS no browser! JS externo")
(function (){
    var myObject = {
        myProperty: 1,
        init: function init(){
            return this;//referencia para o objeto
            return this.myProperty;
        }
    };
    console.log(myObject.init());
})();
//pode ser encontrado em funções, podendo ter 2 valores, uma referencia ao objeto global ou
(function (){
    function myFunction(){
        return this;
    }
    console.log('myFunction:',myFunction,myFunction() === window);//quando a funcao nao ta dentro de um objeto vai apontarpara um objeto global , exemplo window
    var myObject = {
        myProperty:1,
        init:function init(){
            return this;
        }
    };
    console.log('myObject', myObject.init(), myObject.init()=== myObject);
})();
//REFERENCIA AO OBJETO INSTANCIADO