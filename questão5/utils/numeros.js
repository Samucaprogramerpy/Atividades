"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_VALOR = exports.OperacoesMatematicas = void 0;
var OperacoesMatematicas = /** @class */ (function () {
    function OperacoesMatematicas() {
    }
    OperacoesMatematicas.somarArray = function (numeros) {
        var soma = 0;
        for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) { // Usando for...of para iterar
            var numero = numeros_1[_i];
            soma += numero;
        }
        return soma;
    };
    OperacoesMatematicas.ehPar = function (numero) {
        return numero % 2 === 0;
    };
    return OperacoesMatematicas;
}());
exports.OperacoesMatematicas = OperacoesMatematicas;
exports.MAX_VALOR = 1000;
