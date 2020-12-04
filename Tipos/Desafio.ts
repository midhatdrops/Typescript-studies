let funcionario: {
  Servidores: string[];
  BaterPonto: (ponto: number) => string;
} = {
  Servidores: [],
  BaterPonto: function (ponto: number): string {
    return ponto > 8 ? 'Atrasado' : 'Dentro do horário';
  },
};
funcionario.Servidores = ['Ana', 'João', 'Marcelo'];

console.log(funcionario.Servidores);
console.log(funcionario.BaterPonto(2));
console.log(funcionario.BaterPonto(9));
