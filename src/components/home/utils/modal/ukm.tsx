"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import best from "@/assets/svg/Modal_imgs/dpm_imgs/best.svg";
import upload from "@/assets/svg/Modal_imgs/dpm_imgs/upload.svg";
import productive from "@/assets/svg/Modal_imgs/dpm_imgs/productive.svg";
import Art from "@/assets/svg/Modal_imgs/dpm_imgs/Art.svg";
import Sport from "@/assets/svg/Modal_imgs/dpm_imgs/Sport.svg";
import BgUkm from "@/assets/svg/Modal_imgs/dpm_imgs/BgDpm.png";
import achievement from "@/assets/svg/Modal_imgs/dpm_imgs/Achievement.svg";
import Critical from "@/assets/svg/Modal_imgs/dpm_imgs/Critical.svg";
import Thingking from "@/assets/svg/Modal_imgs/dpm_imgs/Thingking.svg";
import bestfavorite from "@/assets/svg/Modal_imgs/bestfavorite.png";

const LoadingAnimation = () => (
  <div className="flex items-center justify-center h-full">
    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white"></div>
  </div>
);

export default function Ukm() {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [isLoading, setIsLoading] = useState([true, true, true, true]);

  useEffect(() => {
    const timers = [2000, 2500, 3000, 3500].map((time, index) =>
      setTimeout(() => {
        setIsLoading((prev) => {
          const newLoading = [...prev];
          newLoading[index] = false;
          return newLoading;
        });
      }, time)
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
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
      <div className="bg-transparent rounded-3xl p-4 w-full max-w-2xl mx-auto">
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
            <div
              className="w-full h-full flex items-center justify-center"
              onClick={handleOutsideClick}
            >
              {isLoading[0] ? (
                <LoadingAnimation />
              ) : (
                <Link href="/ukm/favorite" className="min-h-max">
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
              className="w-full h-full flex items-center justify-center overflow-hidden"
              onClick={handleOutsideClick}
            >
              {isLoading[1] ? (
                <LoadingAnimation />
              ) : (
                <div
                  className="p-4 rounded-2xl bg-center saturate-150"
                  style={{
                    backgroundImage: `url(${BgUkm?.src || BgUkm})`,
                    borderRadius: "1rem",
                  }}
                >
                  <Link href="/ukm/productive">
                    <div
                      className="cursor-pointer border-2 border-white rounded-3xl px-2 py-8 sm:px-4 sm:py-10 flex flex-col items-center justify-center"
                      onClick={handleOutsideClick}
                    >
                      <Image
                        src={upload}
                        alt="Upload ukm"
                        className="sm:w-44 w-36"
                        priority={false}
                      />
                      <Image
                        src={best}
                        alt="Best ukm"
                        className="sm:w-44 w-36"
                        priority={false}
                      />
                      <Image
                        src={productive}
                        alt="Productive ukm"
                        className="sm:w-44 w-36"
                        priority={false}
                      />
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              {isLoading[2] ? (
                <LoadingAnimation />
              ) : (
                <div
                  className="p-4 rounded-2xl bg-center saturate-150"
                  style={{
                    backgroundImage: `url(${BgUkm?.src || BgUkm})`,
                    borderRadius: "1rem",
                  }}
                >
                  <Link href="/ukm/thingking_creativity">
                    <div
                      className="cursor-pointer border-2 border-white rounded-3xl px-2 py-2 sm:px-4 sm:py-4 flex flex-col items-center justify-center"
                      onClick={handleOutsideClick}
                    >
                      <Image
                        src={upload}
                        alt="Upload ukm"
                        className="sm:w-40 w-36"
                        priority={false}
                      />
                      <Image
                        src={best}
                        alt="Best ukm"
                        className="sm:w-40 w-36"
                        priority={false}
                      />
                      <Image
                        src={achievement}
                        alt="Achievement DPM"
                        className="sm:w-40 w-36"
                      />
                      <Image
                        src={Critical}
                        alt="Critical DPM"
                        className="sm:w-40 w-36"
                      />
                      <Image
                        src={Thingking}
                        alt="Thingking DPM"
                        className="sm:w-40 w-36"
                      />
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="w-full h-full flex items-center justify-center"
              onClick={handleOutsideClick}
            >
              {isLoading[3] ? (
                <LoadingAnimation />
              ) : (
                <div
                  className="p-4 rounded-2xl bg-center saturate-150"
                  style={{
                    backgroundImage: `url(${BgUkm?.src || BgUkm})`,
                    borderRadius: "1rem",
                  }}
                >
                  <Link href="/ukm/art_sport">
                    <div
                      className="cursor-pointer border-2 border-white rounded-3xl px-2 py-2 sm:px-4 sm:py-3 flex flex-col items-center justify-center"
                      onClick={handleOutsideClick}
                    >
                      <Image
                        src={upload}
                        alt="Upload ukm"
                        className="sm:w-40 w-36"
                        priority={false}
                      />
                      <Image
                        src={best}
                        alt="Best ukm"
                        className="sm:w-40 w-36"
                        priority={false}
                      />
                      <Image src={Art} alt="Art BEM" className="md:w-44 w-32" />
                      <Image
                        src={Sport}
                        alt="Sport BEM"
                        className="md:w-44 w-32"
                      />
                    </div>
                  </Link>
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

          @media (max-width: 768px) {
            .swiper-button-next,
            .swiper-button-prev {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
