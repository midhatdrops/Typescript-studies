"use strict";
// funções
const myname = 'Bruno';
function ReturnName() {
    return myname;
}
console.log(ReturnName());
//Exemplo sem retorno
function HelloWorld() {
    console.log('Hello World');
}
HelloWorld();
//Interações com tipagens em funções
// Console.log retorna um void
function Multiplicar(numA, numB, numC) {
    return console.log(numA * numB * numC);
}
Multiplicar(2, 3, 4);
//Armazenando uma função em uma constante
const Soma = function (numA, numB) {
    return numA + numB;
};
console.log(Soma(2, 3));
//tipo função
let subtracao; // define a tipagem antes da função
subtracao = (numA, numB) => numB - numA;
subtracao = function (numA, numB) {
    return numB - numA;
};
//objetos
let usuario = {
    nome: 'Joao',
    idade: 22,
};
usuario = { nome: 'Bruno', idade: 23 };
usuario = { idade: 31, nome: 'Maria' }; // ordem inversa tbm vale
// usuario = {batata: false} -> Errado
// usuario = {} -> Errado
//# sourceMappingURL=Funcoes.js.map