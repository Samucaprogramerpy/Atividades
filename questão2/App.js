"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CatalogoGen_rico_1 = require("./models/CatalogoGen\u00E9rico");
var celular = {
    marca: "Samsung",
    id: 630,
    nome: "Samsung A55",
    preco: 1500.00
};
var Tablet = {
    marca: "Motorola",
    id: 315,
    nome: "Tablet Moto G 315",
    preco: 654
};
var Tenis = {
    tamanho: 38,
    id: 320,
    nome: "Jordan",
    preco: 255.00
};
var Camisa = {
    tamanho: "G",
    id: 2,
    nome: "Smart tech t-shirt",
    preco: 122.00
};
var catalogoVestuário = new CatalogoGen_rico_1.CatalogoGenerico();
var catalogoEletronico = new CatalogoGen_rico_1.CatalogoGenerico();
catalogoEletronico.adicionarProdutos(celular);
catalogoEletronico.adicionarProdutos(Tablet);
catalogoVestuário.adicionarProdutos(Tenis);
catalogoVestuário.adicionarProdutos(Camisa);
catalogoEletronico.listarProdutos().forEach(function (item) {
    console.log("".concat(item.nome, " (").concat(item.marca, " ").concat(item.preco, ")"));
});
var busca = "Tablet";
var resultadoBusca = catalogoEletronico.buscarPorNome(busca);
if (resultadoBusca.length > 0) {
    console.log("Foram encontrados ".concat(resultadoBusca.length, " eletronicos com o termo ").concat(busca));
    resultadoBusca.forEach(function (produto) {
        console.log("".concat(produto.nome, " (Marca: ").concat(produto.marca, ") preco ").concat(produto.preco));
    });
}
