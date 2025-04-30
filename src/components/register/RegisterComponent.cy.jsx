import React from 'react';
import RegisterComponent from './RegisterComponent';
import { MemoryRouter } from 'react-router';
import '../../index.css'; // Optional: for global styles

describe('<RegisterComponent />', () => {
    let props;

    beforeEach(() => {
      props = {
        register: cy.stub().as('register'),
        onChangeFullName: cy.stub().as('onChangeFullName'),
        onChangeUserName: cy.stub().as('onChangeUserName'),
        onChangeEmail: cy.stub().as('onChangeEmail'),
        onChangePhoneNumber: cy.stub().as('onChangePhoneNumber'),
        onChangeConfrimPassword: cy.stub().as('onChangeConfrimPassword'),
        onChangePassword: cy.stub().as('onChangePassword'),
        goToBackPage: cy.stub().as('goToBackPage'),
      };
  
      cy.mount(
        <MemoryRouter>
          <RegisterComponent {...props} />
        </MemoryRouter>
      );
    });
  
    it('renders all input fields and buttons', () => {
      cy.get('input[placeholder="Full Name"]').should('exist');
      cy.get('input[placeholder="Username"]').should('exist');
      cy.get('input[placeholder="Email"]').should('exist');
      cy.get('input[placeholder="Phone Number"]').should('exist');
      cy.get('input[placeholder="Confirm Password"]').should('exist');
      cy.get('input[placeholder="Password"]').should('exist');
      cy.contains('Register').should('exist');
      cy.contains('Back').should('exist');
    });
  

  it('calls onChange handlers when typing', () => {
    cy.get('input[placeholder="Full Name"]').type('Aayush');
    cy.get('@onChangeFullName').should('have.been.called');

    cy.get('input[placeholder="Username"]').type('aayush');
    cy.get('@onChangeUserName').should('have.been.called');

    cy.get('input[placeholder="Email"]').type('aayush@example.com');
    cy.get('@onChangeEmail').should('have.been.called');

    cy.get('input[placeholder="Phone Number"]').type('9876543210');
    cy.get('@onChangePhoneNumber').should('have.been.called');

    cy.get('input[placeholder="Confirm Password"]').type('pass123');
    cy.get('@onChangeConfrimPassword').should('have.been.called');

    cy.get('input[placeholder="Password"]').type('pass123');
    cy.get('@onChangePassword').should('have.been.called');
  });

  it('submits the form and triggers register', () => {
    cy.get('form').submit();
    cy.get('@register').should('have.been.called');
  });

  it('clicks the back button', () => {
    cy.contains('Back').click();
    cy.get('@goToBackPage').should('have.been.called');
  });
});
