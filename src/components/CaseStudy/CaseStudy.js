import React, { useEffect, useState } from 'react';
import caseStudiesData from '../../caseStudies.json';

const CaseStudy = ({ studyId }) => {
  const [caseStudy, setCaseStudy] = useState(null);

  useEffect(() => {
    const study = caseStudiesData.caseStudies.find(cs => cs.title === studyId);
    setCaseStudy(study);
  }, [studyId]);

  if (!caseStudy) return <div>Loading...</div>;

  return (
    <div>
      <h1>{caseStudy.title}</h1>
      <section>
        <h2>Overview</h2>
        <p>{caseStudy.overview}</p>
      </section>
      <section>
        <h2>Purpose and Context</h2>
        <p>{caseStudy.purposeAndContext}</p>
      </section>
      <section>
        <h2>Objective</h2>
        <p>{caseStudy.objective}</p>
      </section>
      <section>
        <h2>Credits</h2>
        <p>{caseStudy.credits}</p>
      </section>
      <section>
        <h2>Tools, Skills, Methodologies</h2>
        <ul>
          <li><strong>Technologies:</strong> {caseStudy.toolsSkillsMethodologies.technologies.join(', ')}</li>
          <li><strong>Tools:</strong> {caseStudy.toolsSkillsMethodologies.tools.join(', ')}</li>
          <li><strong>Methodologies:</strong> {caseStudy.toolsSkillsMethodologies.methodologies.join(', ')}</li>
        </ul>
      </section>
      <section>
        <h2>Process and Approach</h2>
        {caseStudy.processAndApproach.map((step, index) => (
          <div key={index}>
            <h3>{step.title}</h3>
            <p>{step.details}</p>
          </div>
        ))}
      </section>
      <section>
        <h2>Challenges and Solutions</h2>
        {caseStudy.challengesAndSolutions.map((cs, index) => (
          <div key={index}>
            <h3>Challenge: {cs.challenge}</h3>
            <p>Solution: {cs.solution}</p>
          </div>
        ))}
      </section>
      <section>
        <h2>Conclusion and Reflections</h2>
        <div>
          <h3>Final Solution</h3>
          <p>{caseStudy.conclusionAndReflections.finalSolution}</p>
        </div>
        <div>
          <h3>Reflections</h3>
          <p>{caseStudy.conclusionAndReflections.reflections}</p>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
