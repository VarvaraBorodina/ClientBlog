import cypress from 'cypress';

import { DINAMIC_ROUTES, ROUTE } from '@/constants/routes';

const baseUrlL: string = Cypress.config().baseUrl!.toString();
const { HOME, BLOG, ABOUT, CONTACT } = ROUTE;
const { POST, CATEGORY } = DINAMIC_ROUTES;

describe('Test auth page', () => {
  beforeEach(() => {
    cy.visit(HOME.path);
  });

  it('Check header post post', () => {
    cy.contains('Step-by-step guide to choosing great font pairs');
    cy.contains('By Floyd Miles | August 1, 2023');
  });

  it('Check read more button in header post', () => {
    cy.contains('Read more >');
    cy.contains('Read more >').click();

    cy.url().should('eq', `${baseUrlL}${POST}/0`);
  });

  it('Check feature post', () => {
    cy.contains('Feature Post');
  });

  it('Check all posts', () => {
    cy.contains('All posts');
  });

  it('Check view all button', () => {
    cy.contains('View all').click();
    cy.url().should('eq', `${baseUrlL}${BLOG.path}`);
  });

  it('Check click on post', () => {
    cy.contains('Logo design trends to avoid in 2022').click();
    cy.url().should('eq', `${baseUrlL}${POST}/3`);
  });

  it('Check about us', () => {
    cy.contains('Logo design trends to avoid in 2022').scrollIntoView();
    cy.contains('Our mision');
    cy.contains('About us');
  });

  it('Check Choose A Catagory', () => {
    cy.scrollTo('bottom');
    for (let i = 0; i < 2; i += 1) {
      cy.wait(1000);
      cy.scrollTo('bottom');
    }

    cy.contains('Choose A Catagory');
  });

  it('Check on Catagory click', () => {
    cy.scrollTo('bottom');
    for (let i = 0; i < 3; i += 1) {
      cy.wait(1000);
      cy.scrollTo('bottom');
    }

    cy.contains('Business').click();
    cy.url().should('eq', `${baseUrlL}${CATEGORY}/4`);
  });

  it('Check discover our story', () => {
    cy.scrollTo('bottom');
    for (let i = 0; i < 3; i += 1) {
      cy.wait(1000);
      cy.scrollTo('bottom');
    }

    cy.contains('Discover our story >').click();
    cy.url().should('eq', `${baseUrlL}${ABOUT.path}`);
  });

  it('Check list of authors', () => {
    cy.scrollTo('bottom');
    for (let i = 0; i < 4; i += 1) {
      cy.wait(1000);
      cy.scrollTo('bottom');
    }

    cy.contains('List of Authors');
  });

  it('Check on author click', () => {
    cy.scrollTo('bottom');
    for (let i = 0; i < 4; i += 1) {
      cy.wait(1000);
      cy.scrollTo('bottom');
    }

    cy.contains('Floyd Miles').click();
  });

  it('Check We are', () => {
    for (let i = 0; i < 5; i += 1) {
      cy.wait(1000);
      cy.scrollTo('bottom');
    }
    cy.contains('We are');
  });

  it('Check TESTIMONIAL', () => {
    for (let i = 0; i < 5; i += 1) {
      cy.wait(1000);
      cy.scrollTo('bottom');
    }
    cy.contains('TESTIMONIAL');
  });

  it('Check join now', () => {
    for (let i = 0; i < 6; i += 1) {
      cy.wait(1000);
      cy.scrollTo('bottom');
    }
    cy.contains('Join now').click();
    cy.wait(1000);
    cy.url().should('eq', `${baseUrlL}${CONTACT.path}`);
  });
});
