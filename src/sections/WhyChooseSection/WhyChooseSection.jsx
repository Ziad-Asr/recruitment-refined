import React from 'react';
import { useWhyChooseSection } from './useWhyChooseSection';
import './WhyChooseSection.css';

const WhyChooseSection = () => {
  const { whyChooseData } = useWhyChooseSection();

  return (
    <section className="why-choose-section section">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Career Link?</h2>
          <p>Discover what sets us apart in the recruitment industry</p>
        </div>

        <div className="why-choose-grid">
          {whyChooseData.map((item) => (
            <div key={item.id} className="why-choose-item">
              <div className="why-choose-icon">{item.icon}</div>
              <h3 className="why-choose-title">{item.title}</h3>
              <p className="why-choose-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;