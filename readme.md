<h1 align="center">
  <strong>Clean Node API</strong>
</h1>

<p align="center">
 <a href="#about">Sobre</a> |
 <a href="#features">Features</a> | 
 <a href="#requirements">Requisitos</a> | 
 <a href="#executable">Execução</a> |
 <a href="#tests">Testes</a> |
 <a href="#technologies">Tecnologias</a> |
 <a href="#license">Licença</a> |
 <a href="#author">Autor</a>
</p>

[![Build Status](https://travis-ci.org/viniciuscanuto/clean-node-api.svg?branch=main)](https://travis-ci.org/viniciuscanuto/clean-node-api)
[![Coverage Status](https://coveralls.io/repos/github/viniciuscanuto/clean-node-api/badge.svg?branch=main)](https://coveralls.io/github/viniciuscanuto/clean-node-api?branch=main)
[![MIT License](https://img.shields.io/github/license/viniciuscanuto/clean-node-api)](#license)

<h2 id="about">Sobre</h2>
Clean Node Api é um projeto desenvolvido em Node.js com TypeScript no intuito de realizar enquetes entre programadores. O treinamento é idealizado pelo instrutor Rodrigo Manguinho. Além disso, o curso aborda diversos aspectos teóricos e práticos para uma arquitetura desacoplada, além de um baixo custo de manutenção. Alguns destes são DDD (Domain Drive Design), TDD, Clean Architecture, SOLID principles, Design Patterns, GitFlow, entre outros.  

  * 📚 [Link do Treinamento](https://www.udemy.com/course/tdd-com-mango/)

<h2 id="features">Features</h2>

1. ☑ [Cadastro](./requirements/signup.md)
1. ☑ [Login](./requirements/login.md)
1. ☑ [Criar enquete](./requirements/add-survey.md)
1. ☑ [Listar enquetes](./requirements/load-surveys.md)
1. ☑ [Responder enquete](./requirements/save-survey-result.md)
1. ☑ [Resultado da enquete](./requirements/load-survey-result.md)

<h2 id="requirements">Requisitos</h2>

* Com Docker
  * 📘 Instalar o Docker 🏷 22.10.5

* Sem Docker 
  * 📗 Instalar o Nodejs 🏷 12.16.1
  * 📗 Instalar o MongoDB 🏷 4.4.3

<h2 id="executable">Execução</h2>

* Com Docker
  * ▶ Executar o Container

    ```
    $ npm run up
    ```
  * ⏹ Desligar o Container

    ```
      $ npm run down
    ```
* Sem Docker
  * 🔽 Instalar as dependências

    ```
    $ npm install
    ```
  * 🔁 Compilar 

    ```
    $ npm run build
    ```
  * ▶ Executar o servidor

    ```
    $ npm start
    ```
<h2 id="tests">Testes</h2>

* 🔎 Executar todos os testes

  ```
  $ npm teste
  ```

* 🔎 Executar um teste específico

  ```
  $ npm run [teste-comando]
  ```

<table>
  <tr>
    <th>[teste-comando]</th>
    <th>Descrição</th>
  </tr>
  <tr>
    <td>test:verbose</td>
    <td></td>
  </tr>
  <tr>
    <td>test:unit</td>
    <td>Executa os testes unitários</td>
  </tr>
  <tr>
    <td>test:integration</td>
    <td>Executa os testes de integrações</td>
  </tr>
  <tr>
    <td>test:staged</td>
    <td></td>
  </tr>
  <tr>
    <td>test:ci</td>
    <td>Executa todos os testes com a cobertura do coverage</td>
  </tr>
</table>
<br/>
<h2 id="technologies">Tecnologias</h2>
<br />
<a href="https://nodejs.org/en/">
<img src="./requirements/assets/logo-nodejs.svg" width="60" alt="Node.js" />
</a>
<a href="https://www.typescriptlang.org/">
<img src="./requirements/assets/logo-typescript.svg" width="60" alt="" />
</a>
<a href="https://www.mongodb.com/">
<img src="./requirements/assets/logo-mongodb.svg" width="60" alt="" />
</a>
<a href="https://www.docker.com/">
<img src="./requirements/assets/logo-docker.svg" width="60" alt="" />
</a>
<a href="https://eslint.org/">
<img src="./requirements/assets/logo-eslint.svg" width="60" alt="" />
</a>
<a href="https://jestjs.io/">
<img src="./requirements/assets/logo-jest.svg" width="60" alt="" />
</a>
<a href="https://git-scm.com/">
<img src="./requirements/assets/logo-git.svg" width="60" alt="" />
</a>
<a href="https://www.heroku.com/">
<img src="./requirements/assets/logo-heroku.svg" width="60" alt="" />
</a>
<a href="https://jwt.io/">
<img src="./requirements/assets/logo-jsonwebtoken.svg" width="60" alt="" />
</a>
<a href="https://code.visualstudio.com/">
<img src="./requirements/assets/logo-vscode.svg" width="60" alt="" />
</a>
<br />
<br />
<h2 id="license">Licença</h2>
<br/>
<a href="./license">
<p align="center">📝 License MIT © 2021  Vinícius Canuto</p>
</a>
<br/>
<h2 id="author">Autor</h2>
<br/>

<img style="border-radius: 50%" src="https://github.com/viniciuscanuto.png" height="80" alt="Vinícius Canuto">
<h3>🕵🏽‍♂️ Vinícius Canuto</h3>
<h4>💼 Desenvolvedor Full Stack</h4>

[![Linkedin Badge](https://img.shields.io/badge/-Vinícius-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vin%C3%ADcius-canuto-749602170/)](https://www.linkedin.com/in/vin%C3%ADcius-canuto-749602170/) 
[![Gmail Badge](https://img.shields.io/badge/-vncscanuto@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:vncscanuto@gmail.com)](mailto:vncscanuto@gmail.com)