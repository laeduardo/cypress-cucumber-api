describe('Create a New Payment Request', () => {
    beforeEach(() => {
        cy.login()
        cy.finance_new_payment_request()
    })
    it('Criar um PR do tipo non-publisher', () => {
      cy.get('.absolute > .rounded-full').as('button_new').click()

      cy.get('#headlessui-combobox-input-\\:r1r\\:').should('be.visible').as('field_supplier').type('PEDRO')
      cy.contains('PEDRO JORGE NUNES CABRAL').click()

      cy.get('#headlessui-listbox-button-\\:r11\\:').should('be.visible').as('field_entity').click()
      cy.contains('CLEVER GEST').click()

      cy.get('.grid.w-full > .gap-1 > .relative.flex > .relative > .right-0').as('field_due_date').click()
      cy.get('.grid.w-full > .gap-1 > .relative.flex > .relative > .ease-out > .mt-2\\.5 > .lg\\:flex-row > .items-stretch > .md\\:w-\\[296px\\] > .px-0\\.5 > .gap-y-0\\.5 > :nth-child(35)').as('select_due_date').click()
      
      cy.get('.grid.w-full > :nth-child(3) > .flex > .w-full').as('field_estimated_time').type('5')  

      cy.get('#headlessui-listbox-button-\\:r16\\:').should('be.visible').as('field_payment_method').click()
      cy.contains('WIRE TRANSFER').click()

      cy.get('#headlessui-listbox-button-\\:r2i\\:').should('be.visible').as('field_receiver_bank').click()
      cy.contains('PT500').click()

      cy.get('#headlessui-listbox-button-\\:r1g\\:').should('be.visible').as('field_cost_center').click()
      cy.contains('Bold').click()

      cy.get('.ml-5 > :nth-child(1) > .flex-col > .relative > .h-\\[38px\\]').should('be.visible').as('field_cost_center_amount').type('50')

      cy.get('.grid > :nth-child(1) > .flex-col > .relative > [data-testid="input-currency"]').should('be.visible').as('field_vat_amount').type('5')

      cy.get(':nth-child(2) > .flex-col > .relative > [data-testid="input-currency"]').should('be.visible').as('field_retention_amount').type('5')

      cy.get('.pt-6 > .grid-cols-2 > :nth-child(1) > .flex > .w-full').should('be.visible').as('field_invoice_number').type('PR001 - Automated')

      cy.get('.grid-cols-2 > .gap-1 > .relative.flex > .relative > .h-\\[38px\\]').as('field_invoice_date').click()     
      cy.get('.grid-cols-2 > .gap-1 > .relative.flex > .relative > .ease-out > .mt-2\\.5 > .lg\\:flex-row > .items-stretch > .md\\:w-\\[296px\\] > .px-0\\.5 > .gap-y-0\\.5 > :nth-child(25)').as('select_invoice_date').click()

      cy.get("[type= 'file']").selectFile('file-teste.pdf', {force: true})
    })
})