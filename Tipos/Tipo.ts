//string

let nome: string = 'João';
console.log(nome);
// nome = 28;

//numbers

let idade: number = 27;
// idade = "Olá!";
idade = 28.5;

//boolean

let verdade: boolean = true;
// verdade = "olá"

//tipos explicitos

let minhaidade: number;
minhaidade = 27;
console.log(typeof minhaidade);

//arrays

let hobbies: string[] = ['cozinhar', 'nadar', 'ler'];
console.log(typeof hobbies);

//tuplas

let endereco: [string, number] = ['Avenida nove de julho', 156];

//Enums

enum Cor {
  Cinza, //0
  Verde, //1
  Azul, // 2
  Laranja,
}
let minhacor: Cor = Cor.Azul;
console.log(typeof hobbies);

//any

let carro: any = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: '2019' };

let valor = 10.5;
function DecimalChange(valor: number): string {
  const string = valor.toString();
  return string.replace('.', ',');
}
console.log(`Minha nota é de ${DecimalChange(valor)} R$`);

//Union Type
let nota: number | string = 10;
console.log(`Minha nota é de ${nota}!`);
nota = '26';
console.log(`Minha nota é de ${nota}!`);

//tipo never -> termina em erro ou looping

function falha(msg: string): never {
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
