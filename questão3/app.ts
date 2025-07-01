import { processarDados } from "./utils/dataProcessor";

const dadosRecebidos : any[] = [
    { id: 1, nome: "Alice Silva", email: "alice.s@example.com" },
    { id: 20, valor: 30.00},
    { id: 3, titulo: "Relatório Mensal", data: "2023-01-15" }
] 

processarDados(dadosRecebidos);