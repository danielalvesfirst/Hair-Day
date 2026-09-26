# Hair Day

<p align="center">
  <img src="./src/assets/logo.svg" alt="Hair Day logo" width="180">
</p>

<p align="center">
  A web application for scheduling hair salon appointments.
</p>

---

## 🇺🇸 English / 🇬🇧 English

### About

**Hair Day** is a web application for managing hair salon appointments.

Users can select a date, choose an available time, enter the customer's name, and create an appointment. Existing appointments are loaded and displayed according to the selected date, and appointments can also be cancelled.

The project uses a local JSON Server as a REST API, allowing the front-end to communicate with a simulated backend through HTTP requests.

### Features

* 📅 Select an appointment date
* 🕐 Display available time slots
* 👤 Enter the customer's name
* ➕ Create new appointments
* 📋 Load appointments for a specific day
* ❌ Cancel appointments
* 🚫 Prevent selection of unavailable or past time slots
* 🔄 Update the schedule after creating or cancelling appointments
* 📱 Responsive interface

### Technologies

* HTML5
* CSS3
* JavaScript
* Webpack
* Babel
* Day.js
* JSON Server
* REST API
* Fetch API

### API

One of the main goals of this project was to learn how to consume and interact with an API using JavaScript.

The application communicates with a local REST API through the **Fetch API**.

It uses HTTP requests to:

* `GET` appointments for a specific day
* `POST` new appointments
* `DELETE` existing appointments

The API is provided by **JSON Server**, using `server.json` as the local database.

### Project structure

```text
Hair-Day/
├── src/
│   ├── assets/
│   ├── libs/
│   ├── modules/
│   ├── services/
│   │   ├── api-config.js
│   │   ├── schedule-cancel.js
│   │   ├── schedule-fetch-by-day.js
│   │   └── schedule-new.js
│   ├── styles/
│   ├── utils/
│   └── main.js
├── dist/
├── index.html
├── server.json
├── package.json
├── package-lock.json
└── webpack.config.js
```

### Getting started

Clone the repository:

```bash
git clone https://github.com/danielalvesfirst/Hair-Day.git
```

Enter the project directory:

```bash
cd Hair-Day
```

Install the dependencies:

```bash
npm install
```

Start the API server:

```bash
npm run server
```

In another terminal, start the development server:

```bash
npm run dev
```

The application will then be available through the local development server.

### Available scripts

| Command          | Description                           |
| ---------------- | ------------------------------------- |
| `npm run dev`    | Starts the Webpack development server |
| `npm run build`  | Creates a production build            |
| `npm run server` | Starts the local JSON Server API      |

### What I learned

This project was an important step in learning how front-end applications communicate with APIs.

I practiced:

* Making HTTP requests with `fetch()`
* Working with REST API endpoints
* Using `GET`, `POST`, and `DELETE` requests
* Sending JSON data with `JSON.stringify()`
* Handling asynchronous operations with `async/await`
* Handling API errors with `try/catch`
* Organizing API requests into separate service modules
* Working with dates using Day.js
* Managing application state and DOM updates
* Using Webpack and Babel in a JavaScript project

---

## 🇧🇷 Português / 🇵🇹 Português

### Sobre

**Hair Day** é uma aplicação web para gerenciamento de agendamentos de um salão de cabeleireiro.

O usuário pode selecionar uma data, escolher um horário disponível, informar o nome do cliente e criar um agendamento. Os agendamentos existentes são carregados e exibidos de acordo com a data selecionada, e também é possível cancelar agendamentos.

O projeto utiliza o JSON Server como uma API REST local, permitindo que o front-end se comunique com um backend simulado por meio de requisições HTTP.

### Funcionalidades

* 📅 Seleção da data do agendamento
* 🕐 Exibição dos horários disponíveis
* 👤 Cadastro do nome do cliente
* ➕ Criação de novos agendamentos
* 📋 Busca dos agendamentos de uma determinada data
* ❌ Cancelamento de agendamentos
* 🚫 Bloqueio de horários indisponíveis ou já passados
* 🔄 Atualização da agenda após criar ou cancelar agendamentos
* 📱 Interface responsiva

### Tecnologias

* HTML5
* CSS3
* JavaScript
* Webpack
* Babel
* Day.js
* JSON Server
* REST API
* Fetch API

### API

Um dos principais objetivos deste projeto foi aprender a consumir e trabalhar com uma API utilizando JavaScript.

A aplicação se comunica com uma API REST local através da **Fetch API**.

São realizadas requisições HTTP para:

* `GET` os agendamentos de uma determinada data
* `POST` novos agendamentos
* `DELETE` agendamentos existentes

A API é fornecida pelo **JSON Server**, utilizando o arquivo `server.json` como banco de dados local.

### Estrutura do projeto

```text
Hair-Day/
├── src/
│   ├── assets/
│   ├── libs/
│   ├── modules/
│   ├── services/
│   │   ├── api-config.js
│   │   ├── schedule-cancel.js
│   │   ├── schedule-fetch-by-day.js
│   │   └── schedule-new.js
│   ├── styles/
│   ├── utils/
│   └── main.js
├── dist/
├── index.html
├── server.json
├── package.json
├── package-lock.json
└── webpack.config.js
```

### Como executar

Clone o repositório:

```bash
git clone https://github.com/danielalvesfirst/Hair-Day.git
```

Entre na pasta do projeto:

```bash
cd Hair-Day
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor da API:

```bash
npm run server
```

Em outro terminal, inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível através do servidor local de desenvolvimento.

### Scripts disponíveis

| Comando          | Descrição                                       |
| ---------------- | ----------------------------------------------- |
| `npm run dev`    | Inicia o servidor de desenvolvimento do Webpack |
| `npm run build`  | Gera a versão de produção                       |
| `npm run server` | Inicia a API local com JSON Server              |

### O que aprendi

Este projeto foi um passo importante no aprendizado de como aplicações front-end se comunicam com APIs.

Pratiquei:

* Requisições HTTP utilizando `fetch()`
* Comunicação com endpoints de uma REST API
* Requisições `GET`, `POST` e `DELETE`
* Envio de dados JSON com `JSON.stringify()`
* Operações assíncronas com `async/await`
* Tratamento de erros com `try/catch`
* Organização das requisições em módulos de serviço
* Manipulação de datas com Day.js
* Gerenciamento do estado da aplicação e atualização do DOM
* Utilização de Webpack e Babel em um projeto JavaScript
