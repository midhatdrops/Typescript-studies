"use strict";
function echo(object) {
    return object;
}
console.log(echo("João"));
console.log(echo(10));
console.log(echo({ nome: "João", Idade: 15 }));
console.log(echo(true));
//Usando  Generics
function echoMelhorado(object) {
    return object;
}
console.log(echoMelhorado("João").length);
console.log(echoMelhorado(10));
console.log(echoMelhorado({ nome: "João", Idade: 15 }));
console.log(echoMelhorado(true));
// Generics disponíveis
const avaliacoes = [9, 9.5, 10, 8, 6];
avaliacoes.push(8.4);
// avaliacoes.push('5.3')
console.log(avaliacoes);
/* O generic trabalha para criar "moldes" genéricos
e especifcá-los a partir dos usos */
//Array
function imprimir(args) {
    args.forEach((element) => {
        console.log(element);
    });
}
imprimir([1, 2, 3]);
imprimir([4, 5, 6]);
imprimir(["Ana", "Bia", "Carlos"]);
imprimir([{ nome: "paulo", idade: 27 }]);
const ChamarEco = echoMelhorado;
console.log(ChamarEco("Alguma coisa"));
//# sourceMappingURL=generics.js.map