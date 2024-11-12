/// <reference types="Cypress" />

import SupplierElements from '../elements/supplierElements'
const supplierElements = new SupplierElements

class SupplierPage {
    acessarListagemSuppliers() {
        cy.get(':nth-child(4) > .text-white').click()
	    cy.get('.nav-item.show > .dropdown-menu > :nth-child(2) > .nav-link > span').click()
        cy.url().should('include', 'https://qa1-finance.clevercorporate.com/')
    }

    clicarBotaoFinance() {
        cy.origin('https://ads-qa1.clevercorporate.com/', () => {
            cy.get(supplierElements.btn_finance).should('be.visible').click()
        })
    }

    clicarBotaoSupplier() {
        cy.origin('https://ads-qa1.clevercorporate.com/', () => {
            cy.get(supplierElements.btn_supplier).should('be.visible').click()
        })
    }
}

export default SupplierPage;