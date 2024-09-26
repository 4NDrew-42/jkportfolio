import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Content from './components/Content/Content';
import Clients from './components/Clients/Clients';
import Modal from './components/Modal/Modal';
import CaseStudy from './components/CaseStudy/CaseStudy';
import caseStudiesData from './caseStudies.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const openModal = (studyId) => {
    const study = caseStudiesData.caseStudies.find(cs => cs.title === studyId);
    setSelectedCaseStudy(study);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCaseStudy(null);
  };

  return (
    <div className="App">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      
      <section id="projects">
        <Projects openModal={openModal} />
      </section>
      
      {/* <section id="content">
        <Content />
      </section> */}
      
      {/*<section id="clients">
        <Clients />
      </section> */}
      
      <section id="footer">
        <Footer />
      </section>

      <Modal show={showModal} onClose={closeModal}>
        {selectedCaseStudy && <CaseStudy studyId={selectedCaseStudy.title} />}
      </Modal>
    </div>
  );
}

export default App;
