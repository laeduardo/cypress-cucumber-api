import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import LoginPage from '../../../support/pageobjects/loginPage';
const loginPage = new LoginPage

import SupplierPage from '../../../support/pageobjects/supplierPage';
const supplierPage = new SupplierPage

beforeEach(() => {
	loginPage.acessarLogin()
	const email = Cypress.env('USERNAME')
	const senha = Cypress.env('PASSWORD')
	loginPage.fazerLogin(email, senha)
})

Given(/^que estou na tela de suppliers$/, () => {
	cy.get(':nth-child(5) > .text-white').click()
	cy.get('.nav-item.show > .dropdown-menu > :nth-child(2) > .nav-link > span').click()
	supplierPage.verificarTelaSuppliers()
	//return true
});

When(/^clico no icone de + para criar um novo supplier$/, () => {
	cy.get('.rounded-full').should('be.visible').click()
	//supplierPage.clicarBotaoFinance();
	//supplierPage.clicarBotaoSupplier();
	return true
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
