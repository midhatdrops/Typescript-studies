// let & const;
let seraQuePode = 'Olá Mundo'; // correto
console.log(seraQuePode);
// var seraQuePode = 'Olá mundo !'; //hoisting

let estaFrio = true;
if (estaFrio) {
  // var acao = 'Coloca o casaco'; // hoisting
  let acao = 'Coloca o casaco'; // escopo de bloco x global
  console.log(acao);
}

const cpf: string = '123.456.009-9';
// cpf = '456.786.453-8' // erro de constante

function revelar() {
  var segredo = 'Segredo';
  console.log(segredo);
}
// console.log(segredo); // var tem escopo de função
