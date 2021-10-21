/// <reference types="Cypress" />
describe('home page', () => {
  it('should submit form with a username valid then redirect to profile page', () => {
    cy.submitSearchDevForm('saviomisael');

    cy.location().should((loc) => {
      expect(loc.pathname).contains('profile/saviomisael');
    });
  });

  it('should redirect to not found page when user not exist', () => {
    cy.submitSearchDevForm('chapolinwayne');

    cy.location().should((loc) => {
      expect(loc.pathname).contains('notfound');
    });
  });

  it('should redirect to saviomisael profile page when form is submit without username', () => {
    cy.visit('/');

    cy.get('[data-cy=submit-search-dev]').click();

    cy.location().should((loc) => {
      expect(loc.pathname).contains('profile/saviomisael');
    });
  });
});
