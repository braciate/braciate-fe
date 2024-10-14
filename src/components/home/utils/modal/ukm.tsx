'use client';

import React from 'react';
import Image from 'next/image';
import best from '@/assets/svg/Modal_imgs/dpm_imgs/best.svg';
import upload from '@/assets/svg/Modal_imgs/dpm_imgs/upload.svg';
import productive from '@/assets/svg/Modal_imgs/dpm_imgs/productive.svg';
import collab from "@/assets/svg/Modal_imgs/dpm_imgs/collab.svg"
import { useState } from 'react'
import Close from '@/assets/svg/Modal_imgs/Close.svg'

import Art from '@/assets/svg/Modal_imgs/dpm_imgs/art.svg'
import Sport from '@/assets/svg/Modal_imgs/dpm_imgs/sport.svg'
import BgUkm from '@/assets/svg/Modal_imgs/BgUkm.svg'

import achievement from '@/assets/svg/Modal_imgs/dpm_imgs/achievement.svg';
import Critical from '@/assets/svg/Modal_imgs/dpm_imgs/Critical.svg';
import Thingking from '@/assets/svg/Modal_imgs/dpm_imgs/Thingking.svg';

import Favorite from './partials/favorite';

export default function Ukm(){ 
    const [isModalVisible, setIsModalVisible] = useState(true);

    const closeModal = () => {
      setIsModalVisible(false);
    }
  
    if (!isModalVisible) return null;

    return( 
        <header className='flex items-center justify-center'>
        <Favorite/>
        <div className='relative rounded-lg p-4'>
        <Image 
        src={Close}
        alt="Close button"
        className=" absolute top-36 right-36 cursor-pointer"
        onClick={closeModal}
        />
        <div className='flex gap-7  absolute bottom-32 left-36'>
            <div className=" cursor-pointer  border-2 border-white rounded-3xl  flex flex-col items-center justify-center ">
                <Image src={upload} alt="Upload DPM" className="w-full" />
                <Image src={best} alt="Best DPM" className="w-full" />
                <Image src={productive} alt="Productive DPM" className="w-[200px]"/>
            </div>

            <div className='cursor-pointer border-2 border-white rounded-3xl py-1 flex flex-col items-center justify-center '>
                <Image src={upload} alt="Upload DPM" className="w-full" />
                <Image src={best} alt="Best DPM" className="w-full" />
                <Image src={achievement} alt="Productive DPM" className="w-full"/>
                <Image src={Critical} alt="Critical DPM" className="w-full"/>
                <Image src={Thingking} alt="Thingking DPM" className="w-full"/>
                </div>

            <div className='cursor-pointer border-2 border-white rounded-3xl px-1 py-4  flex flex-col items-center justify-center'>
                <Image src={upload} alt='Upload BEM' className='w-full'/>
                <Image src={best} alt='Best BEM'  className="w-full"/>
                <Image src={Art} alt='Art BEM'  className="w-full"/>
                <Image src={Sport} alt='Sport BEM'  className="w-full"/>
            </div>
        </div>
        <Image src={BgUkm} alt="Background BEM" className="w-full"/>
        </div>
    </header>
    )
}