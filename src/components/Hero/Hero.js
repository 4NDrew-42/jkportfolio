import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="container">
      <div className="pic">
        <img src="/images/JamesKleinProfile.png" alt="Profile Picture" />
      </div>
      <div className="greet">
        <h1>JAMES KLEIN - Full Stack Dev</h1>
        <p>
          With over a decade of experience in the creative industry, I specialize in bringing concepts to life through comprehensive multimedia storytelling.
        </p>
      </div>
    </div>
  );
}

export default Hero;
