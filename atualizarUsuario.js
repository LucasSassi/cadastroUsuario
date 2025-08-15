import { Usuarios, exibirMenu, prompt } from "./menu.js";

export function atualizarUsuario() {
  console.clear();

  if (Usuarios.length === 0) {
    console.log("===NENHUM USUÁRIO REGISTRADO!===");
    exibirMenu();
    return;
  }

  console.log("=========USUÁRIOS=========");
  Usuarios.forEach((usuario) => {
    let telefonesFormatados = usuario.telefones
      .map(
        (telefone) =>
          `(${telefone.substring(0, 2)})${telefone.substring(
            2,
            7
          )}-${telefone.substring(7)}`
      )
      .join(", ");

    console.log(
      `ID: ${usuario.id}, Nome: ${usuario.nome}, Telefones: ${telefonesFormatados}, Email: ${usuario.email}`
    );
  });

  console.log("Qual o ID do usuario que deseja atualizar?: ");
  let idSelecionado = prompt("> ");
  idSelecionado = parseInt(idSelecionado);

  const UsuarioParaAtualizar = Usuarios.find(
    (usuario) => usuario.id === idSelecionado
  );

  if (!UsuarioParaAtualizar) {
    console.clear();
    console.log("ID não encontrado. Por favor, digite um ID válido.");
    prompt("Pressione Enter para continuar...");
    atualizarUsuario();
    return;
  }

  console.log(
    `(Atual: ${UsuarioParaAtualizar.nome}) Digite o NOVO nome do usuario (ou deixe em branco): `
  );
  let novoNome = prompt("> ");
  if (novoNome.trim() !== "") {
    UsuarioParaAtualizar.nome = novoNome.trim();
  }

  let telefoneValido = false;
  while (!telefoneValido) {
    console.log("\nTelefones atuais:");
    UsuarioParaAtualizar.telefones.forEach((tel, telIndex) => {
      console.log(`${telIndex}: ${tel}`);
    });
    console.log(
      "Qual telefone deseja atualizar? Digite o número (ex: '0' ou '1')"
    );
    console.log(
      "'remover' para excluir um, 'novo' para adicionar, ou deixe em branco para pular."
    );
    let opcaoTelefone = prompt("> ").toLowerCase();

    if (opcaoTelefone === "") {
      telefoneValido = true;
    } else if (opcaoTelefone === "novo") {
      let novoTelefone;
      let numeroAdicionarValido = false;
      while (!numeroAdicionarValido) {
        console.log("Digite o novo telefone com 11 digitos: ");
        novoTelefone = prompt("> ");
        if (isNaN(novoTelefone) || novoTelefone.length !== 11) {
          console.log("Numero invalido! Digite um telefone com 11 digitos.");
        } else {
          UsuarioParaAtualizar.telefones.push(novoTelefone);
          console.log("Telefone adicionado com sucesso!");
          numeroAdicionarValido = true;
          telefoneValido = true;
        }
      }
    } else if (opcaoTelefone === "remover") {
      if (UsuarioParaAtualizar.telefones.length <= 1) {
        console.log("Não é possível remover o único telefone do usuário.");
        continue;
      }
      console.log("Digite o número do telefone que deseja remover:");
      let indexRemover = parseInt(prompt("> "));
      if (
        isNaN(indexRemover) ||
        indexRemover < 0 ||
        indexRemover >= UsuarioParaAtualizar.telefones.length
      ) {
        console.log("Opção inválida. Nenhuma alteração feita.");
      } else {
        UsuarioParaAtualizar.telefones.splice(indexRemover, 1);
        console.log("Telefone removido com sucesso!");
        telefoneValido = true;
      }
    } else {
      let indexAtualizar = parseInt(opcaoTelefone);
      if (
        isNaN(indexAtualizar) ||
        indexAtualizar < 0 ||
        indexAtualizar >= UsuarioParaAtualizar.telefones.length
      ) {
        console.log("Opção inválida. Nenhuma alteração feita.");
      } else {
        let novoNumero;
        let numeroAtualizarValido = false;
        while (!numeroAtualizarValido) {
          console.log(
            `(Atual: ${UsuarioParaAtualizar.telefones[indexAtualizar]}) Digite o NOVO numero de telefone: `
          );
          novoNumero = prompt("> ");
          if (isNaN(novoNumero) || novoNumero.length !== 11) {
            console.log("Numero invalido! Digite um telefone com 11 digitos.");
          } else {
            UsuarioParaAtualizar.telefones[indexAtualizar] = novoNumero;
            console.log("Telefone atualizado com sucesso!");
            numeroAtualizarValido = true;
            telefoneValido = true;
          }
        }
      }
    }
  }

  let emailValido = false;
  while (!emailValido) {
    console.log(
      `\n(Atual: ${UsuarioParaAtualizar.email}) Digite o NOVO email do usuario (ou deixe em branco): `
    );
    let novoEmail = prompt("> ");
    if (novoEmail.trim() === "") {
      emailValido = true;
    } else {
      const emailExistente = Usuarios.some(
        (usuario) =>
          usuario.id !== UsuarioParaAtualizar.id && usuario.email === novoEmail
      );
      if (emailExistente) {
        console.log(
          "Este email ja esta cadastrado. Por favor, tente novamente."
        );
      } else {
        UsuarioParaAtualizar.email = novoEmail.trim();
        emailValido = true;
      }
    }
  }

  console.clear();
  console.log(
    `===Usuario '${UsuarioParaAtualizar.nome}' editado com sucesso!! `
  );
  exibirMenu();
}