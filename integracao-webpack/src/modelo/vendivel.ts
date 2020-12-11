export default interface vendivel {
  nome: string;
  preco: number;
  desconto: number;
  precoComDesconto(): number;
}
