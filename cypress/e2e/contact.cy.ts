import cypress from 'cypress';

import { ROUTE } from '@/constants/routes';

const { HOME } = ROUTE;

describe('Test auth page', () => {
  beforeEach(() => {
    cy.visit(HOME.path);

    for (let i = 0; i < 7; i += 1) {
      cy.wait(1000);
      cy.scrollTo('bottom');
    }
    cy.contains('Join now').click();
  });

  it('Check CONTACT US', () => {
    cy.contains('Contact Us');
  });

  it('Check Name required', () => {
    cy.contains('Send Message').click();
    cy.contains('Name is a required field');
  });

  it('Check Email required', () => {
    cy.contains('Send Message').click();
    cy.contains('Email is a required field');
  });

  it('Check Query required', () => {
    cy.contains('Send Message').click();
    cy.contains('Query is a required field');
  });

  it('Check Message required', () => {
    cy.contains('Send Message').click();
    cy.contains('Message is a required field');
  });
});
