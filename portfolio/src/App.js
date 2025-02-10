// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/Hero';
import AboutSection from './components/About';
import ProjectsSection from './components/Projects';
import ContactSection from './components/contact.js'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;



