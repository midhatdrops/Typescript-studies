"use strict";
let VerificarAtraso = {
    Servidores: [],
    BaterPonto: function (ponto) {
        return ponto > 8 ? 'Atrasado' : 'Dentro do horário';
    },
};
let VerificarAlmoco = {
    Servidores: ['Ana', 'Paulo'],
    BaterPonto: (horario) => {
        return horario == 12 ? 'Dentro do horário' : 'Fora do horário';
    },
};
//# sourceMappingURL=Alias.js.map