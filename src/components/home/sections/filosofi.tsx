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
      titleImageSize: { width: 450, height: 60 },
      content: "Melambangkan kebebasan untuk berkreasi, berinovasi, dan mengembangkan diri, mendorong setiap Simpul Brawijaya untuk terbang tinggi meraih impian.",
    },
    {
      logo: filosofiIcon2,
      titleImage: titleImage2,
      titleImageSize: { width: 450, height: 70 },
      content: "Ikon maskot yang menuju mahkota menggambarkan perjalanan penuh dedikasi dan usaha dari lembaga dalam meraih puncak prestasi, menunjukkan tekad yang kuat untuk mencapai kemenangan.",
    },
    {
      logo: filosofiIcon3,
      titleImage: titleImage3,
      titleImageSize: { width: 380, height: 55 },
      content: "Melambangkan kebebasan untuk berkreasi, berinovasi, dan mengembangkan diri, mendorong setiap Simpul Brawijaya untuk terbang tinggi meraih impian.",
    },
    {
      logo: filosofiIcon4,
      titleImage: titleImage4,
      titleImageSize: { width: 500, height: 75 },
      content: "Menggambarkan persatuan dan kebersamaan seluruh Simpul Brawijaya dalam mencapai visi dan misi bersama, bahu-membahu menciptakan karya yang gemilang.",
    },
    {
      logo: filosofiIcon5,
      titleImage: titleImage5,
      titleImageSize: { width: 600, height: 65 },
      content: "Simbol komitmen dan dedikasi tanpa batas dari seluruh Simpul Brawijaya, terus bergerak maju tanpa henti mengejar kesempurnaan dalam setiap langkah.",
    },
  ];

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start pt-4 relative overflow-hidden">
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
      <div className="ml-10 relative z-20 w-full flex flex-col items-center mr-0">
        <Image
          src={FilosofiLogoImg}
          alt="Filosofi Logo"
          className="mb-6"
          width={600}
          height={112}
        />
        <div className="w-full max-w-6xl flex px-8">
          {/* Left slider - Adjusted position */}
          <div className="w-1/6 flex flex-col items-center justify-start mr-8 -mt-20">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 mb-2 ${
                  index === activeIndex ? 'scale-150 opacity-100' : 'opacity-50'
                }`}
                onClick={() => goToSlide(index)}
              >
                <Image
                  src={slide.logo}
                  alt={`Logo ${index + 1}`}
                  width={70}
                  height={70}
                />
              </div>
            ))}
          </div>
          <div className="w-5/6">
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
                  <div className="flex items-start">
                    <div className="mr-10">
                      <Image
                        src={slide.logo}
                        alt={`Logo ${index + 1}`}
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="flex-1">
                      <Image
                        src={slide.titleImage}
                        alt={`Title ${index + 1}`}
                        width={slide.titleImageSize.width}
                        height={slide.titleImageSize.height}
                        className="mb-4"
                      />
                      <p className="text-lg text-gray-300 leading-relaxed">{slide.content}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
                    className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
                      index === activeIndex ? 'bg-yellow-500' : 'bg-white'
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