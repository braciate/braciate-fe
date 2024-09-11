import React from "react";
import heroTitle from "../assets/img/herotitlenotrophy.svg";
import pialaImg from "../assets/img/piala.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <main className="hero-section" id="home">
      <div className="hero-title">
        <img id="piala-img" src={pialaImg} alt="" loading="lazy" />
        <img id="title-hero" src={heroTitle} alt="" />
      </div>
    </main>
  );
};

export default HeroSection;
