import { Venda } from "./interfaces/Ivendas";
import { gerarResumoVendas, atualizarStatusVenda, registrarVenda, prepararVendaParaCliente } from "./utils/relatorioVendas";

const vendasSimuladas: Venda[] = [
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
]

const teste = gerarResumoVendas(vendasSimuladas);
console.log(teste);
const vendaParaAtualizar = vendasSimuladas.find(venda => venda.idVenda === 'VENDA002');

if (vendaParaAtualizar) {
  const vendaAtualizada = atualizarStatusVenda(vendaParaAtualizar, { status: 'concluida' });

  console.log("\n--- Venda Original (VENDA002) ---");
  console.log(vendaParaAtualizar);

  console.log("\n--- Venda Atualizada (VENDA002) ---");
  console.log(vendaAtualizada);
} else {
  console.log("\n--- Venda com ID 'VENDA002' não encontrada. ---");
}

const minhaVenda: Venda = {
  idVenda: 'VENDA006',
  data: '2023-02-01',
  valorTotal: 120.00,
  clienteId: 'CLI004',
  status: 'pendente'
};

const vendaSomenteLeitura = minhaVenda as Readonly<Venda>;

registrarVenda(vendaSomenteLeitura);


const vendaParaClienteExemplo = vendasSimuladas[0];
const vendaFormatadaParaCliente = prepararVendaParaCliente(vendaParaClienteExemplo);

console.log(vendaFormatadaParaCliente);

console.log("\n--- Vendas Concluídas ---");
vendasSimuladas.forEach(venda => {
  if (venda.status === 'concluida') {
    console.log(`ID: ${venda.idVenda}, Data: ${venda.data}, Valor: ${venda.valorTotal}`);
  }
});

