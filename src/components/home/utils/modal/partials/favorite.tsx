"use client";

import Image from "next/image";
import bestfavorite from "@/public/svg/Modal_imgs/bestfavorite.png";

export default function Favorite() {
  return (
    <div className=" flex items-center justify-center ">
      <div className="relative">
        <div className="">
          <Image
            src={bestfavorite}
            alt="Favorite item"
            className="rounded-md w-[250px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
