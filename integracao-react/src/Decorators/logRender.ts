type Component = {
  new (...args: any[]): {
    render(): any;
  };
};

export default function logRender<C extends Component>(component: C) {
  return class extends component {
    render() {
      console.log("Renderizando o componente..");
      const r: any = super.render();
      console.log("Renderização concluida");
      return r;
    }
  };
}
