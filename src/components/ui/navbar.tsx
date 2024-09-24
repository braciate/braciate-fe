"use client";

import styles from "../home/style/navbar.module.css";
import { useNavbar } from "@/hooks/useNavbar";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import LogoImage from "@/assets/svg/logo/logo.svg";
import LogoTitle from "@/assets/svg/logo/braciate-title.svg";
import hamburger from "@/assets/svg/fragments/hamburger.svg";
import goldTexture from "@/assets/svg/fragments/gold-texture.svg";
import close from "@/assets/svg/fragments/close-slide.svg";

const Navbar: FC = () => {
  const { isOpen, toggleSlide } = useNavbar();

  return (
    <nav className={`${styles.navbar}`}>
      <div className={styles.navbarLogo}>
        <Image src={LogoImage} alt="Logo" className="w-max" />
        <Image src={LogoTitle} alt="Title" className="w-max" />
      </div>
      <span
        className="flex justify-center h-8 p-1 cursor-pointer w-9 hamburger md:hidden"
        onClick={toggleSlide}
      >
        <div className="relative w-14 p-4 rounded-md overflow-hidden">
          <Image
            src={goldTexture}
            alt="Gold texture"
            fill={true}
            className="object-cover scale-150"
          />
          <Image src={hamburger} alt="hamburger" fill={true} />
        </div>
      </span>
      {/* nav mobile */}
      <div
        className={`md:hidden font-jaoren fixed inset-0 right-0 flex justify-end w-full h-full transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={toggleSlide}
      >
        <div
          className={`z-50 flex flex-col w-3/4 h-full p-8 text-2xl md:text-3xl tracking-wider text-end ${styles.slideNav}`}
        >
          <div className="flex justify-start">
            <span className="cursor-pointer w-max" onClick={toggleSlide}>
              <Image src={close} alt="X" className="h-4 self-start" />
            </span>
          </div>
          <ul className="flex flex-col space-y-4 sm:space-y-8 mb-auto mt-8">
            <li className="py-2 border-b-2 border-white border-opacity-40 font-jaoren">
              <Link
                className="cursor-pointer"
                href="/#home"
                onClick={toggleSlide}
              >
                HOME
              </Link>
            </li>
            <li className="py-2 border-b-2 border-white border-opacity-40">
              <Link
                className="cursor-pointer"
                href="/#about-us"
                onClick={toggleSlide}
              >
                ABOUT US
              </Link>
            </li>
            <li className="py-2 border-b-2 border-white border-opacity-40">
              <Link
                className="cursor-pointer"
                href="/faq"
                onClick={toggleSlide}
              >
                FAQ
              </Link>
            </li>
            <li
              className={`self-center px-8 py-1 mt-4 ${styles.vote_slide} w-max`}
            >
              <Link
                className="cursor-pointer"
                href="/#vote"
                onClick={toggleSlide}
              >
                VOTE NOW
              </Link>
            </li>
          </ul>
          <div
            className={`self-center justify-center mt-4 ${styles.navbarLogo}`}
          >
            <Image src={LogoImage} alt="Logo" />
            <Image src={LogoTitle} alt="Title" />
          </div>
        </div>
      </div>
      {/* nav desktop */}
      <ul
        className={`hidden ${styles.navbarLinks} md:flex items-center font-jaoren text-2xl`}
      >
        <li>
          <Link className={styles.links} href="/#home">
            HOME
          </Link>
        </li>
        <li>
          <Link className={styles.links} href="/#about-us">
            ABOUT US
          </Link>
        </li>
        <li>
          <Link className={styles.links} href="/faq">
            FAQ
          </Link>
        </li>
        <li id={styles.votenow}>
          <Link className={styles.links} href="/#vote">
            VOTE NOW
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
