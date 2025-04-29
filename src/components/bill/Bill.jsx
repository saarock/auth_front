import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Bill.css';
import { deleteFromCart } from '../../features/product/productSlice';

const Bill = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleDelete = (productId) => {
    dispatch(deleteFromCart({ productId }));
  };

  // Calculate total price
  const totalPrice = products?.reduce((sum, product) => sum + (product.totalPrice || 0), 0).toFixed(2);

  return (
    <>
    {
        products?.length > 0 ? <div className="bill-container">
        <h2 className="bill-title">Your Bill</h2>
        <div className="product-list-container">
          {products?.length === 0 ? (
            <p className="empty-message">No products in the bill</p>
          ) : (
            <div className="product-list">
              {products?.map((product) => (
                <div key={product.productId} className="product-card">
                  <img
                    src={product.imageUrl}
                    alt={product.productName}
                    className="product-image"
                  />
                  <div className="product-details">
                    <h3 className="product-name">{product.productName}</h3>
                    <p className="product-info">
                      <strong>Items:</strong> {product.totalItem}
                    </p>
                    <p className="product-info">
                      <strong>Price:</strong> RS: {product.totalPrice?.toFixed(2)}
                    </p>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(product.productId)}
                    >
                      ✕ Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {products?.length > 0 && (
          <div className="bill-summary">
            <p className="total-price">
              <strong>Total:</strong> RS: {totalPrice}
            </p>
            <button className="buy-button">✓ Proceed to Checkout</button>
          </div>
        )}
      </div>: ""
    }
    </>
  );
};

export default Bill;