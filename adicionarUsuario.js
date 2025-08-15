import { exibirMenu, prompt } from "./menu.js";
import { Usuarios } from "./menu.js";

export function adicionarUsuario() {
  console.log("Qual o nome do contato que deseja adicionar?: ");
  let nome = prompt("> ");

  let telefones = [];
  let adicionarMais = true;

  while (adicionarMais) {
    console.log("Qual o telefone do contato? (com DDD, 11 dígitos): ");
    let telefone = prompt("> ");

    if (isNaN(telefone) || telefone.length !== 11) {
      console.log("Número inválido. Digite 11 dígitos numéricos.");
      continue;
    }

    telefones.push(telefone);

    console.log("Deseja adicionar outro telefone? (s/n)");
    let resposta = prompt("> ").toLowerCase();
    if (resposta !== 's') {
      adicionarMais = false;
    }
  }

  let email;
  let emailInvalido = true;
  while (emailInvalido) {
    console.log("Qual o email do contato que deseja adicionar?: ");
    email = prompt("> ");
    const emailExistente = Usuarios.some((usuario) => usuario.email === email);
    if (emailExistente) {
      console.log("Este email já está cadastrado. Por favor, tente novamente.");
    } else {
      emailInvalido = false;
    }
  }

  Usuarios.push({
    id: Date.now(),
    nome,
    telefones,
    email,
  });

  console.clear();
  console.log("===Usuário adicionado com sucesso!!===");
  exibirMenu();
}