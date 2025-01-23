describe('Funcionalidade de Login', () => {
    it.only('Deve permitir o login com credenciais válidas', () => {
      cy.login()
      cy.contains('Dashboard').should('be.visible')
    })
})