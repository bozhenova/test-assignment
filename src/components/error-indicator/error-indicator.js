import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className='error-indicator'>
      <span className='oops'>OOPS!</span>
      <span>Something is wrong</span>
      <span>Try later</span>
    </div>
  );
};

export default ErrorIndicator;
