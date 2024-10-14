'use client';

import React from "react"
import Image from "next/image"
import best from "@/assets/svg/Modal_imgs/dpm_imgs/best.svg"
import upload from "@/assets/svg/Modal_imgs/dpm_imgs/upload.svg"
import productive from "@/assets/svg/Modal_imgs/dpm_imgs/productive.svg"
import collab from "@/assets/svg/Modal_imgs/dpm_imgs/collab.svg"
import { useState } from 'react'
import Close from '@/assets/svg/Modal_imgs/Close.svg'
import aspirative from '@/assets/svg/Modal_imgs/dpm_imgs/aspirative.svg'
import style from "../../style/modal.module.css"
import Glitter from "@/assets/svg/Modal_imgs/dpm_imgs/glitter.png"
import BgDpm from "@/assets/svg/Modal_imgs/dpm_imgs/BgDpm.svg"
import Favorite from "./partials/favorite"

export default function Dpm() {
    const [isModalVisible, setIsModalVisible] = useState(true);

    const closeModal = () => {
      setIsModalVisible(false);
    }
  
    if (!isModalVisible) return null;

    return (
        <header className= "flex items-center justify-center relative left-20">
        <Favorite/>
        <div className= "relative">
        <Image 
            src={Close}
            alt="Close button"
            className=" absolute top-28 right-40 cursor-pointer"
            onClick={closeModal}
          />
        <div className="flex gap-2 absolute bottom-36 left-[137px]">
            <div className=" cursor-pointer  border-2 border-white rounded-3xl px-1 py-9 flex flex-col items-center justify-center ">
                <Image src={upload} alt="Upload DPM" className="w-full" />
                <Image src={best} alt="Best DPM" className="w-full" />
                <Image src={aspirative} alt="Productive DPM" className="w-full"/>
            </div>
        </div>
        <Image src={BgDpm} alt="Background DPM" className="w-[90%]"/>
        </div>
        </header>
    )
}