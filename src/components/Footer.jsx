import React from "react";
import braciateLogo from "../assets/img/Logo_Braciate-Transparent.png";
import brawijayaAppreciateLogo from "../assets/img/BRAWIJAYA_APPRECIATE.png";
import instagramIcon from "../assets/img/instagram.png";
import youtubeIcon from "../assets/img/youtube.png";
import lineIcon from "../assets/img/line.png";
import tiktokIcon from "../assets/img/tiktok.png";

const Footer = () => {
  return (
    <footer className="w-full py-6 pb-4 text-white bg-black">
      <div className="flex flex-col items-center justify-between px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 md:flex-row">
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <img
            src={braciateLogo}
            alt="Brawijaya Appreciate Logo"
            className="h-16 md:h-12"
          />
          <img
            src={brawijayaAppreciateLogo}
            alt="Brawijaya Appreciate Text Logo"
            className="h-16 md:h-12"
          />
        </div>
        <div className="flex flex-col py-4 pb-6 items-center md:items-end">
          <div className="flex mb-4 space-x-8 sm:space-x-6 md:space-x-4 lg:space-x-6 md:mb-2">
            <a
              href="https://instagram.com/braciate2024/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-white rounded-full md:w-8 md:h-8"
            >
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6 md:w-5 md:h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-white rounded-full md:w-8 md:h-8"
            >
              <img src={youtubeIcon} alt="YouTube" className="w-6 h-6 md:w-5 md:h-5" />
            </a>
            <a
              href="https://line.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-white rounded-full md:w-8 md:h-8"
            >
              <img src={lineIcon} alt="LINE" className="w-6 h-6 md:w-5 md:h-5" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-white rounded-full md:w-8 md:h-8"
            >
              <img src={tiktokIcon} alt="TikTok" className="w-6 h-6 md:w-5 md:h-5" />
            </a>
          </div>
          <p className="text-xs font-poppins">
            © Tim IT Brawijaya Appreciate 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;