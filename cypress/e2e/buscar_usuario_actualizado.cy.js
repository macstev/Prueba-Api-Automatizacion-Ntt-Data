describe("template spec", function() {
  it('passes', () => {
    cy.visit('https://petstore.swagger.io/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#operations-user-getUserByName > .opblock-summary > .opblock-summary-control').click();
    cy.get('.try-out > .btn').click();
    cy.get('.parameters-col_description > input').clear('M');
    cy.get('.parameters-col_description > input').type('MichaelPerez2');
    cy.get('.execute-wrapper > .btn').click();
    /* ==== End Cypress Studio ==== */
  }),

  it("buscar_usuario_actualizado", function(){
    cy.request("GET", "https://petstore.swagger.io/v2/user/MichaelPerez2", {
    }).then((r) => {
      expect(r.status).to.eq(200)
      expect(r).to.have.property('headers')
      expect(r).to.have.property('duration')
    });
  })

})