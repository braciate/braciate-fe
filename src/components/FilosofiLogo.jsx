import React, { useState } from "react";
import GlitterLeft from "../assets/img/glitterfilosofi-left.svg";
import GlitterRight from "../assets/img/glitterfilosofi-right.svg";
import FilosofiLogoImg from "../assets/img/filosofilogo-text.svg";
import logo1 from "../assets/img/filosofilogo-1.svg";
import logo2 from "../assets/img/filosofilogo-2.svg";
import logo3 from "../assets/img/filosofilogo-3.svg";
import logo4 from "../assets/img/filosofilogo-4.svg";
import logo5 from "../assets/img/filosofilogo-5.svg";
import panahIcon from "../assets/img/panahdot.svg";
import preview1 from "../assets/img/previewlogo-1.png";
import "./FilosofiLogo.css";

const FilosofiLogo = () => {
  const slides = [
    <div className="slide">
      <img src={logo1} alt="" />
      <div className="logo-info">
        <h1>KILAU EMAS KEJAYAAN</h1>
        <p>
          Warna emas melambangkan prestasi, kemakmuran, dan keberhasilan yang
          diraih oleh seluruh Simpul Brawijaya, mencerminkan kekuatan dan
          pencapaian yang terus bersinar.
        </p>
      </div>
    </div>,
    <div className="slide">
      <img src={logo2} alt="" />
    </div>,
    <div className="slide"></div>,
    <div className="slide"></div>,
    <div className="slide"></div>,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <main className="filosofi-logo">
      <div className="filosofi-glitter">
        <img src={GlitterLeft} alt="" />
      </div>
      <img src={FilosofiLogoImg} alt="" id="filosofi-logo-img" />
      <div className="carousel-and-preview">
        <img src={preview1} alt="" />
        <div className="carousel-and-indicators">
          <div className="carousel">
            <div
              className="carousel-inner"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="carousel-slide">
                  {slide}
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-controls">
            <img
              src={panahIcon}
              onClick={goToPrevious}
              id="panah-kiri"
              alt=""
            />
            <div className="carousel-indicators">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`carousel-indicator ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <img src={panahIcon} onClick={goToNext} id="panah-kanan" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FilosofiLogo;
