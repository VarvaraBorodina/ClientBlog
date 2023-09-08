import cypress from 'cypress';

import { DINAMIC_ROUTES } from '@/constants/routes';

const { POST } = DINAMIC_ROUTES;

describe('Test auth page', () => {
  beforeEach(() => {
    cy.visit(`${POST}/0`);
  });

  it('Check Author', () => {
    cy.contains('Floyd Miles');
  });

  it('Check Category', () => {
    cy.contains('Startup');
  });

  it('Check Title', () => {
    cy.contains('Step-by-step guide to choosing great font pairs');
  });

  it('Check other posts', () => {
    cy.contains('What to read next');
  });
});
