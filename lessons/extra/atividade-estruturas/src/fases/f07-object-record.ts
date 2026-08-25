/**
 * F07 — Object e Record
 * Edite somente os TODOs deste arquivo.
 * Verificação: npm run check
 */
import { TODO } from "../lib/todo";

export type Aluno = {
  nome: string;
  idade: number;
  entregouAtividade: boolean;
};

export function criarAluno(nome: string, idade: number, entregouAtividade: boolean): Aluno {
  return { nome, idade, entregouAtividade };
}

export function nomeDoAluno(aluno: Aluno): string {
  return aluno.nome;
}

export function criarRegistroNotas(
  nome1: string,
  nota1: number,
  nome2: string,
  nota2: number,
): Record<string, number> {
  return {
    [nome1]: nota1,
    [nome2]: nota2,
  };
}

export function consultarRegistro(
  registro: Record<string, number>,
  nome: string,
): number | undefined {
  return registro[nome];
}
