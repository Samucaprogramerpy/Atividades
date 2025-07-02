"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var relatorioVendas_1 = require("./utils/relatorioVendas");
// Importando a função padrão formatarNome (com alias 'formatarMeuNome')
var formatadores_1 = require("./utils/formatadores");
// Importando a função nomeada contarVogais
var stringUtils_1 = require("./utils/stringUtils");
var numeros_1 = require("./utils/numeros");
var vendasSimuladas = [
    { idVenda: 'VENDA001', data: '2023-01-15', valorTotal: 150.75, clienteId: 'CLI001', status: 'concluida' },
    { idVenda: 'VENDA002', data: '2023-01-16', valorTotal: 300.00, clienteId: 'CLI002', status: 'pendente' },
    { idVenda: 'VENDA003', data: '2023-01-17', valorTotal: 50.20, clienteId: 'CLI001', status: 'concluida' },
    { idVenda: 'VENDA004', data: '2023-01-18', valorTotal: 750.50, clienteId: 'CLI003', status: 'cancelada' },
    { idVenda: 'VENDA005', data: '2023-01-19', valorTotal: 220.00, clienteId: 'CLI002', status: 'pendente' },
];
console.log("--- Gerando Resumo de Vendas ---");
var resumo = (0, relatorioVendas_1.gerarResumoVendas)(vendasSimuladas);
console.log(resumo);
console.log("\n--- Atualizando Status de Venda (VENDA002) ---");
var vendaParaAtualizar = vendasSimuladas.find(function (venda) { return venda.idVenda === 'VENDA002'; });
if (vendaParaAtualizar) {
    var vendaAtualizada = (0, relatorioVendas_1.atualizarStatusVenda)(vendaParaAtualizar, { status: 'concluida' });
    console.log(vendaAtualizada);
}
console.log("\n--- Registrando uma Venda (Readonly) ---");
var novaVenda = {
    idVenda: 'VENDA006',
    data: '2023-02-01',
    valorTotal: 120.00,
    clienteId: 'CLI004',
    status: 'pendente'
};
var vendaSomenteLeitura = novaVenda;
(0, relatorioVendas_1.registrarVenda)(vendaSomenteLeitura);
// Tentar modificar vendaSomenteLeitura.status = 'cancelada'; aqui resultaria em erro de compilação.
console.log("\n--- Preparando Venda para Cliente (VENDA001) ---");
var vendaCliente = (0, relatorioVendas_1.prepararVendaParaCliente)(vendasSimuladas[0]);
console.log(vendaCliente);
console.log("\n--- Vendas Concluídas ---");
vendasSimuladas.forEach(function (venda) {
    if (venda.status === 'concluida') {
        console.log("ID: ".concat(venda.idVenda, ", Data: ").concat(venda.data, ", Valor: ").concat(venda.valorTotal));
    }
});
var meuNome = "Bruno da silva";
var nomeFormatado = (0, formatadores_1.default)(meuNome);
console.log("Nome original: \"".concat(meuNome, "\""));
console.log("Nome formatado: \"".concat(nomeFormatado, "\""));
console.log("\n--- Usando contarVogais ---");
var frase = "Olá mundo, TypeScript é incrível!";
var numVogais = (0, stringUtils_1.contarVogais)(frase);
console.log("Frase: \"".concat(frase, "\""));
console.log("N\u00FAmero de vogais: ".concat(numVogais));
console.log("\n--- Usando OperacoesMatematicas ---");
var numerosParaSomar = [10, 25, 5, 40, 15];
var somaTotal = numeros_1.OperacoesMatematicas.somarArray(numerosParaSomar);
console.log("Array de n\u00FAmeros: [".concat(numerosParaSomar.join(', '), "]"));
console.log("Soma total: ".concat(somaTotal));
var ePar = numeros_1.OperacoesMatematicas.ehPar(somaTotal);
console.log("A soma \u00E9 par? ".concat(ePar));
console.log("\n--- Verificando Soma vs. MAX_VALOR ---");
if (somaTotal > numeros_1.MAX_VALOR) {
    console.log("Soma (".concat(somaTotal, ") excede o valor m\u00E1ximo permitido (").concat(numeros_1.MAX_VALOR, ")."));
}
else {
    console.log("Soma (".concat(somaTotal, ") dentro do limite (").concat(numeros_1.MAX_VALOR, ")."));
}
