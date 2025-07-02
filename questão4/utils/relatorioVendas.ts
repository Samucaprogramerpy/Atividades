import { Venda } from "../interfaces/Ivendas";

export function gerarResumoVendas(vendas : Venda[]) : Pick < Venda, 'idVenda' | 'valorTotal' | 'status'>[] {
    return vendas.map(venda => ({
        idVenda : venda.idVenda,
        valorTotal : venda.valorTotal,
        status : venda.status
    }));
}

export function atualizarStatusVenda(vendaOriginal: Venda, novoStatus: Partial<Venda>): Venda {
    return { ...vendaOriginal, ...novoStatus};
}

// venda.status = 'cancelada'; // Isso resultaria em um erro de compilação 
export function registrarVenda(venda: Readonly<Venda>): void {
    console.log(`Data: ${venda.data}`);
    console.log(`Valor Total: ${venda.valorTotal}`);
    console.log(`ID do Cliente: ${venda.clienteId}`);
    console.log(`Status: ${venda.status}`);
}

export function prepararVendaParaCliente(venda: Venda): Omit<Venda, 'clienteId' | 'status'> {
    const { clienteId, status, ...vendaParaCliente } = venda;
    return vendaParaCliente;
}