import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import FilosofiLogo from "./components/FilosofiLogo";
import VisionMission from "./components/VisionMission";
import EventTheme from "./components/EventTheme";
import Rangkaian from "./components/Rangkaian";
import Panduan from "./components/Panduan";
import Nominasi from "./components/Nominasi";
import Faq from "./components/Faq";
import Sponsorship from "./components/Sponsorship";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div className="about-filosofi">
        <AboutUs />
        <FilosofiLogo />
      </div>
      <VisionMission />
      <EventTheme />
      <Rangkaian />
      <Panduan />
      <Nominasi />
      <Faq />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow"></main>
        <Sponsorship />
        <br></br>
        <br></br>
        <Footer />
      </div>
    </div>
  );
}

export default App;
