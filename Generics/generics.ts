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
