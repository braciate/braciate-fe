"use client";
import { useState } from "react";
import React from "react";
import type { FC } from "react";
import GlitterLeft from "../../../assets/svg/fragments/glitterfilosofi-left.svg";
import FilosofiLogoImg from "../../../assets/svg/fragments/filosofilogo-text.svg";
import logo1 from "../../../assets/svg/fragments/filosofilogo-1.svg";
import logo2 from "../../../assets/svg/fragments/filosofilogo-2.svg";
import logo3 from "../../../assets/svg/fragments/filosofilogo-3.svg";
import logo4 from "../../../assets/svg/fragments/filosofilogo-4.svg";
import logo5 from "../../../assets/svg/fragments/filosofilogo-5.svg";
import panahIcon from "../../../assets/svg/fragments/panahdot.svg";
import preview1 from "../../../assets/img/fragments/previewlogo-1.png";
import style from "../style/filosofi.module.css";
import Image from "next/image";

const FilosofiLogo: FC = () => {
  interface SlideProps {
    children: React.ReactNode;
  }

  const Slide: React.FC<SlideProps> = ({ children }) => (
    <div className={style.slide}>{children}</div>
  );

  const slides: React.ReactElement[] = [
    <Slide key="slide1">
      <div className="flex flex-col sm:flex-row items-center">
        <Image src={logo1} alt="Logo 1" />
        <div className="text-center space-y-4">
          <h1 className="font-jaoren text-4xl">KILAU EMAS KEJAYAAN</h1>
          <p>
            Warna emas melambangkan prestasi, kemakmuran, dan keberhasilan yang
            diraih oleh seluruh Simpul Brawijaya, mencerminkan kekuatan dan
            pencapaian yang terus bersinar.
          </p>
        </div>
      </div>
    </Slide>,
    <Slide key="slide2">
      <div className="flex flex-col sm:flex-row items-center">
        <Image src={logo2} alt="Logo 1" />
        <div className="text-center space-y-4">
          <h1 className="font-jaoren text-4xl">KILAU EMAS KEJAYAAN</h1>
          <p>
            Warna emas melambangkan prestasi, kemakmuran, dan keberhasilan yang
            diraih oleh seluruh Simpul Brawijaya, mencerminkan kekuatan dan
            pencapaian yang terus bersinar.
          </p>
        </div>
      </div>
    </Slide>,
    <Slide key="slide3">
      <div className="flex flex-col sm:flex-row items-center">
        <Image src={logo3} alt="Logo 1" />
        <div className="text-center space-y-4">
          <h1 className="font-jaoren text-4xl">KILAU EMAS KEJAYAAN</h1>
          <p>
            Warna emas melambangkan prestasi, kemakmuran, dan keberhasilan yang
            diraih oleh seluruh Simpul Brawijaya, mencerminkan kekuatan dan
            pencapaian yang terus bersinar.
          </p>
        </div>
      </div>
    </Slide>,
    <Slide key="slide4">
      <div className="flex flex-col sm:flex-row items-center">
        <Image src={logo4} alt="Logo 1" />
        <div className="text-center space-y-4">
          <h1 className="font-jaoren text-4xl">KILAU EMAS KEJAYAAN</h1>
          <p>
            Warna emas melambangkan prestasi, kemakmuran, dan keberhasilan yang
            diraih oleh seluruh Simpul Brawijaya, mencerminkan kekuatan dan
            pencapaian yang terus bersinar.
          </p>
        </div>
      </div>
    </Slide>,
    <Slide key="slide5">
      <div className="flex flex-col sm:flex-row items-center">
        <Image src={logo5} alt="Logo 1" />
        <div className="text-center space-y-4">
          <h1 className="font-jaoren text-4xl">KILAU EMAS KEJAYAAN</h1>
          <p>
            Warna emas melambangkan prestasi, kemakmuran, dan keberhasilan yang
            diraih oleh seluruh Simpul Brawijaya, mencerminkan kekuatan dan
            pencapaian yang terus bersinar.
          </p>
        </div>
      </div>
    </Slide>,
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToNext = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const goToPrevious = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    );
  };

  return (
    <main className={style.filosofi_logo}>
      <div className={style.filosofi_glitter}>
        <Image src={GlitterLeft} alt="" />
      </div>
      <Image src={FilosofiLogoImg} alt="" id={style.filosofi_logo_img} />
      <div className={style.carousel_and_preview}>
        <Image src={preview1} alt="" />
        <div className={style.carousel_and_indicators}>
          <div className={style.carousel}>
            <div
              className={style.carousel_inner}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className={style.carousel_slide}>
                  {slide}
                </div>
              ))}
            </div>
          </div>
          <div className={style.carousel_controls}>
            <Image
              src={panahIcon}
              onClick={goToPrevious}
              id={style.panah_kiri}
              alt=""
            />
            <div className={style.carousel_indicators}>
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`${style.carousel_indicator} ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => {
                    setCurrentIndex(index);
                  }}
                />
              ))}
            </div>
            <Image
              src={panahIcon}
              onClick={goToNext}
              id={style.panah_kanan}
              alt=".."
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FilosofiLogo;
