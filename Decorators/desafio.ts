const usuarioLogado = {
  nome: "Guilherme Filho",
  email: "guigui@gmail.com",
  admin: true,
};

@perfilAdmin
class MudancaAdministrativa<Admin> {
  critico() {
    console.log("Algo crítico foi alterado!");
  }
}

function perfilAdmin<T extends Constructor>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      if (!usuarioLogado || !usuarioLogado.admin) {
        throw new Error("Sem Permissão!");
      }
    }
  };
}

new MudancaAdministrativa().critico();
