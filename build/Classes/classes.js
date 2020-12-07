"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1991) {
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
    constructor(dia = 1, mes = 1, ano = 1990) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta();
console.log(aniversarioEsperto.dia);
//Métodos
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    Resumo() {
        return `${this.nome} custa ${this.preco - this.preco * this.desconto}R$ com ${this.desconto * 100}% de desconto.`;
    }
}
const Produto1 = new Produto("Caneta Bic", 2.0);
console.log(Produto1.Resumo());
const Produto2 = new Produto("Notebook Dell", 3000, 0.2);
console.log(Produto2.Resumo());
//Modificadores de acesso
class Carro {
    constructor(marca, modelo, VelocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.VelocidadeMaxima = VelocidadeMaxima;
        this.VelocidadeAtual = 0;
    }
    AlterarVelocidade(delta) {
        const NovaVelocidade = this.VelocidadeAtual + delta;
        const VelocidadeValida = NovaVelocidade >= 0 && NovaVelocidade <= this.VelocidadeMaxima;
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
    Acelerar() {
        return this.AlterarVelocidade(5);
    }
    Frear() {
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
    constructor(modelo, VelocidadeMaxima) {
        super("Ferrari", modelo, VelocidadeMaxima);
        //...
    }
    Acelerar() {
        return this.AlterarVelocidade(20);
    }
    Frear() {
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
    constructor() {
        this._idade = 0;
    }
    get Idade() {
        return this._idade;
    }
    set Idade(valor) {
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
class X {
    constructor() { }
    static subtrarir(a, b) {
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
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date();
    }
}
Unico.instance = new Unico();
//Singletons podem ser definidos como classes que por si só são instanciadas e conseguem manipular suas chamadas a partir dela mesma
// const errado = new Unico //errado
console.log(Unico.getInstance().agora().getTime()); // certo
//Somente Leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao("Tu-114", "PT-ABC");
// turboHelice.modelo = 'Abc' //Atributos de readonly não podem ser alterados
console.log(turboHelice.modelo);
//# sourceMappingURL=classes.js.map