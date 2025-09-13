import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useHeader } from './useHeader';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const { 
    navigationItems, 
    companyInfo, 
    isMobileMenuOpen, 
    toggleMobileMenu,
    closeMobileMenu 
  } = useHeader();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="header-logo" onClick={closeMobileMenu}>
            <h2 className="logo-text">{companyInfo.name}</h2>
            <span className="logo-tagline">{companyInfo.tagline}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header-nav desktop-nav">
            <ul className="nav-list">
              {navigationItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <Link 
                    to={item.path} 
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="header-contact desktop-only">
            <a href={`tel:${companyInfo.phone}`} className="contact-link">
              {companyInfo.phone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`header-nav mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {navigationItems.map((item) => (
              <li key={item.id} className="nav-item">
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mobile-contact">
            <a href={`tel:${companyInfo.phone}`} className="contact-link">
              {companyInfo.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;