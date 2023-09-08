import cypress from 'cypress';

import { ROUTE } from '@/constants/routes';

const baseUrlL: string = Cypress.config().baseUrl!.toString();

const { HOME, BLOG, ABOUT, CONTACT } = ROUTE;

describe('Test auth page', () => {
  beforeEach(() => {
    cy.visit(HOME.path);
  });

  it('Check Blog', () => {
    cy.get('a:contains(Blog)').click({ multiple: true });
    cy.wait(1000);
    cy.url().should('eq', `${baseUrlL}${BLOG.path}`);
  });

  it('Check About Us', () => {
    cy.get('a:contains(About)').click({ multiple: true });
    cy.wait(1000);
    cy.url().should('eq', `${baseUrlL}${ABOUT.path}`);
  });

  it('Check Contact', () => {
    cy.get('a:contains(Contact Us)').click({ multiple: true });
    cy.wait(1000);
    cy.url().should('eq', `${baseUrlL}${CONTACT.path}`);
  });

  it('Check Home', () => {
    cy.get('a:contains(Contact Us)').click({ multiple: true });
    cy.wait(1000);
    cy.get('a:contains(Home)').click({ multiple: true });
    cy.wait(1000);
    cy.url().should('eq', `${baseUrlL}${HOME.path}`);
  });
});
