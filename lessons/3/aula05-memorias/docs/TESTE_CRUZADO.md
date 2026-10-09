# Boss Fight — Teste Cego por Pares

## Regra dos 60 segundos

A dupla visitante usa a interface **sem receber explicação**. A dupla autora não pode apontar onde tocar.

### Visitante

- O que parece acionável?
- O toque produz resposta perceptível?
- Algum estado depende apenas de cor?
- O texto e a hierarquia estão claros?
- Há algo apertado, ambíguo ou difícil de tocar?

**Uma barreira observada:**

> Pendente de teste com uma dupla visitante; não foi inventada uma observação presencial.

### Autores

**Correção escolhida:**

> Tornar o cartão explicitamente acionável para tecnologias assistivas e mostrar mudança visual enquanto ele é pressionado.

**Arquivo/trecho alterado:**

> `components/CartaoMemoria.tsx`, no `Pressable`: `style={({ pressed }) => ...}`, `accessibilityRole`, `accessibilityLabel`, `accessibilityState`, `hitSlop` e `minHeight: 48`.

### Confirmação do visitante

Depois da correção, a tarefa ficou mais clara? `pendente de confirmação presencial`

Comentário curto:

> A validação automatizada passou, mas a confirmação por outra dupla ainda precisa ser realizada.
