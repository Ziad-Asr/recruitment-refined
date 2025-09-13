import React from 'react';
import { Link } from 'react-router-dom';
import { useHeroSection } from './useHeroSection';
import './HeroSection.css';

const HeroSection = () => {
  const { heroData, currentImageIndex } = useHeroSection();

  return (
    <section className="hero-section">
      <div className="hero-background">
        {heroData.images.map((image, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="hero-overlay" />
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title fade-in">
            {heroData.title}
          </h1>
          <p className="hero-subtitle fade-in">
            {heroData.subtitle}
          </p>
          <div className="hero-buttons fade-in">
            <Link to="/contact" className="btn btn-primary">
              {heroData.primaryCTA}
            </Link>
            <Link to="/about" className="btn btn-outline">
              {heroData.secondaryCTA}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;