function echo(object: any) {
  return object;
}

console.log(echo("João"));
console.log(echo(10));
console.log(echo({ nome: "João", Idade: 15 }));
console.log(echo(true));

//Usando  Generics

function echoMelhorado<Type>(object: Type): Type {
  return object;
}

console.log(echoMelhorado<string>("João").length);
console.log(echoMelhorado<number>(10));
console.log(echoMelhorado({ nome: "João", Idade: 15 }));
console.log(echoMelhorado(true));

// Generics disponíveis

const avaliacoes: Array<number> = [9, 9.5, 10, 8, 6];
avaliacoes.push(8.4);
// avaliacoes.push('5.3')
console.log(avaliacoes);

/* O generic trabalha para criar "moldes" genéricos 
e especifcá-los a partir dos usos */

//Array

function imprimir<T>(args: T[]) {
  args.forEach((element) => {
    console.log(element);
  });
}

imprimir([1, 2, 3]);
imprimir<number>([4, 5, 6]);
imprimir<string>(["Ana", "Bia", "Carlos"]);

type Aluno = { nome: string; idade: number };
imprimir<Aluno>([{ nome: "paulo", idade: 27 }]);

//Functions
type Echo = <T>(data: T) => T;
const ChamarEco: Echo = echoMelhorado;
console.log(ChamarEco<string>("Alguma coisa"));

//Class com Generics

abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T) {}
  abstract executar(): R;
}

// console.log(new OperacaoBinaria("Bom ", "dia").executar());
// console.log(new OperacaoBinaria(1, 2).executar());

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2;
  }
}

console.log(new SomaBinaria(2, 3).executar());

class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
  GetTime(data: Data): number {
    let { dia, mes, ano } = data;
    return new Date(`${mes}/${dia}/${ano}`).getTime();
  }
  executar(): string {
    const t1 = this.GetTime(this.operando1);
    const t2 = this.GetTime(this.operando2);
    const diferenca = Math.abs(t1 - t2);
    const dia = 1000 * 60 * 60 * 24;
    return `${Math.ceil(diferenca / dia)} dia(s)`;
  }
}

const d1 = new Data(1, 2, 2000);
const d2 = new Data(5, 2, 2000);
console.log(new DiferencaEntreDatas(d1, d2).executar());

//Desafio Fila

class Fila<A> {
  private Fila: Array<A> = [];
  constructor(...args: A[]) {
    this.Fila = args;
  }
  Entrar(elemento: A) {
    return this.Fila.push(elemento);
  }
  Proximo(): A | null {
    if (this.Fila.length >= 0 && this.Fila[0]) {
      const primeiro = this.Fila[0];
      this.Fila.splice(0, 1);
      return primeiro;
    } else {
      return null;
    }
  }
  Imprimir(): void {
    return console.log(this.Fila);
  }
}

const fila = new Fila<string>("João", "Maria", "José");
fila.Imprimir();
fila.Entrar("Pedro");
console.log(fila.Proximo());
fila.Imprimir();
console.log(fila.Proximo());
fila.Imprimir();

// Constrains

class Fila2<A extends number | string> {
  // o T só pode ser number ou string e seus sub-tipos
  private Fila: Array<A> = [];
  constructor(...args: A[]) {
    this.Fila = args;
  }
  Entrar(elemento: A) {
    return this.Fila.push(elemento);
  }
  Proximo(): A | null {
    if (this.Fila.length >= 0 && this.Fila[0]) {
      const primeiro = this.Fila[0];
      this.Fila.splice(0, 1);
      return primeiro;
    } else {
      return null;
    }
  }
  Imprimir(): void {
    return console.log(this.Fila);
  }
}

//Desafio Mapa
/* Array de Objetos (Chave/Valor) -> itens
Métodos: obter(chave) colocar({chave/valor})
limpar(): Zerar, imprimir() */

type Par<C, V> = { Chave: C; Valor: V };

class Mapa<C, V> {
  itens: Array<Par<C, V>> = new Array<Par<C, V>>();
  obter(Chave: C): Par<C, V> | null {
    const resultado = this.itens.filter((i) => i.Chave === Chave);
    return resultado ? resultado[0] : null;
  }
  colocar(par: Par<C, V>) {
    const encontrado = this.obter(par.Chave);
    if (encontrado) {
      encontrado.Valor = par.Valor;
    } else {
      this.itens.push(par);
    }
  }
  limpar() {
    this.itens = new Array<Par<C, V>>();
  }
  imprimir() {
    console.log(this.itens);
  }
}

const mapa = new Mapa<number, string>();

mapa.colocar({ Chave: 1, Valor: "Pedro" });
mapa.colocar({ Chave: 2, Valor: "Rebeca" });
mapa.colocar({ Chave: 3, Valor: "Maria" });
mapa.colocar({ Chave: 1, Valor: "Gustavo" });

console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
