// funções

const myname = 'Bruno';

function ReturnName(): string {
  return myname;
}

console.log(ReturnName());

//Exemplo sem retorno

function HelloWorld(): void {
  console.log('Hello World');
}
HelloWorld();

//Interações com tipagens em funções
// Console.log retorna um void

function Multiplicar(numA: number, numB: number, numC: number): void {
  return console.log(numA * numB * numC);
}
Multiplicar(2, 3, 4);

//Armazenando uma função em uma constante

const Soma = function (numA: number, numB: number): number {
  return numA + numB;
};
console.log(Soma(2, 3));

//tipo função

let subtracao: (numA: number, numB: number) => number; // define a tipagem antes da função

subtracao = (numA: number, numB: number) => numB - numA;

subtracao = function (numA: number, numB: number) {
  return numB - numA;
};

//objetos
let usuario: { nome: string; idade: number } = {
  nome: 'Joao',
  idade: 22,
};

usuario = { nome: 'Bruno', idade: 23 };
usuario = { idade: 31, nome: 'Maria' }; // ordem inversa tbm vale

// usuario = {batata: false} -> Errado

// usuario = {} -> Errado
