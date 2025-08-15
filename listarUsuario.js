import { Usuarios, exibirMenu, prompt } from "./menu.js";

export function listarUsuario() {
  console.clear();

  if (Usuarios.length === 0) {
    console.log("===NENHUM USUÁRIO REGISTRADO!===");
    exibirMenu();
  } else {
    console.log("=========USUÁRIOS=========");

    Usuarios.forEach((usuario) => {
      let telefonesFormatados = usuario.telefones.map(telefone =>
        `(${telefone.substring(0, 2)})${telefone.substring(2, 7)}-${telefone.substring(7)}`
      ).join(', ');

      console.log(
        `ID: ${usuario.id}, Nome: ${usuario.nome}, Telefones: ${telefonesFormatados}, Email: ${usuario.email}`
      );
    });

    console.log("Pressione Enter para sair");
    prompt("");
    console.clear();
    exibirMenu();
  }
}