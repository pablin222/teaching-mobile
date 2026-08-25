/**
 * F04 — Matrizes
 * Edite somente os TODOs deste arquivo.
 * Verificação: npm run check
 */
import { TODO } from "../lib/todo";

export function criarMatrizExemplo(): number[][] {
  return [
    [8, 9],
    [7, 8],
    [9, 10],
  ];
}

export function obterNota(matriz: number[][], linha: number, coluna: number): number {
  return matriz[linha][coluna];
}

export function obterLinha(matriz: number[][], linha: number): number[] {
  return matriz[linha];
}

export function alterarCelula(
  matriz: number[][],
  linha: number,
  coluna: number,
  novaNota: number,
): number[][] {
  matriz[linha][coluna] = novaNota;
  return matriz;
}

export function dimensoes(matriz: number[][]): [number, number] {
  return [matriz.length, matriz[0]?.length ?? 0];
}
