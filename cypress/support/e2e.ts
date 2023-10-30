// eslint-disable-next-line import/no-extraneous-dependencies
import '@cypress/code-coverage/support';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'cypress-mochawesome-reporter/register';

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
  onElement: ($el) => {
    const attr1 = $el.attr('name');
    if (attr1) {
      return `[name="${attr1}"]`;
    }

    return undefined;
  },
});

Cypress.SelectorPlayground.defaults({
  selectorPriority,
});
