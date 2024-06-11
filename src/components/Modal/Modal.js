import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modalOverlay" onClick={handleOverlayClick}>
      <div className="modalContent">
        <button className="modalClose" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
