import Vendivel from "./vendivel";

export default class Livro implements Vendivel {
  constructor(
    public nome: string,
    public readonly preco: number,
    public readonly desconto: number
  ) {}
  precoComDesconto() {
    return this.preco * (1 - this.desconto);
  }
}
