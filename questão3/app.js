"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dataProcessor_1 = require("./utils/dataProcessor");
var dadosRecebidos = [
    { id: 1, nome: "Alice Silva", email: "alice.s@example.com" },
    { id: 20, valor: 30.00 },
    { id: 3, titulo: "Relatório Mensal", data: "2023-01-15" }
];
(0, dataProcessor_1.processarDados)(dadosRecebidos);
