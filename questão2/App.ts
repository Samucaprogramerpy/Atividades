import { Itemcatalogo } from "./interfaces/IItemCatalogo";
import {Eletronico} from "./interfaces/IEletronicos";
import { Vestuario } from "./interfaces/IVestuário";
import {CatalogoGenerico} from "./models/CatalogoGenérico";

const celular : Eletronico = {
    marca : "Samsung",
    id : 630,
    nome : "Samsung A55",
    preco : 1500.00
}

const Tablet : Eletronico = {
    marca : "Motorola",
    id : 315,
    nome : "Tablet Moto G 315",
    preco : 654
}

const Tenis : Vestuario = {
    tamanho : 38,
    id : 320,
    nome : "Jordan",
    preco : 255.00
}
const Camisa : Vestuario = {
    tamanho : "G",
    id : 0o2,
    nome : "Smart tech t-shirt",
    preco : 122.00

}
const catalogoVestuário = new CatalogoGenerico<Vestuario>();
const catalogoEletronico = new CatalogoGenerico<Eletronico>();
catalogoEletronico.adicionarProdutos(celular);
catalogoEletronico.adicionarProdutos(Tablet);
catalogoVestuário.adicionarProdutos(Tenis);
catalogoVestuário.adicionarProdutos(Camisa);

catalogoEletronico.listarProdutos().forEach(item => {
    console.log(`${item.nome} (${item.marca} ${item.preco})`)
})

const busca = "Tablet";
const resultadoBusca = catalogoEletronico.buscarPorNome(busca)

if (resultadoBusca.length > 0) {
    console.log(`Foram encontrados ${resultadoBusca.length} eletronicos com o termo ${busca}`);
    resultadoBusca.forEach(produto => {
        console.log(`${produto.nome} (Marca: ${produto.marca}) preco ${produto.preco}`)
    })
}
