// UserDashBoardNav.cy.jsx
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import UserDashBoardNav from './UserDashBoardNav';

// ✅ mock hooks
const mockUseUser = () => ({
  user: {
    fullName: 'Test User',
    avatar: 'https://example.com/avatar.png',
  },
});

const mockUseSocket = () => ({
  numberOfNotifications: 5,
});

const mockStore = configureStore([]);
const store = mockStore({}); // Adjust your mock state as needed

describe('<UserDashBoardNav />', () => {
  it('renders dashboard with mocked user and notifications', () => {
    cy.mount(
      <Provider store={store}>
        <MemoryRouter>
          <UserDashBoardNav useUser={mockUseUser} useSocket={mockUseSocket} />
        </MemoryRouter>
      </Provider>
    );

    cy.get('.greeting-text').should('contain', 'Welcome, Test User');
    cy.get('.avatar-img').should('have.attr', 'src', 'https://example.com/avatar.png');
    cy.get('.notification-badge').should('contain', '5');
    cy.get('.nav-item').should('have.length', 4);
  });
});
