export default function formatarNome(nomeCompleto: string): string {
  if (!nomeCompleto) {
    return "";
  }

  const partesDoNome = nomeCompleto.toLowerCase().split(' ');


  if (partesDoNome.length === 1) {
    return partesDoNome[0].toUpperCase();
  }

  let nomeFormatado = partesDoNome[0].toUpperCase();

  for (let i = 1; i < partesDoNome.length; i++) {
    const parte = partesDoNome[i];
    if (parte.length > 0) {
      nomeFormatado += ` ${parte.charAt(0).toUpperCase()}${parte.slice(1)}`;
    }
  }

  return nomeFormatado;
}

export function contarVogais(texto: string): number {
  if (!texto) {
    return 0;
  }

  const vogais = 'aeiouAEIOU';
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    const caractere = texto[i];

    if (vogais.includes(caractere)) {
      contador++;
    }
  }

  return contador;
}