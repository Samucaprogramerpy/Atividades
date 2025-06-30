"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const livro_1 = require("./models/livro");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const livro1 = new livro_1.livro("O auto da compadecida", "31", "Joao Rocha", 2001, true);
const livro2 = new livro_1.livro("Diario de Anny Frank", "213", "Annie Frank", 1999, false);
const prompt = (0, prompt_sync_1.default)();
let quest = prompt("Você deseja pedir um livro? Y/N");
if (quest === "Y") {
    let escolha = prompt("Qual livro você deseja escolher? 1 ou 2");
    if (escolha === 1) {
        const emprestimo = livro1.emprestar();
        console.log("Aproveite o seu livro");
    }
    else if (escolha === 2) {
        const emprestimo = livro2.emprestar();
        console.log("Aproveite seu livro");
    }
}
else if (quest === "N") {
    console.log("Ok, até mais");
}
else {
    console.log("Digite um caractere valido");
}
