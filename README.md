# corporate-automation
Repositório destinado a construção de testes automatizados utilizando Cypress para a Clever.

Para inciar a automação no console do Cypress, você deve informar o ambiente e o ator(perfil do usuário):

- environment (QA1, QA2, QA3 e STAGING)
- actor (TeamLeader, Agent, Finance e Operations)

- Exemplo: npx cypress open --env environment=STAGING,actor=Finance 

Para inciar a automação pelo terminal, você deve informar o ambiente e o ator(perfil do usuário):

- Exemplo: npx cypress run --env environment=STAGING,actor=Finance

Caso queira iniciar a automação pelo terminal para cenários específicos, você deve informar o spec que deseja executar:

- Exemplo: npx cypress run --env environment=STAGING,actor=Finance --spec cypress/integration/finance/new_payment.spec.js