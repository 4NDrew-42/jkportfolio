import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <h1>Welcome to My Portfolio</h1>
      <p>Discover my projects, skills, and professional journey.</p>
      <button onClick={() => window.scrollTo({
        top: document.getElementById('aboutMe').offsetTop,
        behavior: 'smooth'
      })}>Learn More</button>
    </div>
  );
}

export default Hero;
