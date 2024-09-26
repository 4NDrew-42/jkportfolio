import React from 'react';
import './AboutMe.css';

const AboutMeModal = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>&times;</button>
        <h2 className="modal-title">About Me</h2>
        <div className="modal-text">
          <p>
            I'm James, a newly minted full stack developer with fifteen years of previous experience as a creative producer. My creative interests started very early. As a child, I spent all of my free time sketching from life and imagination.
          </p>
          <p>
            I developed these abilities throughout high school as the school paper illustrator, then won a full scholarship to the Art Institute of Phoenix. In the 3D animation program, I learned to use computers creatively.
          </p>
          <p>
            My artistic horizons expanded from photo and video editing to full CGI in Maya and 3DS MAX; my creative and artistic horizons expanded infinitely.
          </p>
          <p>
            My first job with FG Squared in Austin exposed me to the world of marketing. I completed an animated trade show video for Tokyo Electron, among other projects, but I wanted more input in the process and broader education. I headed from Austin to Los Angeles and attended UCLA, earning a bachelor's degree in media arts and cinema.
          </p>
          <p>
            While at UCLA, I was asked to perform many photo assignments, eventually developing a client list and career in photography as James Klein Photography, Inc. As DSLR video improved, I added videography and editing to my professional services offerings.
          </p>
          <p>
            I relocated with my family to Houston, where I again began creating marketing videos. My clients typically relied on my guidance for projects from start to finish, and my skills developed as a creative director and creative producer. As a result, my client list multiplied as I took on additional responsibilities.
          </p>
          <p>
            The scope and budgets grew, and I brought on a talented group of creatives to assist me in completing these new challenging projects.
          </p>
          <p>
            I am a lifetime learner, always seeking new knowledge and skills. During this time, I developed my creative vision and achieved one of my life goals, earning my master's degree at HBU. Adding web design and social media management skills to my repertoire, I feel my unique collection of creative, design, production, and marketing skills enable me to offer complete media solutions to clients of all sizes.
          </p>
          <p>
            James Klein Photography Inc. does not entirely describe my services. However, as a professional who guides and advises others on rebranding, I rebranded my own company in December 2019 to more effectively communicate my extensive skill set in digital marketing. I currently operate as SDKIK Digital Media.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeModal;
