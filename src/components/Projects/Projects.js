import React from 'react';
import './Projects.css';
import caseStudiesData from '../../caseStudies.json';

const Projects = ({ openModal }) => {
  return (
    <div className="projects">
      <h2>Case Studies</h2>
      <div className="carousel-container">
        {caseStudiesData.caseStudies.map((study) => (
          <div
            key={study.title}
            className="project-card"
            onClick={() => openModal(study.title)}
          >
            <div
              className="project-thumbnail"
              style={{ backgroundImage: `url(${study.thumbnail})` }}
            ></div>
            <div className="project-content">
              <div className="title-container">
                <img src={study.icon} alt={`${study.title} icon`} className="project-icon" />
                <h3>{study.title}</h3>
              </div>
              <h4>{study.subtitle}</h4>
              <p>{study.overview}</p>
              <div className="buttons">
                <a href={study.url} className="button" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={study.githubRepo} className="button" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
