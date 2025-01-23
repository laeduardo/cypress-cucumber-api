describe('Create a New Formats', () => {
    beforeEach(() => {
        cy.login()
        cy.brands_accounts_new_formats()
    })
    it('Criar um Formats', () => {
      cy.get('[data-testid="new-format_button"]').as('button_new').click()
      cy.get("[name='name']").should('be.visible').as('field_name').type('TESTES')
      cy.get("[name='technical_name']").should('be.visible').as('field_technical_name').type('AUTOMATIZADO') 
    })
})