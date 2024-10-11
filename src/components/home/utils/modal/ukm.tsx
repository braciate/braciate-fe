'use client';

import React from 'react';
import Image from 'next/image';
import best from '@/assets/svg/Modal_imgs/dpm_imgs/best.svg';
import upload from '@/assets/svg/Modal_imgs/dpm_imgs/upload.svg';
import productive from '@/assets/svg/Modal_imgs/dpm_imgs/productive.svg';
import collab from "@/assets/svg/Modal_imgs/dpm_imgs/collab.svg"
import { useState } from 'react'
import Close from '@/assets/svg/Modal_imgs/Close.svg'
import Achievement from '@/assets/svg/Modal_imgs/dpm_imgs/achievement.svg'
import Critical from '@/assets/svg/Modal_imgs/dpm_imgs/Critical.svg'
import Thingking from '@/assets/svg/Modal_imgs/dpm_imgs/Thingking.svg'
import Creativity from '@/assets/svg/Modal_imgs/dpm_imgs/Creativity.svg'

import Art from '@/assets/svg/Modal_imgs/dpm_imgs/art.svg'
import Sport from '@/assets/svg/Modal_imgs/dpm_imgs/sport.svg'

export default function Ukm(){ 
    const [isModalVisible, setIsModalVisible] = useState(true);

    const closeModal = () => {
      setIsModalVisible(false);
    }
  
    if (!isModalVisible) return null;

    return( 
        <header className='flex flex-col items-center justify-center'>
        <div className='relative bg-[#D7A129] rounded-lg p-4'>
        <Image 
        src={Close}
        alt="Close button"
        className=" absolute top-1 right-2 cursor-pointer"
        onClick={closeModal}
        />
        <div className='flex gap-2'>
            <div className='cursor-pointer bg-[#D7A129] border-2 border-white rounded-lg px-1 py-4  flex flex-col items-center justify-center '>
                <Image src={upload} alt='Upload BEM' />
                <Image src={best} alt='Best BEM' />
                <Image src={productive} alt='Productive BEM' />
            </div>

            <div className='cursor-pointer bg-[#D7A129] border-2 border-white rounded-lg px-1 py-4  flex flex-col items-center justify-center '>
                <Image src={upload} alt='Upload BEM' />
                <Image src={best} alt='Best BEM' />
                <Image src={Achievement} alt='Achievement BEM'  className="w-16"/>
                <Image src={Critical} alt='Critical BEM'  className="w-16"/>
                <Image src={Thingking} alt='Thingking BEM'  className="w-16"/>
                <Image src={Creativity} alt='Creativity BEM'  className="w-16"/>
            </div>

            <div className='cursor-pointer bg-[#D7A129] border-2 border-white rounded-lg px-1 py-4  flex flex-col items-center justify-center'>
                <Image src={upload} alt='Upload BEM' />
                <Image src={best} alt='Best BEM'  className="w-16"/>
                <Image src={Art} alt='Art BEM'  className="w-16"/>
                <Image src={Sport} alt='Sport BEM'  className="w-16"/>
            </div>
        </div>
        </div>
    </header>
    )
}