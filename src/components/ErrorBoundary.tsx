import React from 'react';
import { useRouteError, Link, isRouteErrorResponse } from 'react-router-dom';
import './ErrorBoundary.css';

const ErrorBoundary: React.FC = () => {
  const error = useRouteError();
  
  let errorMessage = 'Unknown error';
  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || error.data?.message || 'Unknown error';
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  }

  return (
    <div className="error-container">
      <div className="error-content">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="error-message">
          {errorMessage}
        </p>
        <div className="error-actions">
          <Link to="/" className="home-button">
            Go to Home
          </Link>
          <button 
            onClick={() => window.location.reload()} 
            className="retry-button"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundary; 