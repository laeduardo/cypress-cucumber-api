import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../support/pageobjects/loginPage';
const loginPage = new LoginPage

Given(/^que estou na tela de login$/, () => {
	loginPage.acessarLogin()
	loginPage.verificarTelaLogin()
});

When(/^preencher os campos email e senha$/, () => {
	const email = Cypress.env('USERNAME')//, {log: false}
	const senha = Cypress.env('PASSWORD')//, {log: false}
	loginPage.fazerLogin(email, senha)
});

Then(/^acesso valido$/, () => {
	loginPage.verificarAcessoValido()
});
