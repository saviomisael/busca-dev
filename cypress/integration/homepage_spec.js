/// <reference types="Cypress" />
describe('home page', () => {
  it('should submit form with a username valid then redirect to profile page', () => {
    cy.visit('/');

    cy.get('[data-cy=username-input]').type('saviomisael');
    cy.get('[data-cy=submit-search-dev]').click();

    cy.location().should((loc) => {
      expect(loc.pathname).contains('profile/saviomisael');
    });
  });
});
