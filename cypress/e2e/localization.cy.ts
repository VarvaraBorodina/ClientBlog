import cypress from 'cypress';

import { ROUTE } from '@/constants/routes';

const baseUrlL: string = Cypress.config().baseUrl!.toString();

const { BLOG } = ROUTE;

describe('Test auth page', () => {
  beforeEach(() => {
    cy.visit(BLOG.path);
  });

  it('Check En & Ru', () => {
    cy.contains('en');
    cy.contains('ru');
  });

  it('Check switch to Russian', () => {
    cy.get('a:contains(ru):last').click();
    cy.contains('О нас');
  });

  it('Check switch back to English', () => {
    cy.get('a:contains(ru):last').click();
    cy.contains('О нас');

    cy.get('a:contains(en):last').click();
    cy.contains('About Us');
  });
});
