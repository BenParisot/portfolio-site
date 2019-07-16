import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hr from './components/Hr';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Hr color="#f04d4d" />
      <Footer />
    </div>
  );
}

export default App;
