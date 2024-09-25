import LoginPage from "../support/page_objects/login_page"
const loginPage = new LoginPage

context('Testar API', () => {

    it('GET - UNIT', () => {
        cy.request({
                method: 'GET',
                url: '/web/index.php/auth/login',
            }).then((response) => {
                expect(response.status).to.eq(304)
            })
        })



    })