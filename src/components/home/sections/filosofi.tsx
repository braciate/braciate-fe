"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import FilosofiLogoImg from "../../../assets/svg/fragments/filosofilogo-text.svg";
import glitterImage from "../../../assets/img/fragments/glitter.png";
import filosofiIcon3 from "../../../assets/img/fragments/filosofi_icon_1.png";
import filosofiIcon4 from "../../../assets/img/fragments/filosofi_icon_2.png";
import filosofiIcon2 from "../../../assets/img/fragments/filosofi_icon_3.png";
import filosofiIcon5 from "../../../assets/img/fragments/filosofi_icon_4.png";
import filosofiIcon1 from "../../../assets/img/fragments/filosofi_icon_5.png";
import titleImage1 from "../../../assets/img/fragments/KILAU EMAS KEJAYAAN@2x.png";
import titleImage2 from "../../../assets/img/fragments/mahkota perjuangan@2x.png";
import titleImage3 from "../../../assets/img/fragments/BINTANG PRESTASI@2x.png";
import titleImage4 from "../../../assets/img/fragments/gelombang ukiran abadi@3x.png";
import titleImage5 from "../../../assets/img/fragments/lingkaran tekad tak terbatas@2x.png";
import panahIcon from "../../../assets/svg/fragments/panahdot.svg";

const FilosofiLogo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const slides = [
    {
      logo: filosofiIcon1,
      titleImage: titleImage1,
      titleImageSize: { width: 400, height: 30 },
      content:
        "Warna emas melambangkan prestasi, kemakmuran, dan keberhasilan yang diraih oleh seluruh Simpul Brawijaya, mencerminkan kekuatan dan pencapaian yang terus bersinar.",
    },
    {
      logo: filosofiIcon2,
      titleImage: titleImage2,
      titleImageSize: { width: 400, height: 70 },
      content:
        "Ikon maskot yang menuju mahkota menggambarkan perjalanan penuh dedikasi dan usaha dari lembaga dalam meraih puncak prestasi, menunjukkan tekad yang kuat untuk mencapai kemenangan.",
    },
    {
      logo: filosofiIcon3,
      titleImage: titleImage3,
      titleImageSize: { width: 350, height: 55 },
      content:
        "Bintang mewakili pencapaian yang gemilang dan menjadi simbol penghargaan yang diberikan kepada Simpul Brawijaya, menegaskan kualitas dan keunggulan yang diakui.",
    },
    {
      logo: filosofiIcon4,
      titleImage: titleImage4,
      titleImageSize: { width: 500, height: 75 },
      content:
        "Gelombang ukiran yang memutar menggambarkan perjalanan panjang dan penuh arti dari lembaga dalam merajut kisah sukses, setiap likuan adalah jejak dari dedikasi dalam mencapai tujuan besar.",
    },
    {
      logo: filosofiIcon5,
      titleImage: titleImage5,
      titleImageSize: { width: 500, height: 65 },
      content:
        "Pecahan lingkaran yang mengelilingi logo mencerminkan tekad tak tergoyahkan lembaga untuk melampaui batas-batas dan mencapai keberhasilan, dengan semangat yang terus berputar tanpa henti.",
    },
  ];

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      const newIndex = Math.max(0, activeIndex - 1);
      swiperRef.current.slideTo(newIndex);
      setActiveIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      const newIndex = Math.min(slides.length - 1, activeIndex + 1);
      swiperRef.current.slideTo(newIndex);
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="relative flex flex-col items-center text-center w-full -mt-24 md:-mt-48 overflow-hidden">
      {/* Full-width glitter background */}
      <div
        className="absolute inset-0 w-screen"
        style={{ top: "-30%", height: "100%" }}
      >
        <Image
          src={glitterImage}
          alt="Glitter Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="scale-110"
        />
      </div>

      <div className="flex flex-col items-center text-center z-10 w-full px-4 md:px-0 min-h-screen">
        {/* Filosofi Logo */}
        <div className="mb-4 md:mb-6 w-full max-w-xs md:max-w-lg">
          <Image
            src={FilosofiLogoImg}
            alt="Filosofi Logo"
            width={500}
            height={60}
            className="w-full h-auto"
          />
        </div>

        <div className="w-full max-w-md md:max-w-3xl flex flex-col md:flex-row">
          {/* Left slider for large screens */}
          <div
            className="hidden md:flex md:flex-col md:mr-4 -mt-10 items-center justify-start"
            style={{ minWidth: "100px" }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 mb-0 ${
                  index === activeIndex ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => goToSlide(index)}
              >
                <Image
                  src={slide.logo}
                  alt={`Logo ${index + 1}`}
                  width={index === activeIndex ? 200 : 50}
                  height={index === activeIndex ? 200 : 50}
                />
              </div>
            ))}
          </div>

          {/* Main content area */}
          <div className="w-full mt-6 md:w-11/12">
            <Swiper
              modules={[Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              pagination={false}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="w-full swiper-no-default-ui"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-row items-start">
                    <div className="flex-shrink-0 mr-4">
                      <Image
                        src={slide.logo}
                        alt={`Logo ${index + 1}`}
                        className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <Image
                        src={slide.titleImage}
                        alt={`Title ${index + 1}`}
                        width={slide.titleImageSize.width}
                        height={slide.titleImageSize.height}
                        className="mb-2 w-full h-auto max-w-[220px] md:max-w-sm"
                      />
                      <p className="text-xs md:text-base lg:text-base text-gray-300 mt-2 leading-relaxed text-center w-[90%]">
                        {slide.content}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Bottom slider for small screens */}
            <div className="flex md:hidden justify-center mt-4 overflow-x-auto">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`cursor-pointer transition-all flex items-center duration-300 mx-2 ${
                    index === activeIndex ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  <Image
                    src={slide.logo}
                    alt={`Logo ${index + 1}`}
                    width={index === activeIndex ? 80 : 50}
                    height={index === activeIndex ? 80 : 50}
                  />
                </div>
              ))}
            </div>

            {/* Navigation dots and arrows */}
            <div className="flex justify-center md:-ml-50 md:-mr-40 items-center mt-4">
              <button onClick={handlePrev} className="focus:outline-none p-2">
                <Image
                  src={panahIcon}
                  className="transform rotate-180 cursor-pointer"
                  width={12}
                  height={12}
                  alt="Previous"
                />
              </button>
              <div className="flex mx-4">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${
                      index === activeIndex ? "bg-yellow-500" : "bg-white"
                    }`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
              <button onClick={handleNext} className="focus:outline-none p-2">
                <Image
                  src={panahIcon}
                  className="cursor-pointer"
                  width={12}
                  height={12}
                  alt="Next"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilosofiLogo;
