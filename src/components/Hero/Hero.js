import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="container">
      <div className="buttons">
        <img className="pic" src="/images/JamesKleinProfile.png" alt="Profile Picture" />
        <a href="/about-me" className="abutton">About Me</a>
        <a href="/resume" className="abutton">Resume</a>
      </div>
      <div className="greet">
        <h1>JAMES KLEIN: Full Stack Developer</h1>
        <p>With over a decade of experience in the creative industry, I specialize in bringing concepts to life through comprehensive multimedia storytelling. Let’s innovate and inspire together.</p>
      </div>
      
    </div>  
  );
}

export default Hero;

