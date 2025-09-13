import React from 'react';
import { Link } from 'react-router-dom';
import { useNotFound } from './useNotFound';
import './NotFound.css';

const NotFound = () => {
  const { goHome } = useNotFound();

  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <div className="not-found-icon">🔍</div>
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Page Not Found</h2>
          <p className="not-found-description">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary" onClick={goHome}>
              Return Home
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;