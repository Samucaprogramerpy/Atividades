export class OperacoesMatematicas {

  static somarArray(numeros: number[]): number {
    let soma = 0;
    for (const numero of numeros) { // Usando for...of para iterar
      soma += numero;
    }
    return soma;
  }
  static ehPar(numero: number): boolean {
    return numero % 2 === 0;
  }
}

export const MAX_VALOR: number = 1000;