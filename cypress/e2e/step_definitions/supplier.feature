Feature: Criar Supplier

Scenario: Criar um supplier do tipo non-publisher
Given que estou na tela de suppliers
When clico no icone de mais para criar um novo supplier 
And preencho o campo todos os campos 
And clico no botao Send
Then o supplier deve ser criado