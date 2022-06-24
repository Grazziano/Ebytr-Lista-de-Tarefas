# Ebytr Lista de Tarefas

## Front End

![ReactJS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![RTL](https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red)
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)

## Back End

![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Mocha](https://img.shields.io/badge/mocha.js-323330?style=for-the-badge&logo=mocha&logoColor=Brown)
![Chai](https://img.shields.io/badge/chai.js-323330?style=for-the-badge&logo=chai&logoColor=red)
![Sinon](https://img.shields.io/badge/sinon.js-323330?style=for-the-badge&logo=sinon)

## Banco de Dados

![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)

## Contexto:

A empresa Ebytr está passando por problemas de produtividade/controle porque as pessoas colaboradoras vêm tendo dificuldade na organização de suas tarefas individuais. Por esse motivo, a diretora de produto Carolina Bigonha decidiu implantar uma nova forma de organizar as tarefas.
Você foi a pessoa contratada para desenvolver um sistema capaz de auxiliar as pessoas colaboradoras a se organizar e ter mais produtividade.

### Requisitos técnicos:

- Front-End em React;

- Back-End em NodeJS, com MySQL;

- Arquitetura em camadas;

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

#### Funcionalidades

- [X] Visualizar a lista de tarefas
  - [ ] Esta lista deve ser ordenável por ordem alfabética, data de criação ou por status
- [X] Inserir uma nova tarefa na lista;
- [X] Remover uma tarefa da lista;
- [X] Atualizar uma tarefa da lista;
- [X] A tarefa deve possuir um status editável: pendente, em andamento ou pronto;

## 🚀 Instalando Ebytr Lista de Tarefas

Para instalar o Ebytr Lista de Tarefas, siga estas etapas:

Para clonar o repositório usando HTTPS:

```
git clone https://github.com/Grazziano/Ebytr-Lista-de-Tarefas.git
```

Para clonar usando SSH:

```
git clone git@github.com:Grazziano/Ebytr-Lista-de-Tarefas.git
```

### Backend

Entre na pasta do projeto:

```
cd Ebytr-Lista-de-Tarefas/backend/
```

Instale as dependências do projeto com yarn:

```
yarn
```

Renomeie o arquivo .env.example para .env:

Crie o banco de dados MySQL:

Coloque as informações referentes ao seu banco de dados na variável de ambiente DATABASE_URL conforme o modelo:

```
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
```

Caso prefira usar Postgres:

```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

Rode as migrations:

```
yarn prisma migrate dev
```

Inicie o projeto:

```
yarn dev
```

### Frontend

Instale as dependencias:

```
npm install
```

Inicie o projeto:

```
npm start
```

<!-- ## ☕ Usando <nome_do_projeto>

Para usar <nome_do_projeto>, siga estas etapas:

```
<exemplo_de_uso>
```

Adicione comandos de execução e exemplos que você acha que os usuários acharão úteis. Fornece uma referência de opções para pontos de bônus!

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request). -->

<!-- ## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes. -->

[⬆ Voltar ao topo](#ebytr-lista-de-tarefas)<br>
