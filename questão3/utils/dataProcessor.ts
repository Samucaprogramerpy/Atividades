export function processarDados(dados : any[]) : void {
    import { DadosBase, DadosUsuario, DadosProduto, UsuarioCompleto, ItemPedido } from "../types/dados";
    
    
    dados.forEach((item, index) => {
        console.log(`\nProcessando item [${index}]:`);

        if (item && typeof item.nome === 'string' && typeof item.email ==='string'){
            const usuario = item as UsuarioCompleto;
            console.log(`  ID: ${usuario.id}`);
            console.log(`  Nome: ${usuario.nome}`);
            console.log(`  Email: ${usuario.email}`);
        } 
        else if (item && typeof item.produtoId && 'string' && typeof item.valor && 'number'){
            const produto = item as ItemPedido;
            console.log(` ID: ${ItemPedido.produtoId}`);
            console.log(`preço: ${ItemPedido.valor}`);
        } else{
            console.log( "Item com estrutura desconhecida:");
            console.log(item);
        }

    })

    
}