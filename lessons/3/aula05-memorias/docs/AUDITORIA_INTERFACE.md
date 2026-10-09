# M1 — Scanner de Barreiras

**Regra:** durante os primeiros 60 segundos, não altere o código. Use o app.

| # | Barreira observada | Evidência concreta | Quem pode ser prejudicado? | Prioridade |
|---|---|---|---|---|
| 1 | Falta de hierarquia visual no cabeçalho | Antes da edição, título e introdução apareciam como sequência única de textos, sem agrupamento visual. | Pessoas com dificuldade de leitura e usuários em telas pequenas | média |
| 2 | Feedback de toque ausente | O cartão era acionável, mas não havia estilo dependente de `pressed` para confirmar visualmente o toque. | Pessoas com baixa visão ou que precisam de confirmação imediata | alta |
| 3 | Sem nome e papel acessíveis | O `Pressable` não declarava `accessibilityRole` nem `accessibilityLabel` para contextualizar a ação. | Pessoas que usam leitor de tela | alta |
| 4 | Alvo mínimo não explícito | O cartão não declarava `minHeight: 48`, dificultando comprovar o alvo recomendado para toque. | Pessoas com dificuldade motora ou precisão reduzida | média |

## Duas barreiras que vamos corrigir primeiro

1. Feedback e semântica do cartão acionável.
2. Hierarquia do cabeçalho e alvo mínimo de toque.

## Perguntas de apoio

- O que parece acionável?
- O toque dá uma resposta perceptível?
- Algum estado importante depende só de cor?
- O conteúdo está apertado ou sem hierarquia?
- A ação teria um nome compreensível para um leitor de tela?
- O alvo de toque parece pequeno?
