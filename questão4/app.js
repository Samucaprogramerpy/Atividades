"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var relatorioVendas_1 = require("./utils/relatorioVendas");
var vendasSimuladas = [
    {
        idVenda: 'VENDA001',
        data: '2023-01-15',
        valorTotal: 150.75,
        clienteId: 'CLI001',
        status: 'concluida'
    },
    {
        idVenda: 'VENDA002',
        data: '2023-01-16',
        valorTotal: 300.00,
        clienteId: 'CLI002',
        status: 'pendente'
    },
];
var teste = (0, relatorioVendas_1.gerarResumoVendas)(vendasSimuladas);
console.log(teste);
var vendaParaAtualizar = vendasSimuladas.find(function (venda) { return venda.idVenda === 'VENDA002'; });
if (vendaParaAtualizar) {
    var vendaAtualizada = (0, relatorioVendas_1.atualizarStatusVenda)(vendaParaAtualizar, { status: 'concluida' });
    console.log("\n--- Venda Original (VENDA002) ---");
    console.log(vendaParaAtualizar);
    console.log("\n--- Venda Atualizada (VENDA002) ---");
    console.log(vendaAtualizada);
}
else {
    console.log("\n--- Venda com ID 'VENDA002' não encontrada. ---");
}
var minhaVenda = {
    idVenda: 'VENDA006',
    data: '2023-02-01',
    valorTotal: 120.00,
    clienteId: 'CLI004',
    status: 'pendente'
};
var vendaSomenteLeitura = minhaVenda;
(0, relatorioVendas_1.registrarVenda)(vendaSomenteLeitura);
var vendaParaClienteExemplo = vendasSimuladas[0];
var vendaFormatadaParaCliente = (0, relatorioVendas_1.prepararVendaParaCliente)(vendaParaClienteExemplo);
console.log(vendaFormatadaParaCliente);
console.log("\n--- Vendas Concluídas ---");
vendasSimuladas.forEach(function (venda) {
    if (venda.status === 'concluida') {
        console.log("ID: ".concat(venda.idVenda, ", Data: ").concat(venda.data, ", Valor: ").concat(venda.valorTotal));
    }
});
