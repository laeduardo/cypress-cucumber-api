import 'cypress-file-upload'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Cypress.Commands.add('login', (environment, actor) => {
    const currentEnvironment = environment || Cypress.env('environment')
    let url
    switch(currentEnvironment) {
        case 'QA1':
            url = Cypress.env('QA1_URL')
            break;
        case 'QA2':
            url = Cypress.env('QA2_URL')
            break;
        case 'QA3':
            url = Cypress.env('QA3_URL')
            break;
        case 'STAGING':
            url = Cypress.env('STAGING_URL')
            break;
        default:
            throw new Error(`Ambiente não encontrado: ${currentEnvironment}`)
    }
    cy.visit(url)
    
    const currentActor = actor || Cypress.env('actor')
    let email
    switch(currentActor) {
        case 'TeamLeader':
            email = Cypress.env('USERNAME_TL')
            break;
        case 'Agent':
            email = Cypress.env('USERNAME_AGENT')
            break;
        case 'Finance':
            email = Cypress.env('USERNAME_FINANCE')
            break;
        case 'Operations':
            email = Cypress.env('USERNAME_OPS')
            break;      
        default:
            throw new Error(`Usuário não encontrado: ${currentActor}`);
    }
    cy.get('#email').as('field_email').type(email)

    const password = currentEnvironment === 'STAGING' 
                      ? Cypress.env('password_staging') 
                      : Cypress.env('password_qa')
    cy.get('#password').as('field_password').type(password)
    
    cy.get('.btn').as('button_sign_in').click()
    cy.get('#logos-login1').as('button_cleverADS').click()

    cy.window().then((win) => {
        const token = win.localStorage.getItem('token')
        Cypress.env('token', token)
    })
})

Cypress.Commands.add('finance_new_payment_request', () => {    
    cy.contains('Finance').click()  
    cy.contains('New Payment Request').click()
})

Cypress.Commands.add('brands_accounts_new_formats', () => {    
    cy.contains('Brands & Accounts').click()  
    cy.contains('Formats').click()
})