/**
 * F03 — Array, vetor e lista encadeada
 * A infraestrutura do nó já está pronta. Edite somente os TODOs.
 * Verificação: npm run check
 */
import { TODO } from "../lib/todo";

export type No = {
  valor: string;
  proximo: No | null;
};

export function criarNo(valor: string): No {
  return { valor, proximo: null };
}

export function avancar(inicio: No | null, passos: number): No | null {
  let atual = inicio;
  for (let passo = 0; passo < passos && atual !== null; passo += 1) {
    atual = atual.proximo;
  }
  return atual;
}

export function conectar(primeiro: No, segundo: No): No {
  primeiro.proximo = segundo;
  return primeiro;
}

export function formarTrio(primeiro: No, segundo: No, terceiro: No): No {
  primeiro.proximo = segundo;
  segundo.proximo = terceiro;
  return primeiro;
}

export function inserirNoInicio(inicio: No | null, valor: string): No {
  const novo = criarNo(valor);
  novo.proximo = inicio;
  return novo;
}

export function acessoDireto(valores: string[], indice: number): string {
  return valores[indice];
}

export function quartoPorPercurso(inicio: No | null): string | undefined {
  return avancar(inicio, 3)?.valor;
}
