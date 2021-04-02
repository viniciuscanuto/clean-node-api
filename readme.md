<h1 align="center">
  <strong>Clean Node API</strong>
</h1>

<p align="center">
 <a href="#about">Sobre</a> |
 <a href="#technologies">Tecnologias</a> |
 <a href="#features">Features</a> | 
 <a href="#requirements">Requisitos</a> | 
 <a href="#executable">Execução</a> |
 <a href="#tests">Testes</a> |
 <a href="#license">Licença</a> |
 <a href="#author">Autor</a>
</p>

![Badge](https://img.shields.io/github/license/viniciuscanuto/clean-node-api)

<!--
  Badge tag
  Badge coverage
  Badge travis
  Badge eslint = standard

  badge heroku?

-->

<h2 id="about">Sobre</h2>

<h2 id="technologies">Tecnologias</h2>

<!-- 
node
typescript
jsonwebtoken
git
jest
eslint
docker
heroku

vscode
-->

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
<h2 id="license">Licença</h2>
<br/>
<a href="./license">
<p align="center">📝 License MIT © 2021  Vinícius Canuto</p>
</a>
<br/>
<h2 id="author">Autor</h2>
<br/>

<h3>🕵🏽‍♂️ Vinícius Canuto</h3>
<h4>💼 Desenvolvedor Full Stack</h4>

[![Linkedin Badge](https://img.shields.io/badge/-Vinícius-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vin%C3%ADcius-canuto-749602170/)](https://www.linkedin.com/in/vin%C3%ADcius-canuto-749602170/) 
[![Gmail Badge](https://img.shields.io/badge/-vncscanuto@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:vncscanuto@gmail.com)](mailto:vncscanuto@gmail.com)