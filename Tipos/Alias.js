"use strict";
var VerificarAtraso = {
    Servidores: [],
    BaterPonto: function (ponto) {
        return ponto > 8 ? 'Atrasado' : 'Dentro do horário';
    },
};
var VerificarAlmoco = {
    Servidores: ['Ana', 'Paulo'],
    BaterPonto: function (horario) {
        return horario == 12 ? 'Dentro do horário' : 'Fora do horário';
    },
};
