import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header.jsx';
import { Provider } from 'react-redux';
import { store } from "../../app/store.js"
import { BrowserRouter } from 'react-router-dom';

// Mock hooks and services as needed
jest.mock('../../hooks/useTopLoader', () => ({
  __esModule: true,
  default: () => ({ topLoaderNumber: 100 }),
}));

jest.mock('../../hooks/useUser', () => ({
  __esModule: true,
  default: () => ({ user: { role: 'user' } }),
}));

jest.mock('../../services/Auth', () => ({
  logout: jest.fn().mockResolvedValue({}),
}));

describe('Header Component', () => {
  test('renders header', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
  });

  test('toggles mobile navigation', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    
    const navMenu = screen.getByRole('navigation');
    expect(navMenu).toHaveClass('open');
    
    fireEvent.click(toggleButton);
    expect(navMenu).not.toHaveClass('open');
  });

  test('logs out correctly', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    
    fireEvent.click(screen.getByText('Logout'));
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
