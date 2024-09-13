import React, { useState } from "react";
import LogoImage from "../assets/img/logo.svg";
import LogoTitle from "../assets/img/title.svg";
import close from "../assets/close-slide.svg";
import hamburger from "../assets/hamburger.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlide = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="p-1 md:p-2 navbar-logo">
        <img src={LogoImage} alt="Logo" />
        <img src={LogoTitle} alt="Title" />
      </div>
      <span
        className="flex justify-center h-8 p-1 cursor-pointer w-9 hamburger"
        onClick={toggleSlide}
      >
        <img src={hamburger} alt="open" />
      </span>
      {/* nav mobile */}
      <div
        className={`fixed top-0 right-0 z-50 flex-col justify-around w-3/4 h-screen gap-2 p-8 text-3xl tracking-wider bg-white text-end transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden slide-nav`}
      >
        <span className="cursor-pointer w-max">
          <img
            src={close}
            alt="X"
            className="self-start h-4"
            onClick={toggleSlide}
          />
        </span>
        <ul className="flex flex-col pt-10 h-5/6">
          <li className="py-2 border-b-2 border-white border-opacity-40">
            <a className="cursor-pointer ">HOME</a>
          </li>
          <li className="py-2 border-b-2 border-white border-opacity-40">
            <a className="cursor-pointer ">ABOUT US</a>
          </li>
          <li className="py-2 border-b-2 border-white border-opacity-40">
            <a className="cursor-pointer ">FAQ</a>
          </li>
          <li className="self-center px-8 py-1 mt-4 vote-slide w-max">
            <a className="cursor-pointer ">VOTE NOW</a>
          </li>
        </ul>
        <div className="self-center justify-center mt-4 navbar-logo">
          <img src={LogoImage} alt="Logo" />
          <img src={LogoTitle} alt="Title" />
        </div>
      </div>
      {/* nav desktop */}
      <ul className="hidden navbar-links md:flex">
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#about-us">ABOUT US</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li id="votenow">
          <a href="#vote">VOTE NOW</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
