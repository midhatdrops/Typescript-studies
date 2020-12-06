"use strict";
//string
var nome = 'João';
console.log(nome);
// nome = 28;
//numbers
var idade = 27;
// idade = "Olá!";
idade = 28.5;
//boolean
var verdade = true;
// verdade = "olá"
//tipos explicitos
var minhaidade;
minhaidade = 27;
console.log(typeof minhaidade);
//arrays
var hobbies = ['cozinhar', 'nadar', 'ler'];
console.log(typeof hobbies);
//tuplas
var endereco = ['Avenida nove de julho', 156];
//Enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
})(Cor || (Cor = {}));
var minhacor = Cor.Azul;
console.log(typeof hobbies);
//any
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: '2019' };
var valor = 10.5;
function DecimalChange(valor) {
    var string = valor.toString();
    return string.replace('.', ',');
}
console.log("Minha nota \u00E9 de " + DecimalChange(valor) + " R$");
//Union Type
var nota = 10;
console.log("Minha nota \u00E9 de " + nota + "!");
nota = '26';
console.log("Minha nota \u00E9 de " + nota + "!");
//tipo never -> termina em erro ou looping
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: ' José',
    preco: 16.0,
    ValidarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa de um nome');
        }
        if (this.preco <= 0) {
            falha('Necessita ter um preço');
        }
    },
};
produto.ValidarProduto();
//# sourceMappingURL=Tipo.js.map