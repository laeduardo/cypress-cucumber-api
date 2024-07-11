import LoginPage from "../support/pageobjects/loginPage"
const loginPage = new LoginPage

context('Testar API do Finance', () => {

    before(() => {
        loginPage.acessarLogin()
        const email = Cypress.env('USERNAME')
        const senha = Cypress.env('PASSWORD')
        loginPage.fazerLogin(email, senha)
    })

    it('GET - Supplier', () => {
        cy.get('@bearerToken')
          .then((token) => {
            const bearerToken = token

            cy.api({
                method: 'GET',
                url: 'https://mqm76sseb6.execute-api.eu-west-1.amazonaws.com/v1/suppliers?search=9',
                headers: {
                    Authorization: `Bearer ${bearerToken}`,
                    Origin: "https://qa1-finance.clevercorporate.com"
                }
            }).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })
})