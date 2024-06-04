/// <reference types="Cypress" />

import SupplierElements from '../elements/supplierElements'
const supplierElements = new SupplierElements

class SupplierPage {
    visitHomePage() {
        cy.visit('/')
        //cy.origin('https://ads-qa1.clevercorporate.com/')
    }

    verificarTelaSuppliers() {
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