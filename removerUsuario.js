import { Usuarios, exibirMenu, prompt } from "./menu.js";

export function removerUsuario() {
  console.log("=========CONTATOS=========");
  Usuarios.forEach((usuario) => {
    let telefonesFormatados = usuario.telefones.map(telefone =>
      `(${telefone.substring(0, 2)})${telefone.substring(2, 7)}-${telefone.substring(7)}`
    ).join(', ');

    console.log(
      `ID: ${usuario.id}, Nome: ${usuario.nome}, Telefones: ${telefonesFormatados}, Email: ${usuario.email}`
    );
  });
  console.log("Qual o ID do usuario que deseja remover?: ");
  let idSelecionado = prompt("> ");
  idSelecionado = parseInt(idSelecionado);

  let indiceParaDeletar = -2;

  for (let i = 0; i < Usuarios.length; i++) {
    if (Usuarios[i].id === idSelecionado) {
      indiceParaDeletar = i;
      break;
    }
  }

  console.clear();

  if (indiceParaDeletar != -2) {
    console.log("===Usuario deletado com sucesso!!===");
    Usuarios.splice(indiceParaDeletar, 1);
    exibirMenu();
  } else {
    console.clear();
    console.log(
      "===Usuario NAO encontrado ou contato NAO valido, tente novamente!!===\n"
    );
    removerUsuario();
  }
}
