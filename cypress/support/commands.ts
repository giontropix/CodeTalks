export {}

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      checkMenuItemIsActive(dataTestId: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add('checkMenuItemIsActive', (dataTestId) => {
  cy.get(`[data-testid=${dataTestId}]`).should(
    'have.css',
    'background-color',
    'rgba(34, 139, 230, 0.1)'
  );
});
