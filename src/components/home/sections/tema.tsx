import React from "react";
import EventThemeImg from "@/public/svg/Theme_imgs/anargya-text.svg";
import GlitterBg from "@/public/svg/Theme_imgs/glitter-eventtheme.png";
import Image from "next/image";
import type { FC } from "react";
import styleText from "../style/panduan.module.css";
import bling from "@/public/img/fragments/bling.png";

const EventTheme: FC = () => {
  return (
    <main className="w-full h-full bg-black py-[9%] flex flex-col items-center justify-center relative bg-cover bg-center object-cover">
      <div className="absolute w-full md:top-0 md:left-0">
        <Image src={GlitterBg} alt="" className="w-full h-auto" />
      </div>
      <div className="font-jaoren flex gap-2 text-5xl sm:text-6xl md:text-7xl tracking-wider z-10 relative w-max h-auto">
        <h1 className={styleText.subtitle}>event</h1>
        <h1>theme</h1>
        <Image
          src={bling}
          alt=""
          className="absolute -bottom-20 sm:-bottom-16 scale-50 sm:scale-75 -left-16"
        />
      </div>
      <Image
        src={EventThemeImg}
        alt=""
        className="md:mt-[-5em] mt-[-2em] w-full max-w-[800px] z-10"
      />
      <p className="font-poppins font-light md:text-[18px] z-10 sm:text-xl text-xs text-center w-[70%] max-w-[550px] md:mt-[-80px] mt-[-30px]">
        Cita-cita untuk menjadikan Universitas Brawijaya sebagai tempat yang
        berharga dan bermanfaat bagi seluruh simpul Brawijaya.
      </p>
    </main>
  );
};

export default EventTheme;
