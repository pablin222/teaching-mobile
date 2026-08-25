/**
 * F02 — Array
 * Edite somente os TODOs deste arquivo.
 * Verificação: npm run check
 */
import { TODO } from "../lib/todo";

export function criarAlunos(): string[] {
  return ["Ana", "Bruno", "Carla"];
}

export function obterAluno(alunos: string[], indice: number): string {
  return alunos[indice];
}

export function primeiroAluno(alunos: string[]): string {
  return alunos[0];
}

export function alterarNota(notas: number[], indice: number, novaNota: number): number[] {
  notas[indice] = novaNota;
  return notas;
}

export function quantidadeDeAlunos(alunos: string[]): number {
  return alunos.length;
}

export function adicionarAluno(alunos: string[], nome: string): string[] {
  alunos.push(nome);
  return alunos;
}
