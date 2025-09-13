import React from 'react';
import { Link } from 'react-router-dom';
import { useServicesSection } from './useServicesSection';
import './ServicesSection.css';

const ServicesSection = () => {
  const { servicesData } = useServicesSection();

  return (
    <section className="services-section section">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive recruitment solutions tailored to your business needs</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index} className="service-feature">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link to="/services" className="service-link">
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;