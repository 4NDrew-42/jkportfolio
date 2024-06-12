import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#clients">Clients</a>
        <a href="#content">Content</a>
      </div>
      <div className="footer-socials">
        <a href="https://twitter.com">Twitter</a>
        <a href="https://facebook.com">Facebook</a>
        <a href="https://linkedin.com">LinkedIn</a>
        <a href="https://instagram.com">Instagram</a>
      </div>
      <p className="footer-disclaimer">
        © 2024 James Klein. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
