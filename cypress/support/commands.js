Cypress.Commands.add('login', (username, password) => {
    cy.visit('/account/login')
    cy.get('#email').type(username)
    cy.get('#password').type(password)
    
    cy.get('.btn').contains('Sign in').click()
    cy.url().should('include', '/account/entrypoint')
  
    cy.get('#logos-login1').click()
    cy.url().should('include', '/')

    /*cy.intercept('POST', '/oauth2/token/menu').as('getToken')
        .then(() => {
            return cy.wait('@getToken').then(({ request }) => {
                if(!request) {
                    cy.log("Falha na interceptação do token")
                    return
                }
                const authorizationHeader = JSON.stringify(request.headers['authorization'])
                const match = authorizationHeader.match(/"Bearer\s+(.*)"/);

                if(match) {
                    const bearerToken = match[1].replace(/"| /g, '')
                    cy.wrap(bearerToken).as('bearerToken')
                    cy.log('Token capturado com sucesso')
                } else {
                    cy.log('Token não encontrado no header de autorização')    
                }
            })
        })*/
})