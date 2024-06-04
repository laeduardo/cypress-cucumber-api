import './commands'
import 'cypress-plugin-api'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})