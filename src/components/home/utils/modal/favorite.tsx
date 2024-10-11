'use client';

import Image from 'next/image'
import bestfavorite from '@/assets/svg/Modal_imgs/bestfavorite.svg'
import { useState } from 'react'
import Close from '@/assets/svg/Modal_imgs/Close.svg'


export default function Favorite() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const closeModal = () => {
    setIsModalVisible(false);
  }

  if (!isModalVisible) return null;

  return (
    <div className=" flex items-center justify-center ">
        <div className='relative'>
        <div className="">
          <Image
            src={bestfavorite}
            alt="Favorite item"
            className="rounded-md"
          />
        </div>
          <Image 
            src={Close}
            alt="Close button"
            className=" absolute top-0 right-0 cursor-pointer"
            onClick={closeModal}
          />
        </div>
      </div>
  )
}