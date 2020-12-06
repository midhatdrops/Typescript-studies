"use strict";
let funcionario = {
    Servidores: [],
    BaterPonto: function (ponto) {
        return ponto > 8 ? 'Atrasado' : 'Dentro do horário';
    },
};
funcionario.Servidores = ['Ana', 'João', 'Marcelo'];
console.log(funcionario.Servidores);
console.log(funcionario.BaterPonto(2));
console.log(funcionario.BaterPonto(9));
//# sourceMappingURL=Desafio.js.map