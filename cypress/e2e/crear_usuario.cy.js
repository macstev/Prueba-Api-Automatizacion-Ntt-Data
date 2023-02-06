describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://petstore.swagger.io/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#operations-user-createUsersWithArrayInput > .opblock-summary > .opblock-summary-control > .opblock-summary-description').click();
    cy.get('.try-out > .btn').click();
    cy.get('.body-param__text').click();
    cy.get('.body-param__text').click();
    cy.get('.body-param__text').click();
    cy.get('.body-param__text').click();
    cy.get('.body-param__text').click();
    cy.get('.body-param__text').click();
    cy.get('.body-param__text').click();
    cy.get('.body-param__text').click();
    cy.get('.execute-wrapper > .btn').click();
    /* ==== End Cypress Studio ==== */
  })
})