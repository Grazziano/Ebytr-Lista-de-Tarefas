# Ebytr Lista de Tarefas

## Front End

![ReactJS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![RTL](https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red)
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)

## Back End

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Mocha](https://img.shields.io/badge/mocha.js-323330?style=for-the-badge&logo=mocha&logoColor=Brown)
![Chai](https://img.shields.io/badge/chai.js-323330?style=for-the-badge&logo=chai&logoColor=red)
![Sinon](https://img.shields.io/badge/sinon.js-323330?style=for-the-badge&logo=sinon)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

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
  - [X] Esta lista deve ser ordenável por ordem alfabética, data de criação ou por status
- [X] Inserir uma nova tarefa na lista;
- [X] Remover uma tarefa da lista;
- [X] Atualizar uma tarefa da lista;
- [X] A tarefa deve possuir um status editável: pendente, em andamento ou pronto;

## 🚀 Instalando Ebytr Lista de Tarefas

Para instalar o Ebytr Lista de Tarefas, siga estas etapas:

<details>
  <summary><b>Clonar</b></summary><br>

Para clonar o repositório usando HTTPS:

```
git clone https://github.com/Grazziano/Ebytr-Lista-de-Tarefas.git
```

Para clonar usando SSH:

```
git clone git@github.com:Grazziano/Ebytr-Lista-de-Tarefas.git
```
</details>

<br>

<details>
  <summary><b>Backend</b></summary><br>

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
</details>

<br>

<details>
  <summary><b>Frontend</b></summary><br>

Instale as dependencias:

```
npm install
```

Inicie o projeto:

```
npm start
```
</details>


<!-- ## ☕ Usando <nome_do_projeto>

Para usar <nome_do_projeto>, siga estas etapas:

```
<exemplo_de_uso>
```

Adicione comandos de execução e exemplos que você acha que os usuários acharão úteis. Fornece uma referência de opções para pontos de bônus!

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request). -->

<!-- ## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes. -->

## Paradigmas

- Arquitetura em Camadas
- REST
- SOLID

## Outras bibliotecas

- Express-Async-Errors
- Prettier

## Como usar a API

<details>
  <summary><b>Endpoints API</b></summary><br>

## Criar tarefas

Para criar uma nova tarefa deve ser feita uma requisição do tipo POST. Exemplo de dado correto:

![criar tarefa](readmeFiles/create_task.png)

Resposta esperada:

![resposta](readmeFiles/create_task_response.png)


## Listar tarefas

Para listar as tarefas a requisição será do tipo GET. Exemplo de requisição:

![listar tarefa](readmeFiles/list_tasks.png)

O retorno será um array, se não houver dados no banco o o retorno será um array vazio.

Exemplo de resposta esperada:

![resposta](readmeFiles/list_tasks_response.png)

## Excluir tarefas

Para excluir um tarefa a api espera um parametro <strong>task_id</strong> em uma requisição DELETE, conforme o exemplo abaixo:

![Exemplo de exclusão](readmeFiles/remove_task.png)

Exemplo de resposta:

![Resposta de exclusão](readmeFiles/remove_task_response.png)

## Editar tarefas

Para editar uma tarefa deve ser passado no body dois parametros (task_id e name) e a requisição é do tipo PUT, conforme no exemplo abaixo:

![Exemplo de update](readmeFiles/update_task.png)

Exemplo de retorno experado:

![Retorno update](readmeFiles/update_task_response.png)

## Editar o status

Para editar o status de uma tarefa a api espera que seja passado no body dois parametros (task_id e status).O status esperado deve ser pendente, em andamento ou pronto, e a requisição é do tipo PUT, conforme exemplo:

![Exemplo de atualização de status](readmeFiles/edit_status.png)

O retorno esperado será:

![Resposta atualização de status](readmeFiles/edit_status_response.png)

</details>

## Interface do Projeto

![Project](readmeFiles/TODOLIST.gif)

<br>

[⬆ Voltar ao topo](#ebytr-lista-de-tarefas)<br>
