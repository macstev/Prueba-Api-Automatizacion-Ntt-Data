describe('template spec', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('consulta_usuario_creado', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://petstore.swagger.io/');
    cy.get('#operations-user-getUserByName > .opblock-summary > .opblock-summary-control > .opblock-summary-path > .nostyle > span').click();
    cy.get('.try-out > .btn').click();
    cy.get('.parameters-col_description > input').clear('M');
    cy.get('.parameters-col_description > input').type('MichaelPerez2');
    cy.get('.execute-wrapper > .btn').click();
    /* ==== End Cypress Studio ==== */
  });
})