import cypress from 'cypress';

import { DINAMIC_ROUTES } from '@/constants/routes';

const { CATEGORY } = DINAMIC_ROUTES;

describe('Test auth page', () => {
  beforeEach(() => {
    cy.visit(`${CATEGORY}/4`);
  });

  it('Check Category name', () => {
    cy.contains('Business');
  });

  it('Check Tag Search', () => {
    cy.get('input[placeholder*="Search tags"]').type('ma');
    cy.contains('Marketing');
    cy.contains('Marketplace');
  });

  it('Check Tag Search No Tags', () => {
    cy.contains('Life');
    cy.get('input[placeholder*="Search tags"]').type('ma');
    cy.contains('Life').should('not.exist');
  });

  it('Check No tag', () => {
    cy.get('input[placeholder*="Search tags"]').type('qwertyui');
    cy.contains('No tags');
  });

  it('Check No posts', () => {
    cy.contains('Screen').click();
    cy.contains('No posts yet');
  });
});
