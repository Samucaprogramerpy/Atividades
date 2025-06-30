import { livro } from "./models/livro";
import Publicacao from "./models/publicacao";


const livro1 = new livro("O auto da compadecida", "31", "Joao Rocha", 2001, true);
const livro2 = new livro ("Diario de Anny Frank", "213", "Annie Frank", 1999, false);


if (livro1.emprestar()) {
    console.log("Livro emprestado!");
} else{
    console.log("livro disponivel");
}

if (livro1.emprestar()) {
    console.log("Livro emprestado!");
} else{
    console.log("livro disponivel");
}

if (livro1.delvolver()) { 
    console.log("livro devolvido")
} else{
    console.log("Livro não devolvido")
}