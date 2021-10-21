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

  it('should redirect to not found page when user not exist', () => {
    cy.visit('/');

    cy.get('[data-cy=username-input]').type('chapolinwayne');
    cy.get('[data-cy=submit-search-dev]').click();

    cy.location().should((loc) => {
      expect(loc.pathname).contains('notfound');
    });
  });
});
