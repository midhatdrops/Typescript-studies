class Data {
  dia: number;
  mes: number;
  ano: number;
  constructor(dia: number = 1, mes: number = 1, ano: number = 1991) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);

const Casamento = new Data(); // é possível omitir os ()
console.log(Casamento);
Casamento.ano = 2003;
Casamento.dia = 5;
Casamento.mes = 8;
console.log(Casamento);

class DataEsperta {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1990
  ) {}
}

const aniversarioEsperto = new DataEsperta();
console.log(aniversarioEsperto.dia);

//Métodos

class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {}

  public Resumo(): string {
    return `${this.nome} custa ${
      this.preco - this.preco * this.desconto
    }R$ com ${this.desconto * 100}% de desconto.`;
  }
}

const Produto1 = new Produto("Caneta Bic", 2.0);
console.log(Produto1.Resumo());
const Produto2 = new Produto("Notebook Dell", 3000, 0.2);
console.log(Produto2.Resumo());

//Modificadores de acesso

class Carro {
  private VelocidadeAtual: number = 0;
  constructor(
    public marca: string,
    public modelo: string,
    private VelocidadeMaxima: number = 200
  ) {}
  protected AlterarVelocidade(delta: number): number {
    const NovaVelocidade = this.VelocidadeAtual + delta;
    const VelocidadeValida =
      NovaVelocidade >= 0 && NovaVelocidade <= this.VelocidadeMaxima;
    // if(VelocidadeValida) {
    //   this.VelocidadeAtual = NovaVelocidade
    // }
    // else {
    //   this.VelocidadeAtual = delta > 0 ? this.VelocidadeAtual = this.VelocidadeMaxima : this.VelocidadeAtual = 0
    // }

    NovaVelocidade >= 0 && NovaVelocidade <= this.VelocidadeMaxima
      ? (this.VelocidadeAtual = NovaVelocidade)
      : delta > 0
      ? (this.VelocidadeAtual = this.VelocidadeMaxima)
      : (this.VelocidadeAtual = 0);
    return this.VelocidadeAtual;
  }

  public Acelerar() {
    return this.AlterarVelocidade(5);
  }

  public Frear() {
    return this.AlterarVelocidade(-2);
  }
}

const Ford = new Carro("Ford", "ka", 185);
console.log(Ford.Acelerar());

Array(50)
  .fill(0)
  .forEach(() => Ford.Acelerar());

console.log(Ford.Acelerar());

Array(200)
  .fill(0)
  .forEach(() => Ford.Frear());
console.log(Ford.Frear());

// Herança

class Ferrari extends Carro {
  constructor(modelo: string, VelocidadeMaxima: number) {
    super("Ferrari", modelo, VelocidadeMaxima);
    //...
  }
  public Acelerar() {
    return this.AlterarVelocidade(20);
  }

  public Frear() {
    return this.AlterarVelocidade(-15);
  }
}
const F40 = new Ferrari("F40", 324);
console.log(`${F40.marca} : ${F40.modelo}`);

/* Public: Visível a todos e por herança
Private: Visivel apenas dentro da classe
Protected: Visivel dentro da classe e por herança */

//Getter & Setter

class Pessoa {
  private _idade: number = 0;
  get Idade(): number {
    return this._idade;
  }

  set Idade(valor: number) {
    if (this._idade >= 18) {
      this._idade = 18;
    }
  }
}

const Pessoa1 = new Pessoa();
Pessoa1.Idade = 10;
console.log(Pessoa1.Idade);

Pessoa1.Idade = -10;
console.log(Pessoa1.Idade);

//Classe abstrata

abstract class X {
  constructor() {}
  static subtrarir(a: number, b: number) {
    return b - a;
  } // static cria funções que não precisam ser instanciadas para serem invocadas
}

/* classes abstratas são exclusivas do Type e não podem ser instanciadas, porém servem para comportamentos
como herança */

class Matematica extends X {
  constructor() {
    super();
  }
}

console.log(Matematica.subtrarir(2, 5));

//Singletons

class Unico {
  private static instance: Unico = new Unico();
  private constructor() {}
  static getInstance(): Unico {
    return Unico.instance;
  }
  agora() {
    return new Date();
  }
}

//Singletons podem ser definidos como classes que por si só são instanciadas e conseguem manipular suas chamadas a partir dela mesma

// const errado = new Unico //errado
console.log(Unico.getInstance().agora().getTime()); // certo

//Somente Leitura

class Aviao {
  public readonly modelo: string;
  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo;
  }
}

const turboHelice = new Aviao("Tu-114", "PT-ABC");
// turboHelice.modelo = 'Abc' //Atributos de readonly não podem ser alterados
console.log(turboHelice.modelo);
