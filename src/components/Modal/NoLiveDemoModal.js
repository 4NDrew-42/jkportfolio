// NoLiveDemoModal.js
import React from 'react';
import './NoLiveDemoModal.css';

const NoLiveDemoModal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <h2>No Live Demo Available</h2>
        </div>
        <div className="modal-body">
          <p>Sorry, no live demo exists for the Chat App.</p>
          <p>
            To run a live demo, please follow the README on GitHub and use your favored emulator to run the emulation.
          </p>
        </div>
        <div className="modal-footer">
          <button onClick={onClose} className="button">Close</button>
        </div>
      </div>
    </div>
  );
};

export default NoLiveDemoModal;
