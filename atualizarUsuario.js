import { Usuarios, exibirMenu, prompt } from "./menu.js";

export function atualizarUsuario() {
  console.clear();
  console.log("=========USUARIOS=========");
  Usuarios.forEach((usuario) => {
    const telefoneFormatado = `(${usuario.telefone.substring(0, 2)})${usuario.telefone.substring(2, 7)}-${usuario.telefone.substring(7)}`;

    console.log(
      `ID: ${usuario.id}, Nome: ${usuario.nome}, Telefone: ${telefoneFormatado}, Email: ${usuario.email}`
    );
  });

  console.log("Qual o ID do usuario que deseja atualizar?: ");
  let idSelecionado = prompt("> ");
  idSelecionado = parseInt(idSelecionado);

  const UsuarioParaAtualizar = Usuarios.find(
    (contato) => contato.id === idSelecionado
  );

  if (!UsuarioParaAtualizar) {
    console.clear();
    console.log("Usuario não encontrado. Por favor, digite um ID válido.");
    prompt("Pressione Enter para continuar...");
    atualizarUsuario();
    return;
  }

  console.log(
    `(Atual: ${UsuarioParaAtualizar.nome}) Digite o NOVO nome do usuario (ou deixe em branco): `
  );
  let novoNome = prompt("> ");

  if (novoNome !== "") {
    UsuarioParaAtualizar.nome = novoNome;
  }

  console.log(
    `(Atual: ${UsuarioParaAtualizar.telefone}) Digite o NOVO telefone do usuario (ou deixe em branco): `
  );
  let novoTelefone = prompt("> ");

  if (novoTelefone !== "") {
    if (isNaN(novoTelefone) || novoTelefone.length !== 11) {
      console.clear();
      console.log("Numero invalido! Digite um telefone com 11 digitos.");
      prompt("Pressione Enter para continuar...");
      atualizarUsuario();
      return;
    }
  
    const telefoneExistente = Usuarios.some(
      (usuario) => usuario.id !== UsuarioParaAtualizar.id && usuario.telefone === novoTelefone
    );

    if (telefoneExistente) {
      console.clear();
      console.log(
        "Este numero de telefone ja esta cadastrado. Por favor, tente novamente."
      );
      prompt("Pressione Enter para continuar...");
      atualizarUsuario();
      return;
    }
    UsuarioParaAtualizar.telefone = novoTelefone;
  }

  console.log(
    `(Atual: ${UsuarioParaAtualizar.email}) Digite o NOVO email do usuario (ou deixe em branco): `
  );
  let novoEmail = prompt("> ");

  if (novoEmail !== "") {
    const emailExistente = Usuarios.some(
      (usuario) => usuario.id !== UsuarioParaAtualizar.id && usuario.email === novoEmail
    );
    if (emailExistente) {
      console.clear();
      console.log("Este email ja esta cadastrado. Por favor, tente novamente.");
      prompt("Pressione Enter para continuar...");
      atualizarUsuario();
      return;
    }
    UsuarioParaAtualizar.email = novoEmail;
  }

  console.clear();
  console.log(
    `===usuario: ${UsuarioParaAtualizar.nome}, editado com sucesso!! `
  );
  exibirMenu();
}