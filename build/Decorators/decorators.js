"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function LogarClasse(construtor) {
    console.log(construtor);
}
function LogarClasseSe(valor) {
    return valor ? LogarClasse : null;
}
function Decorator(obj) {
    return function (constructor) {
        console.log(obj.a + " " + obj.b);
    }; // Decorator Factory, uma função que retorna de fato um decorator
}
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log("...novo");
    }
};
Eletrodomestico = __decorate([
    LogarObjeto,
    imprimivel
], Eletrodomestico);
function LogarObjeto(construtor) {
    console.log("Carregado");
    return class extends construtor {
        constructor(...args) {
            console.log("Antes...");
            super(...args);
            console.log("Depois...");
        }
    };
}
function imprimivel(construtor) {
    construtor.prototype.iprimir = function () {
        console.log(this);
    };
}
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
// Decorator de método
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        this.saldo -= valor;
        return true;
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    NaoNegativo
], ContaCorrente.prototype, "saldo", void 0);
__decorate([
    Congelar,
    __param(0, paramInfo)
], ContaCorrente.prototype, "sacar", null);
__decorate([
    Congelar // congela a função, tornando-a imutável.
], ContaCorrente.prototype, "getSaldo", null);
const cc = new ContaCorrente(10224.87);
cc.sacar(5000);
console.log(cc.getSaldo());
// Igual ao  Object.freeze()
function Congelar(alvo, nomePropriedade, descritor) {
    console.log(alvo);
    console.log(nomePropriedade);
    descritor.writable = false;
}
//Decorator de Atributo
function NaoNegativo(alvo, nomePropriedade) {
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get: function () {
            return alvo["_" + nomePropriedade];
        },
        set: function (valor) {
            if (valor <= 0) {
                throw new Error("Saldo inválido");
            }
            else {
                alvo["_" + nomePropriedade] = valor;
            }
        },
    });
}
//Decorator de parametro
function paramInfo(alvo, nomeMetodo, indiceParam) {
    console.log(`Alvo: ${alvo}`);
    console.log(`Método: ${nomeMetodo}`);
    console.log(`IndiceParam: ${indiceParam}`);
}
//# sourceMappingURL=decorators.js.map