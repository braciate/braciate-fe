"use client";

import React from "react";
import Image from "next/image";
import best from "@/assets/svg/Modal_imgs/dpm_imgs/best.svg";
import upload from "@/assets/svg/Modal_imgs/dpm_imgs/upload.svg";
import productive from "@/assets/svg/Modal_imgs/dpm_imgs/productive.svg";
import collab from "@/assets/svg/Modal_imgs/dpm_imgs/collab.svg";
import { useState } from "react";
import Close from "@/assets/svg/Modal_imgs/Close.svg";
import BgBem from "@/assets/svg/Modal_imgs/BgBem.svg";
import Link from "next/link";
import bestfavorite from "@/assets/svg/Modal_imgs/bestfavorite.svg";
import uploadHp from "@/assets/svg/Modal_imgs/dpm_imgs/uploadHp.svg";

export default function Bem() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  if (!isModalVisible) return null;

  return (
    <div className="fixed inset-0  bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center px-12 tab:px-32 text-white-Normal font-Amiko z-40 2xl:gap-10 gap-2">
      <Link href="/hima/favorite">
        <Image
          src={bestfavorite}
          alt="Favorite item"
          className="rounded-md md:w-64 cursor-pointer w-96"
        />
      </Link>
      <div
        className=" inset-0 rounded-3xl lg:py-6 md:px-3 md:py-5 md:h-max h-44 p-2"
        style={{
          backgroundImage: `url(${BgBem?.src || BgBem})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
        }}
      >
        <Image
          src={Close}
          alt="Close button"
          className="cursor-pointer relative lg:left-[470px] md:left-[405px] left-[145px]  lg:bottom-3 md:bottom-2"
          onClick={closeModal}
        />
        <div className="flex md:gap-10 gap-2 ">
          <Link href="/hima/productive">
            <div className=" cursor-pointer border-2 border-white  md:py-14 md:px-2 py-8 rounded-3xl  flex flex-col items-center justify-center ">
              <Image
                src={upload}
                alt="Upload DPM"
                className="md:w-full w-[300px]"
              />
              <Image src={best} alt="Best DPM" className="md:w-full w-[300px]" />
              <Image
                src={productive}
                alt="Productive DPM"
                className="md:w-[200px] w-[300px]"
              />
            </div>
          </Link>

          <Link href="/hima/collaborative">
            <div className="border-2 border-white   cursor-pointer  md:py-4 md:px-2 py-5 rounded-3xl flex flex-col items-center justify-center ">
              <Image src={upload} alt="Upload DPM" className="md:w-full w-[300px]" />
              <Image src={best} alt="Best DPM" className="md:w-full w-[300px]" />
              <Image src={collab} alt="Productive DPM" className="md:w-52 w-[300px]" />
            </div>
          </Link>
        </div>
      </div>
      </div>
  );
}
