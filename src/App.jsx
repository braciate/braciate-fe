import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import FilosofiLogo from './components/FilosofiLogo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div className='about-filosofi'>
        <AboutUs />
        <FilosofiLogo />
      </div>
    </div>
  );
}

export default App;
