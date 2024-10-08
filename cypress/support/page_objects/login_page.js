/// <reference types="Cypress" />

import LoginElements from '../elements/login_elements'
const loginElements = new LoginElements

class LoginPage {
    acessarLogin() {
        cy.visit('/')
    }

    fazerLogin(username, password) {
        cy.get(loginElements.username).type(username)
        cy.get(loginElements.password).type(password)
        cy.get(loginElements.btn_login).click()
    }

    verificarLoginValido(){
        cy.get(loginElements.dashboard).should('be.visible')
    }

    verificarLoginInvalido(){
        cy.get(loginElements.invalid_credentials).should('be.visible')
    }
}

export default LoginPage;