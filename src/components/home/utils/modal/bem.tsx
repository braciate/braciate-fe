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
    <div className="fixed inset-0  bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center px-12 tab:px-32 text-white-Normal font-Amiko z-40 2xl:gap-10 gap-4">
      <Link href="/bem/favorite">
        <Image
          src={bestfavorite}
          alt="Favorite item"
          className="rounded-md 2xl:w-64 cursor-pointer"
        />
      </Link>
      <div
        className="inset-0 rounded-3xl 2xl:py-7 2xl:px-3 p-2"
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
          className="cursor-pointer relative 2xl:left-[500px] left-32 2xl:bottom-3"
          onClick={closeModal}
        />
        <div className="flex 2xl:gap-10 gap-2">
          <Link href="/bem/productive">
            <div className=" cursor-pointer  border-2 2xl:p-5 border-white py-6 px-2 rounded-3xl  flex flex-col items-center justify-center ">
              <Image
                src={upload}
                alt="Upload DPM"
                className="2xl:w-full md:block hidden"
              />
              <Image
                src={uploadHp}
                alt="UploadHp DPM"
                className=" w-full md:hidden block"
              />
              <Image src={best} alt="Best DPM" className="2xl:w-full " />
              <Image
                src={productive}
                alt="Productive DPM"
                className="2xl:w-[200px]"
              />
            </div>
          </Link>

          <Link href="/bem/collaborative">
            <div className="cursor-pointer border-2 border-white py-4 px-2 rounded-3xl flex flex-col items-center justify-center ">
              <Image src={upload} alt="Upload DPM" className="2xl:w-full " />
              <Image src={best} alt="Best DPM" className="2xl:w-full " />
              <Image src={collab} alt="Productive DPM" className="2xl:w-52 " />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
