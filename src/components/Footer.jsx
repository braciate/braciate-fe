import React from "react";
import braciateLogo from '../assets/img/Logo_Braciate-Transparent.png';
import brawijayaAppreciateLogo from '../assets/img/BRAWIJAYA_APPRECIATE.png';
import instagramIcon from '../assets/img/instagram.png';
import youtubeIcon from '../assets/img/youtube.png';
import lineIcon from '../assets/img/line.png';
import tiktokIcon from '../assets/img/tiktok.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
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
          <div className="flex space-x-4 mb-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <img src={youtubeIcon} alt="YouTube" className="w-5 h-5" />
            </a>
            <a href="https://line.me" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <img src={lineIcon} alt="LINE" className="w-5 h-5" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <img src={tiktokIcon} alt="TikTok" className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs sm:text-sm font-poppins">© Tim IT Brawijaya Appreciate 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;