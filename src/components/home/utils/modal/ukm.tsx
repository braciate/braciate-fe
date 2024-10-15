"use client";

import React from "react";
import Image from "next/image";
import best from "@/assets/svg/Modal_imgs/dpm_imgs/best.svg";
import upload from "@/assets/svg/Modal_imgs/dpm_imgs/upload.svg";
import productive from "@/assets/svg/Modal_imgs/dpm_imgs/productive.svg";
import collab from "@/assets/svg/Modal_imgs/dpm_imgs/collab.svg";
import { useState } from "react";
import Close from "@/assets/svg/Modal_imgs/Close.svg";

import Art from "@/assets/svg/Modal_imgs/dpm_imgs/art.svg";
import Sport from "@/assets/svg/Modal_imgs/dpm_imgs/sport.svg";
import BgUkm from "@/assets/svg/Modal_imgs/BgUkm.svg";

import achievement from "@/assets/svg/Modal_imgs/dpm_imgs/achievement.svg";
import Critical from "@/assets/svg/Modal_imgs/dpm_imgs/Critical.svg";
import Thingking from "@/assets/svg/Modal_imgs/dpm_imgs/Thingking.svg";

import Favorite from "./partials/favorite";
import Link from "next/link";
import bestfavorite from "@/assets/svg/Modal_imgs/bestfavorite.svg";
import uploadHp from "@/assets/svg/Modal_imgs/dpm_imgs/uploadHp.svg";

export default function Ukm() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  if (!isModalVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center px-12 tab:px-32 text-white-Normal z-40 font-Amiko 2xl:gap-10 gap-3">
      <Link href="/ukm/favorite">
        <Image
          src={bestfavorite}
          alt="Favorite item"
          className="rounded-md 2xl:w-64 xl:w-52 lg:w-48 md:w-48 w-[600px] cursor-pointer"
        />
      </Link>
      <div
        className="inset-0 rounded-3xl p-5 md:h-max h-fit"
        style={{
          backgroundImage: `url(${BgUkm?.src || BgUkm})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
        }}
      >
        <Image
          src={Close}
          alt="Close button"
          className="cursor-pointer relative lg:left-[610px] md:left-[470px] bottom-2"
          onClick={closeModal}
        />
        <div className="flex md:gap-4 gap-3">
          <Link href="/ukm/productive">
            <div className=" cursor-pointer  border-2 2xl:py-9 border-white md:py-9 px-2 rounded-3xl  flex flex-col items-center justify-center ">
              <Image
                src={upload}
                alt="Upload DPM"
                className="md:w-full md:block hidden"
              />
              <Image
                src={uploadHp}
                alt="UploadHp DPM"
                className="w-full block md:hidden"
              />
              <Image src={best} alt="Best DPM" className="md:w-full " />
              <Image
                src={productive}
                alt="Productive DPM"
                className="md:w-[200px]"
              />
            </div>
          </Link>

          <Link href="/ukm/thingking_creativity">
            <div className="cursor-pointer border-2 border-white rounded-3xl lg:py-4 md:py-5 flex flex-col items-center justify-center ">
              <Image src={upload} alt="Upload DPM" className="md:w-44" />
              <Image src={best} alt="Best DPM" className="md:w-44" />
              <Image
                src={achievement}
                alt="Productive DPM"
                className="md:w-44"
              />
              <Image src={Critical} alt="Critical DPM" className="md:w-44" />
              <Image src={Thingking} alt="Thingking DPM" className="md:w-44" />
            </div>
          </Link>

          <Link href="/ukm/art_sport">
            <div className="cursor-pointer border-2 border-white rounded-3xl px-1 lg:py-3 md:py-5  flex flex-col items-center justify-center">
              <Image src={upload} alt="Upload BEM" className="md:w-44" />
              <Image src={best} alt="Best BEM" className="md:w-44" />
              <Image src={Art} alt="Art BEM" className="md:w-44" />
              <Image src={Sport} alt="Sport BEM" className="md:w-44" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
