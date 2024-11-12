import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import LoginPage from '../../../support/pageobjects/loginPage';
const loginPage = new LoginPage

import SupplierPage from '../../../support/pageobjects/supplierPage';
const supplierPage = new SupplierPage

import NewPaymentRequestPage from '../../../support/pageobjects/newPaymentRequestPage';
const newPaymentRequestPage = new NewPaymentRequestPage

beforeEach(() => {
	cy.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
})

Given(/^que estou na tela de newPaymentRequest$/, () => {
    newPaymentRequestPage.acessar_paymentsRequest()
});

When(/^preencher os campos do formulario$/, () => {
    cy.get('.absolute > .rounded-full').should('be.visible').click()
    cy.get('input[placeholder="Name or Supplier ID"]').click().type('42MATTERS AG')
    cy.contains('42MATTERS AG').wait(2000).should('be.visible').click()
    cy.get('button[id="headlessui-listbox-button-:rp:"]').should('be.visible')
    
});

Then(/^deve criar o PR$/, () => {
	return true;
});
