/// <reference types="Cypress" />

import NewPaymentRequestElements from '../elements/newPaymentRequestElements'
const newPaymentRequestElements = new NewPaymentRequestElements

class NewPaymentRequestPage {
    acessar_paymentsRequest() {
        cy.get(':nth-child(4) > .text-white').click()
	    cy.get('.nav-item.show > .dropdown-menu > :nth-child(5) > .nav-link > span').click()
        cy.url().should('include', 'https://qa1-finance.clevercorporate.com/')
    }

    clicar_botaoFinance() {
        cy.origin('https://ads-qa1.clevercorporate.com/', () => {
            cy.get(newPaymentRequestElements.btn_finance).should('be.visible').click()
        })
    }
}

export default NewPaymentRequestPage;