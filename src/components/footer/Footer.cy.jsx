import React from 'react';
import Footer from './Footer';
import '../../index.css'; // if needed to load global styles

describe('<Footer />', () => {
  it('renders all major sections', () => {
    cy.mount(<Footer />);

    // Brand title
    cy.contains('TasteHaven').should('exist');

    // Navigation links
    cy.get('.fr-nav-link').should('have.length', 4);
    cy.contains('Our Menu').should('have.attr', 'href', '/menu');

    // Newsletter
    cy.contains('Stay Updated').should('exist');


    // Contact info
    cy.contains('Connect With Us').should('exist');
    cy.contains('456 Flavor Avenue').should('exist');
    cy.contains('+1 987 654 3210').should('exist');

    // Social links
    cy.get('.fr-social-link').should('have.length', 4);
  });


});
