import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../support/page_objects/login_page';
const loginPage = new LoginPage

Given(/^que estou na tela de login$/, () => {
	loginPage.acessarLogin()
});

When(/^preencher os campos username e password$/, () => {
	const username = Cypress.env('USERNAME')
	const password = Cypress.env('PASSWORD')
	loginPage.fazerLogin(username, password)
});

Then(/^acesso valido$/, () => {
	return true
});