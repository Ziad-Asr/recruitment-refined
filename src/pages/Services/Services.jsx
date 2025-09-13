import React from 'react';
import { Link } from 'react-router-dom';
import { useServices } from './useServices';
import './Services.css';

const Services = () => {
  const { servicesHero, primaryService, secondaryService, serviceComparison } = useServices();

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>{servicesHero.title}</h1>
            <p>{servicesHero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Primary Service */}
      <section className="primary-service section">
        <div className="container">
          <div className="service-header">
            <h2>{primaryService.title}</h2>
            <h3>{primaryService.subtitle}</h3>
            <p className="service-description">{primaryService.description}</p>
          </div>

          {/* Process Steps */}
          <div className="process-section">
            <h3>Our Process</h3>
            <div className="process-grid">
              {primaryService.process.map((step) => (
                <div key={step.step} className="process-step">
                  <div className="step-number">{step.step}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="benefits-section">
            <h3>Key Benefits</h3>
            <div className="benefits-grid">
              {primaryService.benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="industries-section">
            <h3>Industries We Serve</h3>
            <div className="industries-grid">
              {primaryService.industries.map((industry, index) => (
                <div key={index} className="industry-item">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Service */}
      <section className="secondary-service section">
        <div className="container">
          <div className="service-header">
            <h2>{secondaryService.title}</h2>
            <h3>{secondaryService.subtitle}</h3>
            <p className="service-description">{secondaryService.description}</p>
          </div>

          <div className="features-grid">
            {secondaryService.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="service-note">
            <p>{secondaryService.note}</p>
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="service-comparison section">
        <div className="container">
          <h2>{serviceComparison.title}</h2>
          <div className="comparison-grid">
            <div className="comparison-item">
              <h3>{serviceComparison.traditional.title}</h3>
              <p className="best-for">{serviceComparison.traditional.bestFor}</p>
              <ul>
                {serviceComparison.traditional.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="comparison-item">
              <h3>{serviceComparison.digital.title}</h3>
              <p className="best-for">{serviceComparison.digital.bestFor}</p>
              <ul>
                {serviceComparison.digital.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today to discuss your recruitment needs and find the perfect solution.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Us Now
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;