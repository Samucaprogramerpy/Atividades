"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.livro = void 0;
const publicacao_1 = __importDefault(require("./publicacao"));
class livro extends publicacao_1.default {
    constructor(titulo, id, autor, anoPublicacao, estaDisponivel) {
        super(titulo, id);
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.estaDisponivel = estaDisponivel;
    }
    emprestar() {
        if (this.estaDisponivel === true) {
            this.estaDisponivel = false;
            return true;
        }
        else {
            return false;
        }
    }
    delvolver() {
        if (this.estaDisponivel === false) {
            this.estaDisponivel = true;
            return true;
        }
        else {
            return false;
        }
    }
}
exports.livro = livro;
