// cypress/support/e2e.js
import '@cypress/code-coverage/support';
import './commands';

const selectorPriority = [
  'data-cy',
  'data-test',
  'data-testid',
  'data-qa',
  'id',
  'tag',
  'attributes',
  'nth-child',
  'class',
];

Cypress.SelectorPlayground.defaults({
  selectorPriority,
});
