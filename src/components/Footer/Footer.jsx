import React from 'react';
import { Link } from 'react-router-dom';
import { useFooter } from './useFooter';
import './Footer.css';

const Footer = () => {
  const { 
    companyInfo, 
    quickLinks, 
    services, 
    contactInfo, 
    socialLinks, 
    currentYear 
  } = useFooter();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">{companyInfo.name}</h3>
            <p className="footer-text">{companyInfo.description}</p>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a 
                  key={link.id} 
                  href={link.url} 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Our Services</h4>
            <ul className="footer-links">
              {services.map((service) => (
                <li key={service.id}>
                  <span className="footer-link">{service.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>{contactInfo.address}</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href={`tel:${contactInfo.phone}`} className="contact-link">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href={`mailto:${contactInfo.email}`} className="contact-link">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="footer-legal">
              <Link to="/policies" className="footer-legal-link">Privacy Policy</Link>
              <Link to="/policies" className="footer-legal-link">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;