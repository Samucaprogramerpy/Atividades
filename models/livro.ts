import Publicacao from "./publicacao";

//herdando a classe publicacao e criando a classe livro

export class livro extends Publicacao{
    autor : string;
    anoPublicacao : number;
    estaDisponivel : boolean;
    
    constructor(titulo : string, id :  string, autor : string, anoPublicacao : number, estaDisponivel : boolean){
        super(titulo, id);
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.estaDisponivel = estaDisponivel;
    }

    //verificando se o livro foi emprestado ou devolvido
    emprestar () : boolean {
        if (this.estaDisponivel === true) {
            this.estaDisponivel = false
            return true
        } else{
            return false
        }
    }

    delvolver() : boolean {
        if (this.estaDisponivel === false) {
            this.estaDisponivel = true
            return true
        }else{
            return false
        }
    }
}