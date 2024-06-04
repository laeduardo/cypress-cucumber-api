/// <reference types="Cypress" />

import LoginElements from '../elements/loginElements'
const loginElements = new LoginElements

class LoginPage {
    acessarLogin() {
        // Visitar a página de Login
        cy.visit('/')
    }

    fazerLogin(email, senha) {
        // Preencher o email
        cy.get(loginElements.email).type(email)
        // Preencher o senha
        cy.get(loginElements.password).type(senha)
        // Clicar no botão SignIn
        cy.get(loginElements.btn_signIn).click()
        // Clicar na logo Clever Ads
        cy.get(loginElements.clever_ads).should('be.visible').click()

        // Aguarda até que a próxima página seje carregada
        cy.url().should('include', 'https://ads-qa1.clevercorporate.com/')

        // Extrai o Bearer token do request da solicitação
        cy.intercept('POST', 'https://sso-qa1.clevercorporate.com/oauth2/token/menu').as('getToken')
            .then(() => {
                return cy.wait('@getToken')
            })
            .then(({ request }) => {
                if (request) {
                    const authorizationHeader = JSON.stringify(request.headers['authorization'])
                    
                    const regex = /"Bearer\s+(.*)"/
                    const match = authorizationHeader.match(regex);
                    const bearerToken = match[1].replace(/"| /g, '')

                    // Armazenar o token para uso posterior nos testes
                    cy.wrap(bearerToken).as('bearerToken')
                } else {
                    cy.log("Falha na interceptação do token")
                }
        })
    }

    verificarTelaLogin() {
        cy.get(loginElements.textLogin).should('be.visible')
    }

    verificarAcessoValido() {
        cy.get(loginElements.home).should('be.visible')
    }
}

export default LoginPage;