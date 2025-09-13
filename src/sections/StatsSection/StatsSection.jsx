import React from 'react';
import { useStatsSection } from './useStatsSection';
import './StatsSection.css';

const StatsSection = () => {
  const { statsData } = useStatsSection();

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat) => (
            <div key={stat.id} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;