// React Component for loading skeleton effect in a container
import React from 'react';
import './LoadingContainer.css';

const LoadingContainer = () => {
  return (
    <div className="loading-container">
      <div className="loading-card">
        <div className="loading-image"></div>
        <div className="loading-text"></div>
        <div className="loading-text"></div>
        <div className="loading-button"></div>
      </div>
    </div>
  );
};

export default LoadingContainer;
