import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../sections/HeroSection/HeroSection';
import StatsSection from '../../sections/StatsSection/StatsSection';
import ServicesSection from '../../sections/ServicesSection/ServicesSection';
import WhyChooseSection from '../../sections/WhyChooseSection/WhyChooseSection';
import { useHome } from './useHome';
import './Home.css';

const Home = () => {
  const { pageData } = useHome();

  return (
    <div className="home-page">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseSection />
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Find Your Perfect Match?</h2>
            <p>Let's discuss your recruitment needs and find the ideal solution for your business.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get Started Today
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;