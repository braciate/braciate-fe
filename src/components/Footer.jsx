import React from "react";
import braciateLogo from "../assets/img/Logo_Braciate-Transparent.png";
import brawijayaAppreciateLogo from "../assets/img/BRAWIJAYA_APPRECIATE.png";
import instagramIcon from "../assets/img/instagram.png";
import youtubeIcon from "../assets/img/youtube.png";
import lineIcon from "../assets/img/line.png";
import tiktokIcon from "../assets/img/tiktok.png";

const Footer = () => {
  return (
    <footer className="w-full py-6 text-white bg-black">
      <div className="flex flex-col items-center justify-between px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:flex-row">
        <div className="flex items-center mb-4 space-x-2 sm:mb-0">
          <img
            src={braciateLogo}
            alt="Brawijaya Appreciate Logo"
            className="h-12"
          />
          <img
            src={brawijayaAppreciateLogo}
            alt="Brawijaya Appreciate Text Logo"
            className="h-12"
          />
        </div>
        <div className="flex flex-col items-center sm:items-end">
          <div className="flex mb-2 space-x-4">
            <a
              href="https://instagram.com/braciate2024/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 bg-white rounded-full"
            >
              <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 bg-white rounded-full"
            >
              <img src={youtubeIcon} alt="YouTube" className="w-5 h-5" />
            </a>
            <a
              href="https://line.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 bg-white rounded-full"
            >
              <img src={lineIcon} alt="LINE" className="w-5 h-5" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 bg-white rounded-full"
            >
              <img src={tiktokIcon} alt="TikTok" className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs sm:text-sm font-poppins">
            © Tim IT Brawijaya Appreciate 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
