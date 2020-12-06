"use strict";
//string
let nome = 'João';
console.log(nome);
// nome = 28;
//numbers
let idade = 27;
// idade = "Olá!";
idade = 28.5;
//boolean
let verdade = true;
// verdade = "olá"
//tipos explicitos
let minhaidade;
minhaidade = 27;
console.log(typeof minhaidade);
//arrays
let hobbies = ['cozinhar', 'nadar', 'ler'];
console.log(typeof hobbies);
//tuplas
let endereco = ['Avenida nove de julho', 156];
//Enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
})(Cor || (Cor = {}));
let minhacor = Cor.Azul;
console.log(typeof hobbies);
//any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: '2019' };
let valor = 10.5;
function DecimalChange(valor) {
    const string = valor.toString();
    return string.replace('.', ',');
}
console.log(`Minha nota é de ${DecimalChange(valor)} R$`);
//Union Type
let nota = 10;
console.log(`Minha nota é de ${nota}!`);
nota = '26';
console.log(`Minha nota é de ${nota}!`);
//tipo never -> termina em erro ou looping
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: ' José',
    preco: 16.0,
    ValidarProduto() {
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