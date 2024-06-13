import React, { useState } from 'react';
import './ContactModal.css';

const ContactModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('contact_service', 'contact_form', e.target, 'Qfj09k2kjK8hawqxj')
      .then((result) => {
        console.log('SUCCESS!', result.text);
        alert('Message sent successfully!');
        setFormData({
          user_name: '',
          user_email: '',
          message: '',
        });
        closeModal();
      }, (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>X</button>
        <h2>Contact Me</h2>
        
        
        <form id="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" value="123456" />
          <label>Name</label>
          <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} />
          <label>Email</label>
          <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} />
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
          <input type="submit" value="Send" />
        </form>
        <div className="modal-socials">
          <a href="https://x.com/AetherSync">X</a>
          <a href="https://linkedin.com">LinkedIn</a>
          <a href="https://medium.com/@jamesandrewklein">Medium</a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
