import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hr from './components/Hr';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

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
      <Footer />
    </div>
  );
}

export default App;
