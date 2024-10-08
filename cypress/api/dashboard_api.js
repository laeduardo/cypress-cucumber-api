import LoginPage from "../support/page_objects/login_page"
const loginPage = new LoginPage

context('Testar API', () => {
    const loginUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login' 
    const validateUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate' 
    const indexUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'

    it('Verificar se esta na pagina de login', () => {
        cy.request({
            method: 'GET',
            url: loginUrl,
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Verificar validacao do login', () => {
        cy.request({
            method: 'POST',
            url: validateUrl,
            body: {
                username: Cypress.env('USERNAME'),
                password: Cypress.env('PASSWORD')
            }
        }).then((response) => {
            expect(response.status).to.eq(200)

            const bodyHTML = response.body; // Captura o corpo HTML
            const tokenMatch = /:token="(.*?)"/.exec(bodyHTML); // Regex para capturar o valor do token
            const token = tokenMatch[1]; // Recupera o valor do token
            cy.log('Token extraído: ' + token); // Log do token extraído

            return cy.request({
                method: 'POST',
                url: validateUrl,
                body: {
                    _token: token,
                    username: Cypress.env('USERNAME'),
                    password: Cypress.env('PASSWORD')
                },
            })
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Verificar se esta na pagina inicial logada', () => {
        cy.request({
            method: 'GET',
            url: indexUrl,
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})