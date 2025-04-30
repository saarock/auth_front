// AdminDashBoardNav.cy.jsx
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AdminDashBoardNav from './AdminDashBoardNav';

// Mock Redux store and state
const mockStore = (state) => createStore(() => state);

describe('<AdminDashBoardNav />', () => {
  it('renders dashboard navigation for admin user', () => {
    const initialState = {
      auth: {
        user: {
          fullName: 'Admin User',
        },
      },
    };

    const store = mockStore(initialState);

    cy.mount(
      <Provider store={store}>
        <MemoryRouter>
          <AdminDashBoardNav />
        </MemoryRouter>
      </Provider>
    );

    // Check that the greeting contains "Admin User"
    cy.get('.user-name').should('contain', 'Welcome, Admin User');

    // Ensure that the navigation items are rendered
    cy.get('.nav-links .nav-item').should('have.length', 5);

    // Check if the "Add Product" link has the correct text and icon
    cy.get('.nav-link').first().should('contain', 'Add Product');

    // Check if the link for "Manage Users" exists
    cy.get('.nav-link').eq(2).should('contain', 'Manage Users');

    // Check for proper className on active link
    cy.get('.nav-link').first().should('have.class', 'nav-link');
  });
});
