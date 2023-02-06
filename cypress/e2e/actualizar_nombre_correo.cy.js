
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://petstore.swagger.io/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#operations-user-updateUser > .opblock-summary > .opblock-summary-control > .opblock-summary-description').click();
    cy.get('.try-out > .btn').click();
    cy.get('.parameters-col_description > input').clear('M');
    cy.get('.parameters-col_description > input').type('MichaelPerez2');
    cy.get('.body-param__text').click();
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
  }),

  it('actualizar', () => {

      cy.request('PUT', 'https://petstore.swagger.io/v2/user/MichaelPerez2', {
        id: 2,
        username: 'MichaelPerez2',
        firstName: 'Steven',
        lastName: 'Perez',
        email: 'michael@hotmail.com',
        password: '987654321',
        phone: '0978908852',
        userStatus: 1 
      })
  })
})