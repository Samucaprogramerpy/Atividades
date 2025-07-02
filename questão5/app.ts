// Importando a interface Venda e as funções de relatorioVendas
import { Venda } from './interfaces/IVenda';
import { gerarResumoVendas, atualizarStatusVenda, registrarVenda, prepararVendaParaCliente } from './utils/relatorioVendas';

// Importando a função padrão formatarNome (com alias 'formatarMeuNome')
import formatarMeuNome from './utils/formatadores';

// Importando a função nomeada contarVogais
import { contarVogais } from './utils/stringUtils';

import { OperacoesMatematicas, MAX_VALOR } from './utils/numeros';

const vendasSimuladas: Venda[] = [
  { idVenda: 'VENDA001', data: '2023-01-15', valorTotal: 150.75, clienteId: 'CLI001', status: 'concluida' },
  { idVenda: 'VENDA002', data: '2023-01-16', valorTotal: 300.00, clienteId: 'CLI002', status: 'pendente' },
  { idVenda: 'VENDA003', data: '2023-01-17', valorTotal: 50.20, clienteId: 'CLI001', status: 'concluida' },
  { idVenda: 'VENDA004', data: '2023-01-18', valorTotal: 750.50, clienteId: 'CLI003', status: 'cancelada' },
  { idVenda: 'VENDA005', data: '2023-01-19', valorTotal: 220.00, clienteId: 'CLI002', status: 'pendente' },
];

console.log("--- Gerando Resumo de Vendas ---");
const resumo = gerarResumoVendas(vendasSimuladas);
console.log(resumo);

console.log("\n--- Atualizando Status de Venda (VENDA002) ---");
const vendaParaAtualizar = vendasSimuladas.find(venda => venda.idVenda === 'VENDA002');
if (vendaParaAtualizar) {
  const vendaAtualizada = atualizarStatusVenda(vendaParaAtualizar, { status: 'concluida' });
  console.log(vendaAtualizada);
}

console.log("\n--- Registrando uma Venda (Readonly) ---");
const novaVenda: Venda = {
  idVenda: 'VENDA006',
  data: '2023-02-01',
  valorTotal: 120.00,
  clienteId: 'CLI004',
  status: 'pendente'
};
const vendaSomenteLeitura: Readonly<Venda> = novaVenda;
registrarVenda(vendaSomenteLeitura);
// Tentar modificar vendaSomenteLeitura.status = 'cancelada'; aqui resultaria em erro de compilação.

console.log("\n--- Preparando Venda para Cliente (VENDA001) ---");
const vendaCliente = prepararVendaParaCliente(vendasSimuladas[0]);
console.log(vendaCliente);

console.log("\n--- Vendas Concluídas ---");
vendasSimuladas.forEach(venda => {
  if (venda.status === 'concluida') {
    console.log(`ID: ${venda.idVenda}, Data: ${venda.data}, Valor: ${venda.valorTotal}`);
  }
});

const meuNome = "Bruno da silva";
const nomeFormatado = formatarMeuNome(meuNome);
console.log(`Nome original: "${meuNome}"`);
console.log(`Nome formatado: "${nomeFormatado}"`);

console.log("\n--- Usando contarVogais ---");
const frase = "Olá mundo, TypeScript é incrível!";
const numVogais = contarVogais(frase);
console.log(`Frase: "${frase}"`);
console.log(`Número de vogais: ${numVogais}`);

console.log("\n--- Usando OperacoesMatematicas ---");
const numerosParaSomar = [10, 25, 5, 40, 15];
const somaTotal = OperacoesMatematicas.somarArray(numerosParaSomar);
console.log(`Array de números: [${numerosParaSomar.join(', ')}]`);
console.log(`Soma total: ${somaTotal}`);

const ePar = OperacoesMatematicas.ehPar(somaTotal);
console.log(`A soma é par? ${ePar}`);

console.log("\n--- Verificando Soma vs. MAX_VALOR ---");
if (somaTotal > MAX_VALOR) {
  console.log(`Soma (${somaTotal}) excede o valor máximo permitido (${MAX_VALOR}).`);
} else {
  console.log(`Soma (${somaTotal}) dentro do limite (${MAX_VALOR}).`);
}