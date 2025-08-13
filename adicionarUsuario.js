import { exibirMenu, prompt } from "./menu.js";
import { Usuarios } from "./menu.js";

export function adicionarUsuario() {
  console.log("Qual o nome do contato que deseja adicionar?: ");
  let nome = prompt("> ");

  console.log("Qual o telefone do contato que deseja adicionar? (com DDD): ");
  let telefone = prompt("> ");

  if (isNaN(telefone) || telefone.length != 11) {
    console.clear();
    console.log("Digite um numero valido!!");
    adicionarUsuario();
    return;
  }

  const telefoneExistente = Usuarios.some(
    (usuario) => usuario.telefone === telefone
  );

  if (telefoneExistente) {
    console.clear();
    console.log(
      "Este numero de telefone ja esta cadastrado. Por favor, tente novamente."
    );
    adicionarUsuario();
  }

  console.log("Qual o email do contato que deseja adicionar?: ");
  let email = prompt("> ");

  const emailExistente = Usuarios.some((usuario) => usuario.email === email);
  if (emailExistente) {
    console.clear();
    console.log("Este email ja esta cadastrado. Por favor, tente novamente.");
    adicionarUsuario();
  }

  let id;
  do {
    id = Date.now();
  } while (Usuarios.some((usuario) => usuario.id === id));

  Usuarios.push({
    id,
    nome,
    telefone,
    email,
  });

  console.clear();
  console.log("===Usuario adicionado com sucesso!!===");
  exibirMenu();
}
