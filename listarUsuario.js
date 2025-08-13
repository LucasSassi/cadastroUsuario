import { Usuarios, exibirMenu, prompt } from "./menu.js";

export function listarUsuario() {
  console.clear();

  if (Usuarios.length == 0) {
    console.log("===NENHUM usuario registrado!!===");
    exibirMenu();
  } else {
    console.log("=========USUARIOS=========");

    Usuarios.forEach((usuario) => {
      const telefoneFormatado = `(${usuario.telefone.substring(0, 2)})${usuario.telefone.substring(2, 7)}-${usuario.telefone.substring(7)}`;

      console.log(
        `ID: ${usuario.id}, Nome: ${usuario.nome}, Telefone: ${telefoneFormatado}, Email: ${usuario.email}`
      );
    });

    console.log("Pressione Enter para sair");
    prompt("");
    console.clear();
    exibirMenu();
  }
}