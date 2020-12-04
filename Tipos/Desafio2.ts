type contaBancaria = {
  saldo: number;
  depositar: (valor: number) => void;
};

let contaBancaria: contaBancaria = {
  saldo: 3456,
  depositar(valor: number) {
    this.saldo += valor;
  },
};

let correntista: {
  nome: string;
  contaBancaria: contaBancaria;
  contatos: string[];
} = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432'],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
