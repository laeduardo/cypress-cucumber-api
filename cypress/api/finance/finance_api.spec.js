context('Testar API do Finance', () => {
    before(() => {
        cy.login()
    })

    const currentEnvironment = Cypress.env('environment')
    const url = currentEnvironment === 'STAGING' 
                  ? Cypress.env('STAGING_API_URL') 
                  : Cypress.env('QA1_API_URL')

    it('GET - WARNINGS', () => {              
        cy.request({
            method: 'GET',
            url: url+'/payment_requests/warnings',
            headers: {
                Authorization: `Bearer ${Cypress.env('token')}`,
                Origin: {Origin:'https://staging-finance.clevercorporate.com'}
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it.skip('GET - RESOURCE', () => {
        cy.request({
            method: 'GET',
            url: 'https://sso-qa1.clevercorporate.com/oauth2/resource',
            headers: {
                Authorization: `Bearer ${Cypress.env('token')}`,
                Origin: {Origin:'https://staging-finance.clevercorporate.com'}
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('GET - LIST PAYMENT REQUESTS', () => {
        cy.request({
            method: 'GET',
            url: url+'/payment_requests?page=1&limit=50',
            headers: {
                Authorization: `Bearer ${Cypress.env('token')}`,
                Origin: {Origin:'https://qa1-finance.clevercorporate.com'}
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('GET - INITIAL LOADING', () => {
        cy.request({
            method: 'GET',
            url: url+'/payment_requests/initial_loading?is_publisher=false',
            headers: {
                Authorization: `Bearer ${Cypress.env('token')}`,
                Origin: {Origin:'https://staging-finance.clevercorporate.com'}
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it.skip('GET - WITH COMPLEMENTS', () => {
        cy.request({
            method: 'GET',
            url: url+'/leads/with_complements?search=smule.com',
            headers: {
                Authorization: `Bearer ${Cypress.env('token')}`,
                Origin: {Origin:'https://qa1-finance.clevercorporate.com'}
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('GET - SUPPLIERS', () => {
        cy.request({
            method: 'GET',
            url: url+'/suppliers',
            headers: {
                Authorization: `Bearer ${Cypress.env('token')}`,
                Origin: {Origin:'https://qa1-finance.clevercorporate.com'}
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('GET - IS PUBLISHER = FALSE', () => {
        cy.request({
            method: 'GET',
            url: url+'/supplier_payment_methods/20261?is_publisher=false',
            headers: {
                Authorization: `Bearer ${Cypress.env('token')}`,
                Origin: {Origin:'https://qa1-finance.clevercorporate.com'}
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it.skip('POST - CREATE PR NON-PUBLISHER', () => {
        const filePath = 'file-teste.pdf'; 
        const formData = new FormData();
        formData.append('supplier_id', '38160');
        formData.append('due_date', '2025-01-07');
        formData.append('estimated_days', '5');
        formData.append('priority_id', '2');
        formData.append('is_publisher', 'false');
        formData.append('action', 'save-send');
        formData.append('payment_method_type_id', '3');
        formData.append('payment_method_id', '992'); 
        formData.append('cost_centers', JSON.stringify([{"id":"155","currency_id":"EUR","amount":"150"}])); 
        formData.append('entity_id', '2');
        formData.append('amount', '150');
        formData.append('invoice_number', 'P002R');
        formData.append('invoice_date', '2025-01-01');
        formData.append('invoice_file', Cypress.$(filePath)[0].files[0]); 
        formData.append('vat_amount', '5');
        formData.append('retention_amount', '10');
        formData.append('reason', 'pr criado por automação');

        cy.request({
            method: 'POST',
            url: 'https://finance-pr-qa1.clevercorporate.com/payment_requests/create',
            headers: {
                Authorization: `Bearer ${Cypress.env('token')}`,
                Origin: 'https://qa1-finance.clevercorporate.com'
            },
            body: formData
        }).then((response) => {
            expect(response.status).to.eq(201)
        })
    })
})