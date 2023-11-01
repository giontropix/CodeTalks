describe('Table', () => {
  beforeEach(() => {
    cy.visit('/table');
  });
  it('should correctly render the page', () => {
    cy.intercept('http://localhost:3000/users').as('getUsers');
    cy.get("[data-testid='table-test']").should('exist');
    cy.wait('@getUsers');
  });

  it('should correctly search an item', () => {
    // search
    cy.get("[data-testid='table-search']").should('exist').as('search');
    cy.get('@search').type('Trace');
    // check successful search
    cy.get("[data-testid='table-body-row']").as('body-row');
    cy.get('@body-row').should('have.length', 1);
    cy.get('@body-row').find('[data-testid="table-cell-name"]').contains('Trace');
    cy.get('@body-row')
      .find('[data-testid="table-cell-email"]')
      .contains('Antonina.Pouros@yahoo.com');
    cy.get('@body-row')
      .find('[data-testid="table-cell-company"]')
      .contains('Crona, Aufderhar and Senger');
  });

  it('should correctly restore table if search is empty', () => {
    // search
    cy.get("[data-testid='table-search']").should('exist').as('search');
    cy.get('@search').type('Trace');
    // check successful restore
    cy.get('@search').clear();
    cy.get("[data-testid='table-body-row']").as('body-row');
    cy.get('@body-row').should('have.length', 4);
  });

  it('should correctly order the table', () => {
    const sortedNames = [
      'Athena Weissnat',
      'Danny Carter',
      'Deangelo Runolfsson',
      'Trace Tremblay PhD',
    ];
    // click on name table header to order by name
    cy.get("[data-testid='table-header-name']").click();
    // check the order
    cy.get("[data-testid='table-body-row']").as('body-row');
    cy.get('@body-row').each((row, index) => {
      cy.wrap(row).find('[data-testid="table-cell-name"]').contains(sortedNames[index]);
    });
  });
});
