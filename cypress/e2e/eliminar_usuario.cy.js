describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://petstore.swagger.io/')


    /* ==== Generated with Cypress Studio ==== */
    cy.get('#operations-user-deleteUser > .opblock-summary').click();
    cy.get('#operations-user-deleteUser > .opblock-summary > .opblock-summary-control > .opblock-summary-description').click();
    cy.get('.try-out > .btn').click();
    cy.get('.parameters-col_description > input').clear('M');
    cy.get('.parameters-col_description > input').type('MichaelPerez2');
    cy.get('.execute-wrapper > .btn').click();
    /* ==== End Cypress Studio ==== */
  }),

  it("eliminar_usuario", function () {
    cy.request('DELETE','https://petstore.swagger.io/v2/user/MichaelPerez', {
    }).then((r) => {
      expect(r.status).to.eq(500)
      expect(r).to.have.property('headers')
      expect(r).to.have.property('duration')
    });
  })
})