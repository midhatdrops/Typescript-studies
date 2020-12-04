type Funcionario = {
  Servidores: string[];
  BaterPonto: (horario: number) => string;
}; //cria um tipo personalizado

let VerificarAtraso: Funcionario = {
  Servidores: [],
  BaterPonto: function (ponto: number): string {
    return ponto > 8 ? 'Atrasado' : 'Dentro do horário';
  },
};

let VerificarAlmoco: Funcionario = {
  Servidores: ['Ana', 'Paulo'],
  BaterPonto: (horario: number): string => {
    return horario == 12 ? 'Dentro do horário' : 'Fora do horário';
  },
};
