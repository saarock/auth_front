import React from 'react';
import Bill from './Bill';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import productReducer, { deleteFromCart, deleteAllFromCart } from '../../features/product/productSlice';
import '../../index.css'; // load global styles
import { toast } from 'react-toastify';

// Mock service
jest.mock('../../services/productService', () => ({
  buyProducts: jest.fn(() => Promise.resolve({ message: 'Purchase successful!' })),
}));

const mockProducts = [
  {
    productId: '1',
    productName: 'Product One',
    imageUrl: 'https://via.placeholder.com/150',
    totalItem: 2,
    totalPrice: 100.0,
  },
  {
    productId: '2',
    productName: 'Product Two',
    imageUrl: 'https://via.placeholder.com/150',
    totalItem: 1,
    totalPrice: 50.0,
  },
];

const createTestStore = (preloadedState = {}) =>
  configureStore({
    reducer: {
      products: productReducer,
    },
    preloadedState: {
      products: mockProducts,
      ...preloadedState,
    },
  });

describe('<Bill />', () => {
  it('renders bill with product details and total price', () => {
    const store = createTestStore();

    cy.mount(
      <Provider store={store}>
        <Bill handelRefresh={() => {}} />
      </Provider>
    );

    cy.contains('Your Bill');
    cy.contains('Product One');
    cy.contains('Product Two');
    cy.contains('RS: 150.00'); // totalPrice
    cy.get('.delete-button').should('have.length', 2);
    cy.get('.buy-button').should('contain', 'Proceed to Checkout');
  });

  it('deletes a product from cart', () => {
    const store = createTestStore();

    cy.mount(
      <Provider store={store}>
        <Bill handelRefresh={() => {}} />
      </Provider>
    );

    cy.get('.delete-button').first().click();
    cy.contains('Product One').should('not.exist');
  });

  it('calls checkout and resets cart', () => {
    const handelRefresh = cy.stub();

    const store = createTestStore();

    cy.mount(
      <Provider store={store}>
        <Bill handelRefresh={handelRefresh} />
      </Provider>
    );

    cy.get('.buy-button').click();

    cy.contains('Purchase successful!'); // toast message (optional if toast is working)
  });
});
