<<<<<<< HEAD
# trabalhos-ifma
=======
# 📱 Programação para Dispositivos Móveis

Bem-vindo(a) ao repositório da disciplina! 👋

Aqui ficam os **materiais, exemplos e atividades** utilizados durante as aulas de Programação para Dispositivos Móveis.

As atividades são organizadas dentro da pasta `lessons/`:

```text
lessons/
├── 2/
├── 3/
├── 4/
└── extra/
```

À medida que avançarmos na disciplina, **novas pastas e atividades serão adicionadas pelo professor**.

> 🎯 **O objetivo deste guia:** ensinar você a receber automaticamente as novas atividades no seu projeto **sem precisar baixar tudo novamente, copiar pastas manualmente ou perder o que já fez**.

---

# 🧭 Como vai funcionar?

Você terá dois repositórios configurados no Git:

```text
                    📚 REPOSITÓRIO DO PROFESSOR
                    thalesvalente/teaching-mobile
                              │
                              │ upstream
                              ▼
                       💻 SEU COMPUTADOR
                              │
                              │ origin
                              ▼
                       ☁️ SEU GITHUB
```

### 🧑‍🎓 `origin`
É **o seu repositório** no GitHub.

É nele que ficará o trabalho que você desenvolver durante a disciplina.

### 👨‍🏫 `upstream`
É o **repositório oficial da disciplina**, mantido pelo professor.

Ele será usado para receber novas atividades.

Repositório oficial:

```text
https://github.com/thalesvalente/teaching-mobile.git
```

---

# ⚙️ 1. Configuração inicial

> 🔵 **Você precisa fazer esta etapa apenas UMA VEZ.**

Abra seu projeto no **VS Code** e abra o terminal.

Primeiro, veja quais repositórios já estão configurados:

```bash
git remote -v
```

Provavelmente aparecerá apenas o seu repositório:

```text
origin  https://github.com/SEU-USUARIO/teaching-mobile.git
```

Agora vamos cadastrar o repositório do professor como `upstream`:

```bash
git remote add upstream https://github.com/thalesvalente/teaching-mobile.git
```

Confira novamente:

```bash
git remote -v
```

Você deverá encontrar algo parecido com:

```text
origin    https://github.com/SEU-USUARIO/teaching-mobile.git
upstream  https://github.com/thalesvalente/teaching-mobile.git
```

## ✅ Pronto!

Agora seu projeto sabe que:

- 🧑‍🎓 `origin` = **seu GitHub**
- 👨‍🏫 `upstream` = **GitHub do professor**

Você **não precisa repetir essa configuração nas próximas aulas**.

---

# 💾 2. Antes de atualizar: salve seu progresso

Esta é uma regra importante:

> 🛡️ **Antes de buscar uma nova atividade, confira se o trabalho que você já fez está salvo no Git.**

Execute:

```bash
git status
```

Se houver arquivos modificados que você deseja guardar, faça um commit:

```bash
git add .
git commit -m "salva progresso antes de atualizar atividades"
```

Agora seu progresso está registrado no histórico do Git. ✅

> 💡 **Dica:** faça commits pequenos e frequentes. Não espere terminar toda a atividade para salvar seu progresso no Git.

---

# 🔄 3. Como receber uma nova atividade?

Imagine que você já fez a atividade da pasta `2` e o professor acabou de publicar a pasta `3`.

Você **NÃO precisa**:

- ❌ baixar o repositório novamente;
- ❌ baixar ZIP;
- ❌ copiar a pasta `3` manualmente;
- ❌ criar outro projeto;
- ❌ apagar seu projeto atual.

No terminal do seu projeto, execute:

```bash
git fetch upstream
git merge upstream/main
```

O Git buscará as novidades do repositório do professor e incorporará essas novidades ao seu projeto.

Depois, envie a atualização para o **seu GitHub**:

```bash
git push origin main
```

Pronto! 🎉

---

# ⚡ 4. O procedimento de cada nova aula

Depois da configuração inicial, este será nosso ritual. 😄

### 1️⃣ Confira seu projeto

```bash
git status
```

### 2️⃣ Se tiver trabalho ainda não salvo, salve

```bash
git add .
git commit -m "salva progresso"
```

### 3️⃣ Busque as novidades do professor

```bash
git fetch upstream
```

### 4️⃣ Adicione as novidades ao seu projeto

```bash
git merge upstream/main
```

### 5️⃣ Atualize seu próprio GitHub

```bash
git push origin main
```

---

# 🚀 5. Forma rápida

Quando você já estiver confortável com Git e seu trabalho estiver salvo em commits, poderá atualizar usando:

```bash
git pull upstream main
git push origin main
```

O primeiro comando:

```bash
git pull upstream main
```

significa aproximadamente:

> 📥 "Git, busque as novidades do repositório do professor e coloque no meu projeto."

E:

```bash
git push origin main
```

significa:

> 📤 "Git, envie meu projeto atualizado para o meu GitHub."

---

# 🛡️ 6. Vou perder as atividades que já fiz?

**Normalmente, não.**

O Git não simplesmente apaga seu projeto para colocar o projeto do professor no lugar.

Imagine que você já trabalhou aqui:

```text
lessons/
└── 2/
    └── meu-trabalho
```

Enquanto isso, o professor publica:

```text
lessons/
├── 2/
└── 3/
    └── nova-atividade
```

Depois da atualização, seu projeto poderá ficar:

```text
lessons/
├── 2/
│   └── meu-trabalho      👈 continua aqui
│
└── 3/
    └── nova-atividade    👈 chegou do professor
```

✨ **Seu trabalho continua e a nova atividade é adicionada.**

Por isso usamos Git em vez de ficar copiando e substituindo pastas manualmente.

---

# ⚠️ 7. E se aparecer um conflito?

Calma. 😄

Um **conflito** acontece quando você e o professor modificaram partes incompatíveis de um mesmo arquivo e o Git não consegue decidir sozinho qual versão deve permanecer.

Você poderá ver uma mensagem parecida com:

```text
CONFLICT (content): Merge conflict in ...
```

## 🚨 Se isso acontecer:

**Não faça isto:**

- ❌ não apague o projeto;
- ❌ não apague a pasta `.git`;
- ❌ não clone tudo novamente;
- ❌ não substitua arquivos aleatoriamente;
- ❌ não use comandos encontrados na Internet sem entender o que fazem.

Abra o arquivo indicado pelo Git no **VS Code** e analise o conflito.

Se tiver dúvida, **peça orientação ao professor antes de apagar qualquer coisa**.

Depois que o conflito for resolvido:

```bash
git add .
git commit -m "resolve conflito de atualização"
git push origin main
```

---

# 🧠 8. Por que estamos fazendo dessa forma?

Porque este é um dos principais motivos para usarmos **Git**.

Em projetos reais, diferentes desenvolvedores trabalham no mesmo software e precisam:

- 🔄 receber alterações feitas por outras pessoas;
- 💾 preservar o próprio trabalho;
- 🕒 manter histórico das alterações;
- 🤝 integrar diferentes contribuições;
- ☁️ sincronizar código com repositórios remotos.

Portanto, além de facilitar nossas atividades, este processo também faz parte do aprendizado da disciplina. 😉

---

# ✅ 9. Regras de ouro

Para evitar dor de cabeça:

1. 💾 **Faça commits regularmente.**
2. 🔍 Execute `git status` antes de atualizar.
3. 🧑‍🎓 Trabalhe no **seu repositório (`origin`)**.
4. 👨‍🏫 Use o repositório do professor como fonte de atualização (`upstream`).
5. 🔄 Atualize o projeto antes de começar uma nova atividade.
6. 🚫 Não clone novamente o projeto a cada aula.
7. 🚫 Não fique copiando manualmente as novas pastas.
8. 🚫 Nunca apague a pasta `.git`.
9. ⚠️ Se houver conflito, não saia apagando arquivos.
10. 🙋 Se estiver em dúvida, peça ajuda antes de executar comandos destrutivos.

---

# 📝 10. Cola rápida

## 🔵 Fazer apenas UMA VEZ

```bash
git remote add upstream https://github.com/thalesvalente/teaching-mobile.git
```

## 🟢 Antes de cada nova atividade

```bash
git status
git fetch upstream
git merge upstream/main
git push origin main
```

## 🟡 Se houver alterações ainda não salvas

Antes da atualização:

```bash
git add .
git commit -m "salva progresso"
```

Depois:

```bash
git fetch upstream
git merge upstream/main
git push origin main
```

## ⚡ Quando já estiver acostumado

```bash
git pull upstream main
git push origin main
```

---

# 🎓 Onde estão as atividades?

Procure sempre dentro de:

```text
lessons/
```

Cada pasta corresponde a um conjunto de materiais ou atividades disponibilizados durante a disciplina.

---

> 💡 **Lembrete final:** Git não serve apenas para entregar trabalho. Ele registra a evolução do seu código. Faça commits durante o desenvolvimento e use esse histórico a seu favor.

Bom código! 🚀📱
>>>>>>> upstream/main
