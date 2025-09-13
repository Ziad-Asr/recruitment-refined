import React from 'react';
import { useContactForm } from './useContactForm';
import './ContactForm.css';

const ContactForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    handleInputChange,
    handleSubmit
  } = useContactForm();

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className={errors.firstName ? 'error' : ''}
            required
          />
          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className={errors.lastName ? 'error' : ''}
            required
          />
          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={errors.email ? 'error' : ''}
          required
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className={errors.phone ? 'error' : ''}
        />
        {errors.phone && <span className="error-message">{errors.phone}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="company">Company Name</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Subject *</label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className={errors.subject ? 'error' : ''}
          required
        >
          <option value="">Select a subject</option>
          <option value="recruitment">Recruitment Services</option>
          <option value="consultation">Free Consultation</option>
          <option value="partnership">Partnership Opportunities</option>
          <option value="support">Customer Support</option>
          <option value="other">Other</option>
        </select>
        {errors.subject && <span className="error-message">{errors.subject}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleInputChange}
          className={errors.message ? 'error' : ''}
          placeholder="Please provide details about your recruitment needs..."
          required
        ></textarea>
        {errors.message && <span className="error-message">{errors.message}</span>}
      </div>

      <button 
        type="submit" 
        className="btn btn-primary submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;