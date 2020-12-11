import React, { Component } from "react";
import ContadorValor from "../ContadorValor";
import LogRender from "../../Decorators/logRender";

interface ContadorProps {
  valorInicial: number;
}

interface ContadorState {
  valor: number;
}

@LogRender
export default class Contador extends Component<ContadorProps, ContadorState> {
  public state = { valor: this.props.valorInicial || 0 };
  private SetValor = (delta: number) => {
    this.setState({
      valor: this.state.valor + delta,
    });
  };
  render() {
    return (
      <div>
        <ContadorValor contador={this.state.valor} />
        <button onClick={() => this.SetValor(10)}>+</button>
        <button onClick={() => this.SetValor(-10)}>-</button>
      </div>
    );
  }
}
