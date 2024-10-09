"use client"

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import FilosofiLogoImg from "../../../assets/svg/fragments/filosofilogo-text.svg";
import glitterImage from "../../../assets/img/fragments/glitter.png";
import filosofiIcon1 from "../../../assets/img/fragments/filosofi_icon_1.png";
import filosofiIcon2 from "../../../assets/img/fragments/filosofi_icon_2.png";
import filosofiIcon3 from "../../../assets/img/fragments/filosofi_icon_3.png";
import filosofiIcon4 from "../../../assets/img/fragments/filosofi_icon_4.png";
import filosofiIcon5 from "../../../assets/img/fragments/filosofi_icon_5.png";
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
      titleImageSize: { width: 400, height: 60 },
      content: "Melambangkan kebebasan untuk berkreasi, berinovasi, dan mengembangkan diri, mendorong setiap Simpul Brawijaya untuk terbang tinggi meraih impian.",
    },
    {
      logo: filosofiIcon2,
      titleImage: titleImage2,
      titleImageSize: { width: 400, height: 70 },
      content: "Ikon maskot yang menuju mahkota menggambarkan perjalanan penuh dedikasi dan usaha dari lembaga dalam meraih puncak prestasi, menunjukkan tekad yang kuat untuk mencapai kemenangan.",
    },
    {
      logo: filosofiIcon3,
      titleImage: titleImage3,
      titleImageSize: { width: 400, height: 55 },
      content: "Melambangkan kebebasan untuk berkreasi, berinovasi, dan mengembangkan diri, mendorong setiap Simpul Brawijaya untuk terbang tinggi meraih impian.",
    },
    {
      logo: filosofiIcon4,
      titleImage: titleImage4,
      titleImageSize: { width: 400, height: 75 },
      content: "Menggambarkan persatuan dan kebersamaan seluruh Simpul Brawijaya dalam mencapai visi dan misi bersama, bahu-membahu menciptakan karya yang gemilang.",
    },
    {
      logo: filosofiIcon5,
      titleImage: titleImage5,
      titleImageSize: { width: 400, height: 65 },
      content: "Simbol komitmen dan dedikasi tanpa batas dari seluruh Simpul Brawijaya, terus bergerak maju tanpa henti mengejar kesempurnaan dalam setiap langkah.",
    },
  ];

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="flex flex-col items-center text-center w-full max-w-6xl mx-auto px-4 -mt-48 md:-mt-48">
      
      {/* Glitter overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{ top: '-10%', height: '40%' }}>
        <Image
          src={glitterImage}
          alt="Glitter Overlay"
          layout="fill"
          objectFit="cover"
          quality={100}
          style={{ opacity: 0.5 }}
        />
      </div>
      
      {/* Main content */}
      <div className="flex flex-col items-center text-center">
        <Image
          src={FilosofiLogoImg}
          alt="Filosofi Logo"
          className="mb-6 ml-10"
          width={400}
          height={60}
        />
        <div className="max-w-md md:max-w-6xl mr-8 ml-0 flex flex-col md:flex-row">
          
          {/* Left slider for large screens */}
          <div className="hidden md:flex md:flex-col md:w-1/12 md:mr-4 items-center justify-start md:-mt-20">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 mb-0 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-50'
                }`}
                onClick={() => goToSlide(index)}
              >
                <Image
                  src={slide.logo}
                  alt={`Logo ${index + 1}`}
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>

          {/* Main content area */}
          <div className="w-full md:w-10/12 md:max-w-3xl">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              pagination={false}
              navigation={false}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="w-full swiper-no-default-ui"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-row items-start">
                  <div className="mr-0 flex flex-shrink-0 pl-5 md:pl-0"> 
                      <Image
                        src={slide.logo}
                        alt={`Logo ${index + 1}`}
                        width={300}
                        height={300}
                        className="w-[150px] h-[150px] md:w-[100px] md:h-[100px] md:pl-0"
                      />
                    </div>
                    <div className="flex flex-col items-center md:items-start md:max-w-xl small-screen-adjust">
                      <Image
                        src={slide.titleImage}
                        alt={`Title ${index + 1}`}
                        width={slide.titleImageSize.width}
                        height={slide.titleImageSize.height}
                        className="mb-2 w-auto h-[30px] md:h-[60px] pr-8"
                      />
                      <p className="text-xs md:text-lg text-gray-300 leading-relaxed pr-8">
                        {slide.content}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Bottom slider for small screens */}
          <div className="flex md:hidden justify-start mt-3 ml-10 mr-6 pl-12 overflow-x-auto">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 mx-0 flex flex-col items-start ${
                  index === activeIndex ? 'opacity-100' : 'opacity-50'
                }`}
                onClick={() => goToSlide(index)}
              >
                <Image
                  src={slide.logo}
                  alt={`Logo ${index + 1}`}
                  width={60}
                  height={60}
                  className="mb-2"
                />
              </div>
            ))}
          </div>

            {/* Navigation dots and arrows */}
            <div className="flex justify-center items-center mt-8">
              <Image
                src={panahIcon}
                onClick={() => swiperRef.current?.slidePrev()}
                className="transform rotate-180 cursor-pointer"
                width={12}
                height={12}
                alt="Previous"
              />
              <div className="flex mx-4">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${
                      index === activeIndex ? 'bg-yellow-500' : 'bg-gray-500'
                    }`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
              <Image
                src={panahIcon}
                onClick={() => swiperRef.current?.slideNext()}
                className="cursor-pointer"
                width={12}
                height={12}
                alt="Next"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilosofiLogo;