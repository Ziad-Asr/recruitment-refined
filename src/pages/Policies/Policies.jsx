import React from 'react';
import { Link } from 'react-router-dom';
import { usePolicies } from './usePolicies';
import './Policies.css';

const Policies = () => {
  const { 
    policiesHero, 
    policies, 
    contactInfo, 
    activePolicy, 
    setActivePolicy 
  } = usePolicies();

  return (
    <div className="policies-page">
      {/* Hero Section */}
      <section className="policies-hero">
        <div className="container">
          <div className="policies-hero-content">
            <h1>{policiesHero.title}</h1>
            <p>{policiesHero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Policies Content */}
      <section className="policies-content section">
        <div className="container">
          <div className="policies-layout">
            {/* Sidebar Navigation */}
            <div className="policies-sidebar">
              <h3>Our Policies</h3>
              <nav className="policies-nav">
                {policies.map((policy) => (
                  <button
                    key={policy.id}
                    className={`policy-nav-btn ${activePolicy === policy.id ? 'active' : ''}`}
                    onClick={() => setActivePolicy(policy.id)}
                  >
                    {policy.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="policies-main">
              {policies.map((policy) => (
                activePolicy === policy.id && (
                  <div key={policy.id} className="policy-content">
                    <div className="policy-header">
                      <h2>{policy.title}</h2>
                      <p className="last-updated">Last updated: {policy.lastUpdated}</p>
                    </div>

                    <div className="policy-sections">
                      {policy.sections.map((section, index) => (
                        <div key={index} className="policy-section">
                          <h3>{section.title}</h3>
                          <p>{section.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="policies-contact section">
        <div className="container">
          <div className="contact-card">
            <h2>{contactInfo.title}</h2>
            <p>{contactInfo.description}</p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <a href={`mailto:${contactInfo.email}`} className="contact-link">
                  {contactInfo.email}
                </a>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong>
                <a href={`tel:${contactInfo.phone}`} className="contact-link">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
            <div className="contact-actions">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/" className="btn btn-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policies;