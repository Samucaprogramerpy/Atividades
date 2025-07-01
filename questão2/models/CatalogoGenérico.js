"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogoGenerico = void 0;
var CatalogoGenerico = /** @class */ (function () {
    function CatalogoGenerico() {
        this.produtos = [];
    }
    CatalogoGenerico.prototype.adicionarProdutos = function (produtos) {
        this.produtos.push(produtos);
    };
    CatalogoGenerico.prototype.listarProdutos = function () {
        return this.produtos;
    };
    CatalogoGenerico.prototype.buscarPorNome = function (nome) {
        var resultados = [];
        var termoBuscaLowerCase = nome.toLowerCase();
        this.produtos.forEach(function (produto) {
            if (produto.nome.toLowerCase().includes(termoBuscaLowerCase)) {
                resultados.push(produto);
            }
        });
        return resultados;
    };
    return CatalogoGenerico;
}());
exports.CatalogoGenerico = CatalogoGenerico;
