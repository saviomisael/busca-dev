Cypress.Commands.add('submitSearchDevForm', (username) => {
  cy.visit('/');

  cy.get('[data-cy=username-input]').type(username);
  cy.get('[data-cy=submit-search-dev]').click();
});
