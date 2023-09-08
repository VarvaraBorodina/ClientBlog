import cypress from 'cypress';

import { DINAMIC_ROUTES, ROUTE } from '@/constants/routes';

const baseUrlL: string = Cypress.config().baseUrl!.toString();
const { BLOG } = ROUTE;
const { POST, CATEGORY } = DINAMIC_ROUTES;

describe('Test auth page', () => {
  beforeEach(() => {
    cy.visit(BLOG.path);
  });

  it('Check FEATURE POST', () => {
    cy.contains('Feature Post');
  });

  it('Check read more button in header post', () => {
    cy.contains('Read more >');
    cy.contains('Read more >').click();

    cy.url().should('eq', `${baseUrlL}${POST}/6`);
  });

  it('Check Catagories', () => {
    cy.contains('All Categories');
  });

  it('Check on Catagory click', () => {
    cy.contains('Business').click();
    cy.url().should('eq', `${baseUrlL}${CATEGORY}/4`);
  });

  it('Check click on post', () => {
    cy.contains('Logo design trends to avoid in 2022').click();
    cy.url().should('eq', `${baseUrlL}${POST}/3`);
  });

  it('Check pagination next', () => {
    cy.contains('Logo design trends to avoid in 2022');
    cy.contains('Next >').click();
    cy.contains('Logo design trends to avoid in 2022').should('not.exist');
  });
});
