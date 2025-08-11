import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../../data/projects';
import './Projects.module.css';

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title animated-pop">Recent Projects</h2>
        <p className="section-subtitle animated-pop delay">
          A showcase of my recent work across different domains
        </p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;