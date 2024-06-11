import React from 'react';
import './Content.css';

function Content() {
  return (
    <div className="content">
      <h2>My Creative Content</h2>
      <div className="category">
        <h3>Videography</h3>
        <p>Examples of my video projects and cinematography.</p>
      </div>
      <div className="category">
        <h3>Photography</h3>
        <p>Gallery of my professional photoshoots and artistic photography.</p>
      </div>
      <div className="category">
        <h3>Podcasts</h3>
        <p>Listen to my series of informative and engaging podcasts.</p>
      </div>
      <div className="category">
        <h3>Coding</h3>
        <p>Overviews of my coding projects, including source code and live demos.</p>
      </div>
    </div>
  );
}

export default Content;
