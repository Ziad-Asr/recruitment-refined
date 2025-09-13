import React from 'react';
import { useAbout } from './useAbout';
import './About.css';

const About = () => {
  const { aboutHero, companyStory, mission, teamMembers, achievements } = useAbout();

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="hero-text">
              <h1>{aboutHero.title}</h1>
              <p>{aboutHero.subtitle}</p>
            </div>
            <div className="hero-image">
              <img src={aboutHero.image} alt="Career Link Team" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story section">
        <div className="container">
          <h2>{companyStory.title}</h2>
          <div className="story-content">
            {companyStory.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mission-section section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>{mission.title}</h2>
              <p className="mission-statement">{mission.content}</p>
            </div>
            <div className="values-grid">
              {mission.values.map((value, index) => (
                <div key={index} className="value-item">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="team-section section">
        <div className="container">
          <h2>Meet Our Leadership Team</h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <h4>{member.position}</h4>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements-section section">
        <div className="container">
          <h2>Our Achievements</h2>
          <div className="achievements-timeline">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <div className="achievement-year">{achievement.year}</div>
                <div className="achievement-content">
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;