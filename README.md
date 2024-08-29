# WorkClock

WorkClock é uma aplicação web para gerenciar e monitorar o tempo gasto em diferentes tarefas. O usuário pode adicionar uma tarefa, definir o tempo necessário, iniciar o cronômetro e visualizar um histórico das tarefas realizadas.

## Tecnologias Utilizadas

- **Vite:** Ferramenta de build rápida e eficiente.
- **Styled Components:** Estilização com "CSS in JS", permitindo escrever CSS diretamente na sintaxe do JavaScript.
- **React Hook Form:** Gerenciamento de formulários com suporte à validação.
- **Zod:** Biblioteca de validação e parsing para TypeScript e JavaScript.
- **Immer:** Facilita o trabalho com dados imutáveis.
- **Date-fns:** Manipulação de datas de forma simples e eficiente.
- **Phosphor React:** Pacote de ícones para uso em React.

## Funcionalidades

- **Adicionar Tarefa:** Permite ao usuário definir o nome e o tempo estimado para a tarefa.
- **Iniciar Cronômetro:** Inicia o cronômetro para monitorar o tempo gasto na tarefa.
- **Interromper Cronômetro:** Possibilidade de interromper o cronômetro antes do tempo acabar.
- **Histórico:** Visualização das tarefas realizadas e seus respectivos tempos.

## Instalação

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/workclock.git
   cd workclock
   ```

2. **Instalar dependências:**

   ```bash
   npm install
   ```

3. **Iniciar o projeto:**

   ```bash
   npm run dev
   ```

## Passos para Desenvolvimento

1. **Criação do Projeto:**
   - Iniciado com Vite: `npm create vite@latest`.
   - Remoção dos arquivos desnecessários que vêm junto com o template do Vite.

2. **Estilização:**
   - Adição de `styled-components` para estilização: `npm i styled-components`.
   - Suporte ao TypeScript: `npm i @types/styled-components -D`.

3. **Fonts e Ícones:**
   - Adicionadas fontes do Google e ícones com `phosphor-react`: `npm i phosphor-react`.

4. **Formulários:**
   - Utilização do `React Hook Form` para gerenciamento de formulários: `npm i react-hook-form`.
   - Validação com `Zod` e `@hookform/resolvers`: `npm i zod @hookform/resolvers`.

5. **Manipulação de Datas:**
   - Biblioteca `date-fns` para manipulação de datas: `npm i date-fns`.

6. **Gerenciamento de Estado:**
   - Utilização do padrão `useReducer` para gerenciamento de estado complexo.
   - Implementação de imutabilidade com `Immer`: `npm i immer`.

## Conceitos Abordados

- **Estilização:** Utilização de `styled-components`.
- **Roteamento:** Implementação de rotas com `React Router Dom`.
- **Context API:** Gerenciamento de estados globais utilizando o Context API.
- **Reducers:** Aplicação do hook `useReducer` para gerenciamento de dados complexos.
- **Imutabilidade:** Facilitação com `Immer`.
- **Validações:** Formulários gerenciados e validados com `React Hook Form` e `Zod`.

## Contribuição

Sinta-se à vontade para contribuir com o projeto, abrindo uma _issue_ ou enviando um _pull request_.

## Licença

Este projeto está sob a licença MIT.