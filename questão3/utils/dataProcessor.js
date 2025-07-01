"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processarDados = processarDados;
function processarDados(dados) {
    import { DadosBase, DadosUsuario, DadosProduto, UsuarioCompleto, ItemPedido } from "../types/dados";
    dados.forEach(function (item, index) {
        console.log("\nProcessando item [".concat(index, "]:"));
        if (item && typeof item.nome === 'string' && typeof item.email === 'string') {
            var usuario = item;
            console.log("  ID: ".concat(usuario.id));
            console.log("  Nome: ".concat(usuario.nome));
            console.log("  Email: ".concat(usuario.email));
        }
        else if (item && typeof item.produtoId && 'string' && typeof item.valor && 'number') {
            var produto = item;
            console.log(" ID: ".concat(dados_1.ItemPedido.produtoId));
            console.log("pre\u00E7o: ".concat(dados_1.ItemPedido.valor));
        }
        else {
            console.log("Item com estrutura desconhecida:");
            console.log(item);
        }
    });
}
