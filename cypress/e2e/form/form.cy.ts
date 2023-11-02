describe('form', () => {
  beforeEach(() => {
    cy.visit('/form');
  });
  it('should correctly render the page', () => {
    cy.get("[data-testid='form-test']").should('exist');

    cy.checkMenuItemIsActive('sidebar-menu-item-form');
  });

  it('should correctly trigger an error if email field remains empty', () => {
    cy.get("[data-testid='form-name-input']").type('Saro Falsaperla');
    cy.get("[data-testid='form-framework-input']").select('Javascript vaniglia e cioccolato');
    cy.get("[data-testid='form-submit-input']").click();
    cy.get("[data-testid='form-email-input-error']").should('exist');
    cy.get('#success-notification').should('not.exist');
  });

  it('should correctly compile and send the form', () => {
    cy.intercept({
      url: 'http://localhost:3000/sleepers',
      method: 'POST',
    }).as('sleepers');
    cy.get("[data-testid='form-name-input']").type('Saro Falsaperla');
    cy.get("[data-testid='form-email-input']").type('saro.falsaperla@liotro.ct');
    cy.get("[data-testid='form-framework-input']").select('Javascript vaniglia e cioccolato');
    cy.get("[data-testid='form-submit-input']").click();
    cy.get("[data-testid='form-email-input-error']").should('not.exist');
    cy.wait('@sleepers').its('request.body').should('deep.equal', {
      name: 'Saro Falsaperla',
      email: 'saro.falsaperla@liotro.ct',
      framework: 'Javascript vaniglia e cioccolato',
    });
    cy.get('#success-notification').should('exist');
  });
});
