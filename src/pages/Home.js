import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hr from '../components/Hr';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Work from '../components/Work';
import Contact from '../components/Contact';

function Home() {
  return (
    <div id="top" className="App">
      <Header />
      <Hero />
      <Hr id="about" color="#f04d4d" />
      <About />
      <Hr id="projects" color="#f26639" />
      <Projects />
      <Hr id="experience" color="#f04d4d" />
      <Work />
      <Hr id="contact" color="#f26639" />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
