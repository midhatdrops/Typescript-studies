function LogarClasse(construtor: Function) {
  console.log(construtor);
}

function LogarClasseSe(valor: boolean) {
  return valor ? LogarClasse : null;
}

function Decorator(obj: { a: string; b: number }) {
  return function (constructor: Function): void {
    console.log(obj.a + " " + obj.b);
  }; // Decorator Factory, uma função que retorna de fato um decorator
}

// @LogarClasse
// @LogarClasseSe(true)
// @Decorator({ a: "Ana", b: 123 })

interface Eletrodomestico {
  imprimir?(): void;
}
@LogarObjeto
@imprimivel
class Eletrodomestico {
  constructor() {
    console.log("...novo");
  }
}

type Constructor = { new (...args: any[]): {} };

function LogarObjeto(construtor: Constructor) {
  console.log("Carregado");
  return class extends construtor {
    constructor(...args: any[]) {
      console.log("Antes...");
      super(...args);
      console.log("Depois...");
    }
  };
}

function imprimivel(construtor: Function) {
  construtor.prototype.iprimir = function () {
    console.log(this);
  };
}

const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();

// Decorator de método

class ContaCorrente {
  @NaoNegativo
  private saldo: number;
  constructor(saldo: number) {
    this.saldo = saldo;
  }
  @Congelar
  sacar(@paramInfo valor: number) {
    this.saldo -= valor;
    return true;
  }
  @Congelar // congela a função, tornando-a imutável.
  getSaldo() {
    return this.saldo;
  }
}

const cc = new ContaCorrente(10224.87);
cc.sacar(5000);
console.log(cc.getSaldo());

// Igual ao  Object.freeze()
function Congelar(
  alvo: any,
  nomePropriedade: string,
  descritor: PropertyDescriptor
) {
  console.log(alvo);
  console.log(nomePropriedade);
  descritor.writable = false;
}

//Decorator de Atributo

function NaoNegativo(alvo: any, nomePropriedade: string) {
  delete alvo[nomePropriedade];
  Object.defineProperty(alvo, nomePropriedade, {
    get: function (): any {
      return alvo["_" + nomePropriedade];
    },
    set: function (valor: any): void {
      if (valor <= 0) {
        throw new Error("Saldo inválido");
      } else {
        alvo["_" + nomePropriedade] = valor;
      }
    },
  });
}

//Decorator de parametro

function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {
  console.log(`Alvo: ${alvo}`);
  console.log(`Método: ${nomeMetodo}`);
  console.log(`IndiceParam: ${indiceParam}`);
}
