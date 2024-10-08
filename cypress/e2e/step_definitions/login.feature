Feature: Login

Scenario: Invalid login
Given que estou na tela de login
When preencher os campos username e password com dados invalidos
Then acesso invalido

Scenario: Valid login
Given que estou na tela de login
When preencher os campos username e password com dados validos
Then acesso valido