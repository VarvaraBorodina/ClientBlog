import cypress from 'cypress';

import { DINAMIC_ROUTES, ROUTE } from '@/constants/routes';

const baseUrlL: string = Cypress.config().baseUrl!.toString();
const { ABOUT } = ROUTE;
const { AUTHOR } = DINAMIC_ROUTES;

describe('Test auth page', () => {
  beforeEach(() => {
    cy.visit(ABOUT.path);
  });

  it('Check ABOUT US', () => {
    cy.contains('About us');
  });

  it('Check Our team of creatives', () => {
    cy.contains('Our team of creatives');
  });

  it('Check Our vision', () => {
    cy.contains('Our vision');
  });

  it('Check Our mision', () => {
    cy.contains('Our mision');
  });

  it('Check Our team of creatives', () => {
    cy.contains('Our team of creatives');
  });

  it('Check Our mision', () => {
    cy.contains('Our mision');
  });

  it('Check Our team of creatives', () => {
    cy.contains('Our team of creatives');
  });

  it('Check Why we started this Blog', () => {
    cy.contains('Why we started this Blog');
  });

  it('Check list of authors', () => {
    cy.contains('List of Authors');
  });

  it('Check author', () => {
    cy.contains('Floyd Miles');
  });

  it('Check 8 authors', () => {
    cy.contains('Jacob Jones');
  });

  it('Check on author click', () => {
    cy.contains('Jacob Jones').click();

    cy.url().should('eq', `${baseUrlL}${AUTHOR}/1`);
  });
});
