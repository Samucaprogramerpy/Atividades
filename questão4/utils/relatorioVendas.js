"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerarResumoVendas = gerarResumoVendas;
exports.atualizarStatusVenda = atualizarStatusVenda;
exports.registrarVenda = registrarVenda;
exports.prepararVendaParaCliente = prepararVendaParaCliente;
function gerarResumoVendas(vendas) {
    return vendas.map(function (venda) { return ({
        idVenda: venda.idVenda,
        valorTotal: venda.valorTotal,
        status: venda.status
    }); });
}
function atualizarStatusVenda(vendaOriginal, novoStatus) {
    return __assign(__assign({}, vendaOriginal), novoStatus);
}
// venda.status = 'cancelada'; // Isso resultaria em um erro de compilação 
function registrarVenda(venda) {
    console.log("Data: ".concat(venda.data));
    console.log("Valor Total: ".concat(venda.valorTotal));
    console.log("ID do Cliente: ".concat(venda.clienteId));
    console.log("Status: ".concat(venda.status));
}
function prepararVendaParaCliente(venda) {
    var clienteId = venda.clienteId, status = venda.status, vendaParaCliente = __rest(venda, ["clienteId", "status"]);
    return vendaParaCliente;
}
