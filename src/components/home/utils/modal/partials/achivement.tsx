'use client';

import React from 'react';
import Image from 'next/image';
import best from '@/assets/svg/Modal_imgs/dpm_imgs/best.svg';
import upload from '@/assets/svg/Modal_imgs/dpm_imgs/upload.svg';
import collab from "@/assets/svg/Modal_imgs/dpm_imgs/collab.svg"

export default function Achievement() {
    return (
        <header className='flex items-center justify-center relative left-48'>
            <div className='relative'>
            <div className='flex gap-7 absolute bottom-28 left-28'>
                <div className='cursor-pointer border-2 border-white rounded-3xl py-1 flex flex-col items-center justify-center '>
                <Image src={upload} alt="Upload DPM" className="w-full" />
                <Image src={best} alt="Best DPM" className="w-full" />
                <Image src={collab} alt="Productive DPM" className="w-52"/>
                </div>
            </div>
            </div>
        </header>
    )
} 