<h1 align="center">Projeto Testes automatizados Web utilizando a ferramente Cypress com auxilio do Cucumber</h1>

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

## Descrição do Projeto

<p align="center">Este projeto tem como objeitvo a construção de testes automatizados para um sistema Web. Vamos utilizar como referência para elaboração dos testes o site [!OrangeHRM](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login), ele é uma plataforma pública onde podemos navegar pelas diferentes funcionalidades e visualizar as requisições feitas durante as ações. 

Para a implementação dos testes, vamos utilizar a ferramenta Cypress, que é amplamente reconhecida por sua eficácia em automação de testes web, que nos permitirá interagir com elementos da página de forma intuitiva e realizar testes de ponta a ponta. Além disso, o Cypress nos possibilita realizar requisições HTTP diretamente, permitindo que validemos as respostas das nossas APIs e garantemos a integridade dos dados trocados entre o front-end e o back-end.

Outro ponto importante para nosso projeto, é que vamos empregar a metodologia do Cucumber e a linguagem Gherkin para a escrita e elaboração dos cenários de teste. Isso nos permitirá descrever os comportamentos esperados da aplicação de forma clara e compreensível, utilizando uma sintaxe que facilita a colaboração entre desenvolvedores, testadores e partes interessadas.

Para garantir uma organização e manutenção eficazes do código, adotaremos o padrão de design Page Objects na construção das classes de teste. Esse padrão ajuda a desacoplar a lógica dos testes da estrutura das páginas, promovendo uma arquitetura mais limpa e escalável. Assim, poderemos reutilizar componentes de forma eficiente, tornando o processo de teste mais ágil e compreensível.

Ao final, esperamos que este projeto não só melhore a qualidade do sistema testado, mas também sirva como um exemplo prático de como implementar uma suite de testes automatizados utilizando as melhores práticas da indústria.</p>

## Funcionalidades do projeto 

- [x] Login
- [ ] Recuperar Senha

## Pré-requesitos

Antes de começar, você vai precisar ter instalado em sua máquina o [Cypress](https://www.cypress.io/).
        
### Instruções de instalação

```bash
#Instalar o Cypress
$ npm install cypress --save-dev

#Instalar o Cucumber pré-processor
$ npm install cypress-cucumber-preprocessor --save-dev
```

### Como rodar os testes

```bash
#Rodar os testes
$ npx cypress run
```

## Autor 

<img style="clip-path: circle(50%);" src="" width="100px;" alt=""/>
<br />
<sub><b>Eduardo Lopes</b></sub>
<br />
<a href="https://www.linkedin.com/in/eduardo-lopes-amaro/">
    <img src="https://img.shields.io/badge/-Eduardo-blue?style=flat-square&logo=Linkedin&logoColor=white" alt="Linkedin Badge">
</a>
