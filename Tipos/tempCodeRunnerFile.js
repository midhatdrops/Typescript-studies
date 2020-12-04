"use strict";
function falha(msg) {
    // while(true) {
    // }
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: 16.0,
    ValidarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa de um valor maior que zero');
        }
        if (this.preco <= 0) {
            falha('Necessita ter um preço');
        }
    },
};
produto.ValidarProduto();
