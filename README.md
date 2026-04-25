# Minha Lista de Tarefas

Este projeto foi criado como parte da atividade de React com Vite.

## O que foi feito

- Criado com `vite` e template `react`.
- Usado o hook `useState` para controlar o estado das tarefas e do campo de entrada.
- Implementado componente `App` para a lista principal.
- Criado componente `TarefaItem` para renderizar cada item e receber `props`.
- Adicionada funcionalidade de remover tarefas.
- Personalizado com CSS simples.

## Como rodar

1. Abra o terminal em `minha-todo`
2. Execute `npm install`
3. Execute `npm run dev`
4. Abra o endereço mostrado no navegador

## Explicação curta

- `JSX` permite escrever HTML dentro do JavaScript de forma declarativa.
- Componentes React são funções que retornam elementos e podem receber `props`.
- `useState` é um hook que guarda estado local dentro do componente e atualiza a interface automaticamente.
- A lista de tarefas é atualizada com `setTarefas` usando cópia do array anterior.
- Ao remover uma tarefa, filtramos o array para criar um novo array sem o item escolhido.

## Publicação

1. Crie um repositório no GitHub e envie o projeto com:
   - `git remote add origin https://github.com/williambritounicap/minha-todo.git`
   - `git push -u origin master`
2. Acesse https://render.com/ e faça login.
3. Clique em "New" → "Web Service" e importe o repositório do GitHub.
4. Use as configurações padrão para um app React/Vite.
5. O site ficará disponível em algo como `https://minha-todo.onrender.com`.

## Links esperados

- Repositório GitHub: `https://github.com/williambritounicap/minha-todo`
- Site OnRender: `https://minha-todo.onrender.com`
