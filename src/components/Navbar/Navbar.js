import React, { useState } from 'react';
import './Navbar.css';
import ContactModal from '../ContactModal/ContactModal';

const Navbar = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openContactModal = () => {
    setShowContactModal(true);
  };

  const closeContactModal = () => {
    setShowContactModal(false);
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
        <li><a href="https://www.jkphotography.website/" target="_blank">Legacy Site</a></li>
        <li><a href="#" onClick={openContactModal}>Contact</a></li>
      </ul>
      {showContactModal && <ContactModal closeModal={closeContactModal} />}
    </nav>
  );
};

export default Navbar;
