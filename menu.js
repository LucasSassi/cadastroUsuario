import { adicionarUsuario } from "./adicionarUsuario.js";
import { listarUsuario } from "./listarUsuario.js";
import { atualizarUsuario } from "./atualizarUsuario.js";
import { removerUsuario } from "./removerUsuario.js";
import PromptSync from "prompt-sync";

export const prompt = PromptSync({ sigint: true });
export let Usuarios = [];

export function exibirMenu() {
    console.log(
      "=========MENU=========\n1-Adicionar Usuario\n2-Listar Usuario\n3-Atualizar Usuarios\n4-Deletar Usuarios\n0-Sair do programa"
    );
  
    console.log("Insira a opção desejada.\n");
    let opcaoMenu = prompt("> ");
    opcaoMenu = parseInt(opcaoMenu, 10);
    switch (opcaoMenu) {
      case 1:
        console.clear()
        adicionarUsuario();
        break;
      case 2:
        listarUsuario();
        break;
      case 3:
        atualizarUsuario();
        break;
      case 4:
        console.clear()
        removerUsuario();
        break;
      case 0:
        console.clear()
        process.exit();
        break;
      default:
        console.clear()
        console.log("Insira uma opção válida!\n");
        exibirMenu();
    }
  }
  
  exibirMenu();