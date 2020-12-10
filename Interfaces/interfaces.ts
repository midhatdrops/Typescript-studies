interface Humano {
  nome: string;
  idade?: number;
  saudar(sobrenome: string): void;
  // [prop: string]: any; // atributo dinâmico
}

function SaudarComOla(pessoa: Humano) {
  console.log("Olá " + pessoa.nome);
}

function MudarNome(pessoa: Humano) {
  pessoa.nome = "Joana";
}

const pessoa: Humano = {
  nome: "João",
  saudar(sobrenome: string) {
    console.log(`Olá meu nome é ${this.nome} ${sobrenome}`);
  },
};

SaudarComOla(pessoa);
MudarNome(pessoa);
SaudarComOla(pessoa);
pessoa.saudar("Marinho");
// SaudarComOla({ nome: "Roberto", idade: 22 });

//Usando com classes...

class Cliente implements Humano {
  nome: string = "";
  saudar(sobrenome: string) {
    console.log(`Olá ! Meu nome é ${this.nome} ${sobrenome}`);
  }
}

const NovoCliente = new Cliente();
NovoCliente.nome = "Paulo";
SaudarComOla(NovoCliente);
NovoCliente.saudar("Dalaran");

// Usando em funções...

interface Calculo {
  (x: number, y: number): number;
}

let potencia: Calculo = (x: number, y: number) => {
  // x ** y
  return Array(y)
    .fill(x)
    .reduce((t, a) => t * a);
};
console.log(potencia(2, 3));

// Herança

interface A {
  a(): void;
}

interface B {
  b(): void;
}

interface ABC extends A, B {
  c(): void;
}

class realA implements A {
  a(): void {}
}

class realAB implements A, B {
  a(): void {}
  b(): void {}
}

class realABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

function teste(b: B) {}

teste(new realABC()); // a classe ABC implementa a interface ABC que por sua vez extende a interface B e A

// extendendo objetos

interface Object {
  // mudança no prototype
  log(): void;
}

Object.prototype.log = function () {
  console.log(this.toString());
};

const x = 3;
const y = 4;

x.log();
y.log();
