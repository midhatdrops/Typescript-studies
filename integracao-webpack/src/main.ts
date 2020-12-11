import s from "jquery";
import Livro from "./modelo/livro";

const livro = new Livro("Harry Potter 1", 30, 0);
// console.log(livro.precoComDesconto());

s("body").append(`<h1>${livro.nome}</h1>`);
s("body").append(`<h2>${livro.precoComDesconto()}</h1>`);
