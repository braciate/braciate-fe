import React from "react";
import braciateLogo from "../../assets/svg/logo/Logo_Braciate-Transparent.png";
import brawijayaAppreciateLogo from "../../assets/svg/logo/BRAWIJAYA_APPRECIATE.png";
import instagramIcon from "../../assets/img/icon/instagram.png";
import youtubeIcon from "../../assets/img/icon/youtube.png";
import lineIcon from "../../assets/img/icon/line.png";
import tiktokIcon from "../../assets/img/icon/tiktok.png";
import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="w-full py-6 pb-4 text-white bg-black">
      <div className="flex flex-col items-center justify-between px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 md:flex-row">
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <Image
            src={braciateLogo}
            alt="Brawijaya Appreciate Logo"
            className="h-16 md:h-12 w-auto"
          />
          <Image
            src={brawijayaAppreciateLogo}
            alt="Brawijaya Appreciate Text Logo"
            className="h-16 md:h-12 w-auto"
          />
        </div>
        <div className="flex flex-col py-4 items-center md:items-end">
          <div className="flex mb-4 space-x-8 sm:space-x-6 md:space-x-4 lg:space-x-6 md:mb-2">
            <Link
              href="https://instagram.com/braciate2024/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-white rounded-full md:w-8 md:h-8"
            >
              <Image
                src={instagramIcon}
                alt="Instagram"
                className="w-6 h-6 md:w-5 md:h-5"
              />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-white rounded-full md:w-8 md:h-8"
            >
              <Image
                src={youtubeIcon}
                alt="YouTube"
                className="w-6 h-6 md:w-5 md:h-5"
              />
            </Link>
            <Link
              href="https://line.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-white rounded-full md:w-8 md:h-8"
            >
              <Image
                src={lineIcon}
                alt="LINE"
                className="w-6 h-6 md:w-5 md:h-5"
              />
            </Link>
            <Link
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-white rounded-full md:w-8 md:h-8"
            >
              <Image
                src={tiktokIcon}
                alt="TikTok"
                className="w-6 h-6 md:w-5 md:h-5"
              />
            </Link>
          </div>
          <Link
            className="text-xs font-poppins animate-bounce underline"
            href="/credit"
          >
            © Tim IT Brawijaya Appreciate 2024
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
