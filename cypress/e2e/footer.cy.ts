import cypress from 'cypress';

import { ROUTE } from '@/constants/routes';

const baseUrlL: string = Cypress.config().baseUrl!.toString();

const { BLOG, POLICY } = ROUTE;

describe('Test auth page', () => {
  beforeEach(() => {
    cy.visit(BLOG.path);
  });

  it('Check Privacy Policy', () => {
    cy.get('a:contains(Privacy Policy)').click();
    cy.url().should('eq', `${baseUrlL}${POLICY.path}`);
  });

  it('Check Empty email', () => {
    cy.get('button:contains(Subscribe)').click();
    cy.contains('Invalid email');
  });

  it('Check Invalid email', () => {
    cy.get('input[placeholder*="Enter Your Email"]').type('ma');
    cy.get('button:contains(Subscribe)').click();
    cy.contains('Invalid email');
  });
});
