Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Patricia')
    cy.get('#lastName').type('Alves')
    cy.get('#email').type('patriciadiasalves1@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
})