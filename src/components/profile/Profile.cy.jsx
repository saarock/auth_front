import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../features/auth/authSlice'; // update the path to your reducer
import Profile from './Profile';
import '../../index.css';

describe('<Profile />', () => {
  const initialState = {
    auth: {
      user: {
        email: 'test@example.com',
        phoneNumber: '1234567890',
        isActive: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      isAuthenticated: true,
      loading: false,
      error: null,
    },
  };

  const makeStore = (state = initialState) =>
    configureStore({
      reducer: {
        auth: authReducer,
      },
      preloadedState: state,
    });

  it('renders profile information correctly', () => {
    const store = makeStore();

    cy.mount(
      <Provider store={store}>
        <Profile />
      </Provider>
    );

    cy.contains('Your Profile').should('exist');
    cy.get('input[name="email"]').should('have.value', 'test@example.com');
    cy.get('input[name="phoneNumber"]').should('have.value', '1234567890');

  });

  it('allows editing and saving profile info', () => {
    const store = makeStore();

    cy.mount(
      <Provider store={store}>
        <Profile />
      </Provider>
    );

    cy.get('.profile-edit-btn').click();
    cy.get('input[name="phoneNumber"]').clear().type('9998887777');
    cy.get('.profile-edit-btn').click(); // Save

    // Confirm value changed in input
    cy.get('input[name="phoneNumber"]').should('have.value', '9998887777');
  });
});
