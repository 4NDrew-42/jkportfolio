import React, { useState } from 'react';
import './Navbar.css';
import ContactModal from '../ContactModal/ContactModal';

const Navbar = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const openContactModal = () => {
    setShowContactModal(true);
  };

  const closeContactModal = () => {
    setShowContactModal(false);
  };

  return (
    <nav className="navbar">
      <h1>James Klein Portfolio</h1>
      <ul>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#content">Content</a></li>
        <li><a href="#clients">Clients</a></li>
        <li><a href="#" onClick={openContactModal}>Contact</a></li>
      </ul>
      {showContactModal && <ContactModal closeModal={closeContactModal} />}
    </nav>
  );
};

export default Navbar;
