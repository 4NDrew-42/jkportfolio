import React, { useState } from 'react';
import './Navbar.css';
import ContactModal from '../ContactModal/ContactModal';
import AboutMeModal from '../AboutMe/AboutMe'; // Import the About Me modal component

const Navbar = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showAboutMeModal, setShowAboutMeModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openContactModal = () => {
    setShowContactModal(true);
  };

  const closeContactModal = () => {
    setShowContactModal(false);
  };

  const openAboutMeModal = () => {
    setShowAboutMeModal(true);
  };

  const closeAboutMeModal = () => {
    setShowAboutMeModal(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">JK</h1>
      <div className="hamburger" onClick={handleToggle}>
        &#9776;
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#projects">Coding Projects</a></li>
        <li><a href="#" onClick={openAboutMeModal}>About Me</a></li> {/* Add the About Me click handler */}
        <li><a href="https://drive.google.com/file/d/129rMJzXjfEfBwKM9wRdAfvuDe3Uq5G_Y/view?usp=sharing"
          target="_blank">Resume</a></li>
        <li><a href="https://www.jkphotography.website/" target="_blank">Legacy Site</a></li>
        <li><a href="#" onClick={openContactModal}>Contact</a></li>
      </ul>
      {showContactModal && <ContactModal closeModal={closeContactModal} />}
      {showAboutMeModal && <AboutMeModal closeModal={closeAboutMeModal} />} {/* Render About Me modal */}
    </nav>
  );
};

export default Navbar;
