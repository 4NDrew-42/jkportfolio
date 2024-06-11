import React from 'react';
import './Projects.css';
import caseStudiesData from '../../caseStudies.json';

const Projects = ({ openModal }) => {
  return (
    <div className="projects">
      <h2>Coding Case Studies</h2>
      <div className="carousel-container">
        {caseStudiesData.caseStudies.map((study) => (
          <div key={study.title} className="project-card" onClick={() => openModal(study.title)}>
            <h3>{study.title}</h3>
            <p>{study.overview.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
