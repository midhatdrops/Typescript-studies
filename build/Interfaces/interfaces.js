"use strict";
function SaudarComOla(pessoa) {
    console.log("Olá " + pessoa.nome);
}
function MudarNome(pessoa) {
    pessoa.nome = "Joana";
}
const pessoa = {
    nome: "João",
    saudar(sobrenome) {
        console.log(`Olá meu nome é ${this.nome} ${sobrenome}`);
    },
};
SaudarComOla(pessoa);
MudarNome(pessoa);
SaudarComOla(pessoa);
pessoa.saudar("Marinho");
// SaudarComOla({ nome: "Roberto", idade: 22 });
//Usando com classes...
class Cliente {
    constructor() {
        this.nome = "";
    }
    saudar(sobrenome) {
        console.log(`Olá ! Meu nome é ${this.nome} ${sobrenome}`);
    }
}
const NovoCliente = new Cliente();
NovoCliente.nome = "Paulo";
SaudarComOla(NovoCliente);
NovoCliente.saudar("Dalaran");
let potencia = (x, y) => {
    // x ** y
    return Array(y)
        .fill(x)
        .reduce((t, a) => t * a);
};
console.log(potencia(2, 3));
class realA {
    a() { }
}
class realAB {
    a() { }
    b() { }
}
class realABC {
    a() { }
    b() { }
    c() { }
}
function teste(b) { }
teste(new realABC()); // a classe ABC implementa a interface ABC que por sua vez extende a interface B e A
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 3;
const y = 4;
x.log();
y.log();
//# sourceMappingURL=interfaces.js.map