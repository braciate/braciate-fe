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

export default function Dpm() {
    const [isModalVisible, setIsModalVisible] = useState(true);

    const closeModal = () => {
      setIsModalVisible(false);
    }
  
    if (!isModalVisible) return null;

    return (
        <header className= "flex flex-col items-center justify-center">
        <div className= "relative rounded-lg p-4 bg-[#D7A129]">
        <Image 
            src={Close}
            alt="Close button"
            className=" absolute top-1 right-2 cursor-pointer"
            onClick={closeModal}
          />
        <div className="flex gap-2 ">
            <div className=" cursor-pointer bg-[#D7A129] border-2 border-white rounded-lg px-1 py-4 flex flex-col items-center justify-center ">
                <Image src={upload} alt="Upload DPM" />
                <Image src={best} alt="Best DPM" />
                <Image src={aspirative} alt="Productive DPM" className="w-16"/>
            </div>
        </div>
        </div>
        </header>
    )
}