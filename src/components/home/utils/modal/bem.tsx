"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import best from "@/public/svg/Modal_imgs/dpm_imgs/best.svg";
import upload from "@/public/svg/Modal_imgs/dpm_imgs/upload.svg";
import productive from "@/public/svg/Modal_imgs/dpm_imgs/productive.svg";
import collab from "@/public/svg/Modal_imgs/dpm_imgs/collab.svg";
import BgBem from "@/public/svg/Modal_imgs/BgBem.png";
import bestfavorite from "@/public/svg/Modal_imgs/bestfavorite.png";

const LoadingAnimation = () => (
  <div className="flex items-center justify-center h-full">
    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white"></div>
  </div>
);

export default function Bem() {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [isLoading, setIsLoading] = useState([true, true]);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsLoading((prev) => [false, prev[1]]);
    }, 2000);

    const timer2 = setTimeout(() => {
      setIsLoading((prev) => [prev[0], false]);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isModalVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center px-4 sm:px-12 text-white-Normal font-Amiko z-40"
      onClick={handleOutsideClick}
    >
      <div className="bg-transparent rounded-3xl p-4 w-full max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            enabled: true,
          }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          className="rounded-2xl w-full max-w-xl mx-auto h-[400px]"
        >
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              {isLoading[0] ? (
                <LoadingAnimation />
              ) : (
                <Link href="/bem/favorite">
                  <Image
                    src={bestfavorite}
                    alt="Favorite item"
                    className="rounded-md w-full h-80 cursor-pointer"
                  />
                </Link>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full h-full flex items-center justify-center"
              onClick={handleOutsideClick}
            >
              {isLoading[1] ? (
                <LoadingAnimation />
              ) : (
                <div
                  className="p-4 rounded-2xl bg-center saturate-150"
                  style={{
                    backgroundImage: `url(${BgBem?.src || BgBem})`,
                    borderRadius: "1rem",
                  }}
                >
                  <div className="flex md:gap-6 gap-2">
                    <Link href="/bem/productive">
                      <div className="cursor-pointer border-2 border-white md:py-8 md:px-2 py-6 rounded-3xl flex flex-col items-center justify-center h-full">
                        <Image
                          src={upload}
                          alt="Upload BEM"
                          className="md:w-full w-52"
                        />
                        <Image
                          src={best}
                          alt="Best BEM"
                          className="md:w-full w-52"
                        />
                        <Image
                          src={productive}
                          alt="Productive BEM"
                          className="md:w-44 w-52"
                        />
                      </div>
                    </Link>
                    <Link href="/bem/collaborative">
                      <div className="border-2 border-white cursor-pointer md:py-1 md:px-2 py-2 rounded-3xl flex flex-col items-center justify-center">
                        <Image
                          src={upload}
                          alt="Upload BEM"
                          className="md:w-full w-52"
                        />
                        <Image
                          src={best}
                          alt="Best BEM"
                          className="md:w-full w-52"
                        />
                        <Image
                          src={collab}
                          alt="Collaborative BEM"
                          className="md:w-44 w-40"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        </Swiper>
        <style jsx global>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: white !important;
            scale: 0.7;
          }

          .swiper-pagination-bullet {
            background-color: white !important;
          }

          .swiper-pagination-bullet-active {
            background-color: white !important;
          }
        `}</style>
      </div>
    </div>
  );
}
