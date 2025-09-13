import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactMap from '../../components/ContactMap/ContactMap';
import { useContact } from './useContact';
import './Contact.css';

const Contact = () => {
  const { 
    contactHero, 
    contactInfo, 
    officeLocations, 
    contactMethods, 
    faqs 
  } = useContact();

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>{contactHero.title}</h1>
            <p>{contactHero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods section">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-methods-grid">
            {contactMethods.map((method) => (
              <div key={method.id} className="contact-method">
                <div className="method-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                <p>{method.description}</p>
                <div className="method-contact">{method.contact}</div>
                <div className="method-response">{method.responseTime}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="contact-form-section section">
        <div className="container">
          <div className="contact-form-grid">
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <ContactForm />
            </div>
            <div className="contact-map-container">
              <h3>Our Location</h3>
              <ContactMap />
              <div className="location-info">
                <h4>New York Headquarters</h4>
                <p>{contactInfo.address.street}</p>
                <p>{contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}</p>
                <p><strong>Phone:</strong> {contactInfo.phone.main}</p>
                <p><strong>Hours:</strong> {contactInfo.hours.weekdays}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="office-locations section">
        <div className="container">
          <h2>Our Offices</h2>
          <div className="offices-grid">
            {officeLocations.map((office) => (
              <div key={office.id} className={`office-card ${office.primary ? 'primary' : ''}`}>
                <h3>{office.name}</h3>
                <p className="office-address">{office.address}</p>
                <p className="office-phone">{office.phone}</p>
                <p className="office-email">{office.email}</p>
                <p className="office-manager">Manager: {office.manager}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <div key={faq.id} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;