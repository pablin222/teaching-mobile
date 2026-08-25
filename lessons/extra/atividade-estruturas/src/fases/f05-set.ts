/**
 * F05 — Set
 * Edite somente os TODOs deste arquivo.
 * Verificação: npm run check
 */
import { TODO } from "../lib/todo";

export function criarTecnologias(): Set<string> {
  return new Set(["JavaScript", "TypeScript", "React"]);
}

export function adicionarTecnologia(tecnologias: Set<string>, valor: string): Set<string> {
  tecnologias.add(valor);
  return tecnologias;
}

export function quantidadeUnica(tecnologias: Set<string>): number {
  return tecnologias.size;
}

export function semDuplicatas(valores: string[]): Set<string> {
  return new Set(valores);
}
