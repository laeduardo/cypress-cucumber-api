import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import LoginPage from '../../../support/pageobjects/loginPage';
const loginPage = new LoginPage

import SupplierPage from '../../../support/pageobjects/supplierPage';
const supplierPage = new SupplierPage

beforeEach(() => {
	cy.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
})

Given(/^que estou na tela de suppliers$/, () => {
	supplierPage.acessarListagemSuppliers()
});

When(/^clico no icone de mais para criar um novo supplier$/, () => {
	cy.get('.rounded-full').should('be.visible').click()
	//supplierPage.clicarBotaoFinance();
	//supplierPage.clicarBotaoSupplier();
	//return true
});

When(/^preencho o campo todos os campos$/, () => {
	return true
});

When(/^clico no botao Send$/, () => {
	return true
});

Then(/^o supplier deve ser criado$/, () => {
	return true
});
