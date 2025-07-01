import {Itemcatalogo} from "../interfaces/IItemCatalogo";

export class CatalogoGenerico<T extends Itemcatalogo> {
    private produtos: T[];

    constructor() {
        this.produtos = []
    }

    public adicionarProdutos(produtos : T) : void {
        this.produtos.push(produtos);
    }

    public listarProdutos() : T[] {
        return this.produtos
    }

    buscarPorNome(nome: string): T[] {
        const resultados: T[] = [];
        const termoBuscaLowerCase = nome.toLowerCase();

        this.produtos.forEach(produto => {
            if (produto.nome.toLowerCase().includes(termoBuscaLowerCase)) {
                resultados.push(produto);
            }
        });

        return resultados;
    }
}

