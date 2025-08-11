import React from 'react';
import techStackData from '../../data/techStack';
import TechCard from './TechCard';
import './TechStack.module.css';

const TechStack = () => {
  return (
    <section className="section">
      <h2 className="section-title">Tech Stack</h2>
      <p className="section-subtitle">
        Have experience in the following technologies.
      </p>
      <div className="tech-container">
        {techStackData.map((tech) => (
          <TechCard key={tech.title} title={tech.title} skills={tech.skills} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;