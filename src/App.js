import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hr from './components/Hr';

function App() {
  return (
    <div className="App">
      <Header />
      <Hr color="#f04d4d" />
      <Footer />
    </div>
  );
}

export default App;
