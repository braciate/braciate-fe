"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import FilosofiLogoImg from "../../../assets/svg/fragments/filosofilogo-text.svg";
import filosofiIcon1 from "../../../assets/img/fragments/filosofi_icon_1.png";
import filosofiIcon2 from "../../../assets/img/fragments/filosofi_icon_2.png";
import filosofiIcon3 from "../../../assets/img/fragments/filosofi_icon_3.png";
import filosofiIcon4 from "../../../assets/img/fragments/filosofi_icon_4.png";
import filosofiIcon5 from "../../../assets/img/fragments/filosofi_icon_5.png";
import titleImage1 from "../../../assets/img/fragments/KILAU EMAS KEJAYAAN.png";
import titleImage2 from "../../../assets/img/fragments/mahkota perjuangan.png";
import titleImage3 from "../../../assets/img/fragments/BINTANG PRESTASI.png";
import titleImage4 from "../../../assets/img/fragments/gelombang ukiran abadi.png";
import titleImage5 from "../../../assets/img/fragments/lingkaran tekad tak terbatas.png";
import panahIcon from "../../../assets/svg/fragments/panahdot.svg";

const FilosofiLogo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const slides = [
    {
      logo: filosofiIcon1,
      titleImage: titleImage1,
      content: "Melambangkan kebebasan untuk berkreasi, berinovasi, dan mengembangkan diri, mendorong setiap Simpul Brawijaya untuk terbang tinggi meraih impian.",
    },
    {
      logo: filosofiIcon2,
      titleImage: titleImage2,
      content: "Ikon maskot yang menuju mahkota menggambarkan perjalanan penuh dedikasi dan usaha dari lembaga dalam meraih puncak prestasi, menunjukkan tekad yang kuat untuk mencapai kemenangan.",
    },
    {
      logo: filosofiIcon3,
      titleImage: titleImage3,
      content: "Melambangkan kebebasan untuk berkreasi, berinovasi, dan mengembangkan diri, mendorong setiap Simpul Brawijaya untuk terbang tinggi meraih impian.",
    },
    {
      logo: filosofiIcon4,
      titleImage: titleImage4,
      content: "Menggambarkan persatuan dan kebersamaan seluruh Simpul Brawijaya dalam mencapai visi dan misi bersama, bahu-membahu menciptakan karya yang gemilang.",
    },
    {
      logo: filosofiIcon5,
      titleImage: titleImage5,
      content: "Simbol komitmen dan dedikasi tanpa batas dari seluruh Simpul Brawijaya, terus bergerak maju tanpa henti mengejar kesempurnaan dalam setiap langkah.",
    },
  ];

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Image
        src={FilosofiLogoImg}
        alt="Filosofi Logo"
        className="mb-8"
        width={400}
        height={100}
      />
      <div className="w-full max-w-4xl flex">
        <div className="w-1/6 flex flex-col items-center justify-center mr-4">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`cursor-pointer transition-all duration-300 mb-4 ${
                index === activeIndex ? 'scale-125 opacity-100' : 'opacity-50'
              }`}
              onClick={() => goToSlide(index)}
            >
              <Image
                src={slide.logo}
                alt={`Logo ${index + 1}`}
                width={40}
                height={40}
              />
            </div>
          ))}
        </div>
        <div className="w-5/6">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center">
                  <div className="mr-8">
                    <Image
                      src={slide.logo}
                      alt={`Logo ${index + 1}`}
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className="flex-1">
                    <Image
                      src={slide.titleImage}
                      alt={`Title ${index + 1}`}
                      width={300}
                      height={50}
                      className="mb-4"
                    />
                    <p className="text-sm text-gray-300">{slide.content}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center items-center mt-6">
            <Image
              src={panahIcon}
              onClick={() => swiperRef.current?.slidePrev()}
              className="transform rotate-180 cursor-pointer"
              width={20}
              height={20}
              alt="Previous"
            />
            <div className="flex mx-4">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${
                    index === activeIndex ? 'bg-yellow-500' : 'bg-gray-400'
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
            <Image
              src={panahIcon}
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-pointer"
              width={20}
              height={20}
              alt="Next"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilosofiLogo;