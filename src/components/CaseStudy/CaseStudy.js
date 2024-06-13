import React from 'react';
import './CaseStudy.css';
import caseStudiesData from '../../caseStudies.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const CaseStudy = ({ studyId }) => {
  const study = caseStudiesData.caseStudies.find(cs => cs.title === studyId);

  if (!study) {
    return <div>Case study not found.</div>;
  }

  const handleLiveDemo = () => {
    if (study.title === 'ChatApp') {
      alert('Sorry, no live demo exists for Chat App. Please follow the README on GitHub and use your favored emulator to run the emulation.');
    } else {
      window.open(study.url, '_blank');
    }
  };


  return (
    <div className="case-study">
      <div className="modal-header">
        <div className="modal-title-container">
          <img src={study.icon} alt={`${study.title} icon`} className="modal-icon" />
          <div>
            <div className="modal-title">{study.title}</div>
            <h4>{study.subtitle}</h4>
          </div>
        </div>
        <div className="modal-buttons">
          <button className="button" onClick={handleLiveDemo}>
            <FontAwesomeIcon icon={faGlobe} /> Live Demo
          </button>
          {study.title === 'ArtCine' && (
            <button className="button" onClick={() => window.open(study.url2, '_blank')}>
              <FontAwesomeIcon icon={faGlobe} /> Live Demo (React)
            </button>
          )}
          <button className="button" onClick={() => window.open(study.githubRepo, '_blank')}>
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </button>
        </div>
      </div>
      <div className="underline"></div>

      <div className="column">
        <div className="media-container">
          {study.media[0] && (
            study.media[0].type === 'image' ? (
              <img src={study.media[0].url} alt={`${study.title} media 1`} className="media-item" />
            ) : (
              <video controls className="media-item">
                <source src={study.media[0].url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          )}
        </div>

        <div className="cards-container">
          <div className="card">
            <h3>Overview, Purpose, and Objective</h3>
            <p><strong>Overview:</strong> {study.overview}</p>
            <p><strong>Purpose and Context:</strong> {study.purposeAndContext}</p>
            <p><strong>Objective:</strong> {study.objective}</p>
          </div>

          <div className="media-container">
            {study.media[1] && (
              study.media[1].type === 'image' ? (
                <img src={study.media[1].url} alt={`${study.title} media 2`} className="media-item" />
              ) : (
                <video controls className="media-item">
                  <source src={study.media[1].url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )
            )}
          </div>

          <div className="card">
            <h3>Tools, Skills, Methodologies</h3>
            <p><strong>Technologies:</strong> {study.toolsSkillsMethodologies.technologies.join(', ')}</p>
            <p><strong>Tools:</strong> {study.toolsSkillsMethodologies.tools.join(', ')}</p>
            <p><strong>Methodologies:</strong> {study.toolsSkillsMethodologies.methodologies.join(', ')}</p>
          </div>

          {study.processAndApproach.slice(0, 3).map((step, index) => (
            <div className="card" key={index}>
              <h3>{step.title}</h3>
              <p>{step.details}</p>
            </div>
          ))}

          <div className="media-container">
            {study.media[2] && (
              study.media[2].type === 'image' ? (
                <img src={study.media[2].url} alt={`${study.title} media 3`} className="media-item" />
              ) : (
                <video controls className="media-item">
                  <source src={study.media[2].url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )
            )}
          </div>

          {study.processAndApproach.slice(3, 6).map((step, index) => (
            <div className="card" key={index}>
              <h3>{step.title}</h3>
              <p>{step.details}</p>
            </div>
          ))}

          <div className="media-container">
            {study.media[3] && (
              study.media[3].type === 'image' ? (
                <img src={study.media[3].url} alt={`${study.title} media 4`} className="media-item" />
              ) : (
                <video controls className="media-item">
                  <source src={study.media[3].url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )
            )}
          </div>

          {study.processAndApproach.slice(6, 10).map((step, index) => (
            <div className="card" key={index}>
              <h3>{step.title}</h3>
              <p>{step.details}</p>
            </div>
          ))}

          <div className="card">
            <h3>Challenges and Solutions</h3>
            {study.challengesAndSolutions.map((item, index) => (
              <div key={index}>
                <h4>{item.challenge}</h4>
                <p>{item.solution}</p>
              </div>
            ))}
          </div>

          <div className="card">
            <h3>Conclusions and Reflections</h3>
            <h4>Final Solution</h4>
            <p>{study.conclusionAndReflections.finalSolution}</p>
            <h4>Reflections</h4>
            <p>{study.conclusionAndReflections.reflections}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
