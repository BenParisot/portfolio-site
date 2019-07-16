import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hr from './components/Hr';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Hr color="#f04d4d" />
      <About />
      <Hr color="#f26639" />
      <Projects />
      <Hr color="#f26639" />
      <Work />
      <Hr color="#f04d4d" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
