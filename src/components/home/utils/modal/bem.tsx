'use client';

import React from 'react';
import Image from 'next/image';
import best from '@/assets/svg/Modal_imgs/dpm_imgs/best.svg';
import upload from '@/assets/svg/Modal_imgs/dpm_imgs/upload.svg';
import productive from '@/assets/svg/Modal_imgs/dpm_imgs/productive.svg';
import collab from "@/assets/svg/Modal_imgs/dpm_imgs/collab.svg"
import { useState } from 'react'
import Close from '@/assets/svg/Modal_imgs/Close.svg'
import Favorite from "@/components/home/utils/modal/partials/favorite";
import BgBem from "@/assets/svg/Modal_imgs/BgBem.svg"
import BgDpm from "@/assets/svg/Modal_imgs/dpm_imgs/BgDpm.svg"

export default function Bem() {
    const [isModalVisible, setIsModalVisible] = useState(true);

    const closeModal = () => {
      setIsModalVisible(false);
    }
  
    if (!isModalVisible) return null;


    return (
        <header className='flex items-center justify-center relative left-48'>
        <Favorite/>
            <div className='relative'>
            <Image 
            src={Close}
            alt="Close button"
            className=" absolute top-28 right-48 cursor-pointer"
            onClick={closeModal}
            />
            <div className='flex gap-7 absolute bottom-28 left-28'>
                <div className=" cursor-pointer  border-2 border-white rounded-3xl  flex flex-col items-center justify-center ">
                <Image src={upload} alt="Upload DPM" className="w-full" />
                <Image src={best} alt="Best DPM" className="w-full" />
                <Image src={productive} alt="Productive DPM" className="w-[200px]"/>
            </div>
                <div className='cursor-pointer border-2 border-white rounded-3xl py-1 flex flex-col items-center justify-center '>
                <Image src={upload} alt="Upload DPM" className="w-full" />
                <Image src={best} alt="Best DPM" className="w-full" />
                <Image src={collab} alt="Productive DPM" className="w-52"/>
                </div>
            </div>
            <Image src={BgBem} alt="Background BEM" className="w-[90%]"/>
            </div>
        </header>
    )
} 