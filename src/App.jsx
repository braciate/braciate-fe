import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import FilosofiLogo from './components/FilosofiLogo';
import VisionMission from './components/VisionMission';
import EventTheme from './components/EventTheme';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div className='about-filosofi'>
        <AboutUs />
        <FilosofiLogo />
      </div>
      <VisionMission />
      <EventTheme />
    </div>
  );
}

export default App;
