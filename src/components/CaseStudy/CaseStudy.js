import React from 'react';
import './CaseStudy.css';
import caseStudiesData from '../../caseStudies.json';

const CaseStudy = ({ studyId }) => {
  const study = caseStudiesData.caseStudies.find(cs => cs.title === studyId);

  if (!study) {
    return <div>Case study not found.</div>;
  }

  return (
    <div className="case-study">
      <div className="header">
        <div className="icon-title">
          <img src={study.icon} alt={`${study.title} icon`} className="large-icon" />
          <div className="title-container">
            <h1>{study.title}</h1>
            <hr className="title-underline" />
            <h4>{study.subtitle}</h4>
          </div>
        </div>
        <img src={study.images[0]} alt={`${study.title} screenshot`} className="main-screenshot" />
      </div>

      <div className="cards-container">
        <div className="card">
          <h2>Overview, Purpose, and Objective</h2>
          <p><strong>Overview:</strong> {study.overview}</p>
          <p><strong>Purpose and Context:</strong> {study.purposeAndContext}</p>
          <p><strong>Objective:</strong> {study.objective}</p>
        </div>
        <div className="card">
          <h2>Tools, Skills, Methodologies</h2>
          <p><strong>Technologies:</strong> {study.toolsSkillsMethodologies.technologies.join(', ')}</p>
          <p><strong>Tools:</strong> {study.toolsSkillsMethodologies.tools.join(', ')}</p>
          <p><strong>Methodologies:</strong> {study.toolsSkillsMethodologies.methodologies.join(', ')}</p>
        </div>

        <img src={study.images[1]} alt={`${study.title} screenshot`} className="main-screenshot" />

        <div className="card">
          <h2>Process and Approach</h2>
          {study.processAndApproach.map((step, index) => (
            <div key={index}>
              <h3>{step.title}</h3>
              <p>{step.details}</p>
            </div>
          ))}
        </div>
        <div className="card">
          <h2>Testing</h2>
          {study.processAndApproach.slice(3, 6).map((step, index) => (
            <div key={index}>
              <h3>{step.title}</h3>
              <p>{step.details}</p>
            </div>
          ))}
        </div>

        <img src={study.images[2]} alt={`${study.title} screenshot`} className="main-screenshot" />

        <div className="card">
          <h2>Project Specifics</h2>
          {study.processAndApproach.slice(6, 10).map((step, index) => (
            <div key={index}>
              <h3>{step.title}</h3>
              <p>{step.details}</p>
            </div>
          ))}
        </div>
        <div className="card">
          <h2>Challenges and Solutions</h2>
          {study.challengesAndSolutions.map((item, index) => (
            <div key={index}>
              <h3>{item.challenge}</h3>
              <p>{item.solution}</p>
            </div>
          ))}
        </div>
        <div className="card">
          <h2>Conclusions and Reflections</h2>
          <h3>Final Solution</h3>
          <p>{study.conclusionAndReflections.finalSolution}</p>
          <h3>Reflections</h3>
          <p>{study.conclusionAndReflections.reflections}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
