import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <footer className="footer">
      
       <div className="footer-socials">
        <a href="https://x.com/AetherSync" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://medium.com/@jamesandrewklein" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMedium} />
        </a>
      </div>
      <p className="footer-disclaimer">
        © 2024 James Klein. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
