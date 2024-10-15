"use client";

import React from "react";
import Image from "next/image";
import best from "@/assets/svg/Modal_imgs/dpm_imgs/best.svg";
import upload from "@/assets/svg/Modal_imgs/dpm_imgs/upload.svg";
import { useState } from "react";
import Close from "@/assets/svg/Modal_imgs/Close.svg";
import aspirative from "@/assets/svg/Modal_imgs/dpm_imgs/aspirative.svg";
import BgDpm from "@/assets/svg/Modal_imgs/dpm_imgs/BgDpm.svg";
import Link from "next/link";
import bestfavorite from "@/assets/svg/Modal_imgs/bestfavorite.svg";

export default function Dpm() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  if (!isModalVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center px-12 tab:px-32 text-white-Normal font-Amiko z-40 gap-10">
      <Link href="/dpm/favorite">
        <Image
          src={bestfavorite}
          alt="Favorite item"
          className="rounded-md w-56 cursor-pointer"
        />
      </Link>
      <div
        className="inset-0 rounded-3xl p-3"
        style={{
          backgroundImage: `url(${BgDpm?.src || BgDpm})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
        }}
      >
        <Image
          src={Close}
          alt="Close button"
          className="cursor-pointer relative md:left-[180px] left-28"
          onClick={closeModal}
        />
        <div className="">
          <Link href="/dpm/aspirative">
            <div className=" cursor-pointer  border-2 border-white rounded-3xl px-1 py-9 flex flex-col items-center justify-center ">
              <Image src={upload} alt="Upload DPM" className="w-full" />
              <Image src={best} alt="Best DPM" className="w-full" />
              <Image src={aspirative} alt="Productive DPM" className="w-full" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
