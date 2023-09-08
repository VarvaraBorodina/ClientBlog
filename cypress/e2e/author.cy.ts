import cypress from 'cypress';

import { DINAMIC_ROUTES } from '@/constants/routes';

const { AUTHOR } = DINAMIC_ROUTES;

describe('Test auth page', () => {
  beforeEach(() => {
    cy.visit(`${AUTHOR}/0`);
  });

  it('Check Author', () => {
    cy.contains('Floyd Miles');
  });

  it('Check My posts', () => {
    cy.contains('My posts');
  });

  it('Check On Post Click', () => {
    cy.contains('Step-by-step guide to choosing great font pairs').click();
    cy.contains('Floyd Miles');
  });

  it('Check No posts', () => {
    cy.visit(`${AUTHOR}/6`);
    cy.contains('No posts yet');
  });
});
