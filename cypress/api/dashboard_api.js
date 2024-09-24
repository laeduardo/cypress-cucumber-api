import LoginPage from "../support/page_objects/login_page"
const loginPage = new LoginPage

context('Testar API', () => {

    it('GET - UNIT', () => {
        cy.api({
                method: 'GET',
                url: '/',
            }).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })