context('Testar API do Brands & Accounts', () => {
    before(() => {
        cy.login()
    })

    const currentEnvironment = Cypress.env('environment')
    const url = currentEnvironment === 'STAGING' 
                  ? Cypress.env('STAGING_API_URL') 
                  : Cypress.env('QA1_API_URL')

    it('GET - FORMATS', () => {              
        cy.request({
            method: 'GET',
            url: url+'/formats/?page=1&limit=50&sort=name%3Aasc',
            headers: {
                Authorization: `Bearer ${Cypress.env('token')}`,
                Origin: {Origin:'https://staging-finance.clevercorporate.com'}
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})