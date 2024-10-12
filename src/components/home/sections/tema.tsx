import React from "react";
import EventThemeTitle from "../../../assets/svg/Theme_imgs/eventheme-text.svg";
import EventThemeImg from "../../../assets/svg/Theme_imgs/anargya-text.svg";
import GlitterBg from "../../../assets/svg/Theme_imgs/glitter-eventtheme.png";
import EventThemeImgHp from "../../../assets/svg/Theme_imgs/EventThemeImgHp.svg";
import Image from "next/image";
import type { FC } from "react";

const EventTheme: FC = () => {
  return (
    <main className="w-full h-full bg-black py-[9%] flex flex-col items-center justify-center relative bg-cover bg-center object-cover">
      <div className="absolute w-full md:top-0 md:left-0">
        <Image src={GlitterBg} alt="" className="w-full h-auto" />
      </div>
      <Image src={EventThemeTitle} alt="" className="hidden md:block" />
      <Image src={EventThemeImgHp} alt="" className="block md:hidden" />
      <Image
        src={EventThemeImg}
        alt=""
        className="md:mt-[-5em] mt-[-2em] md:w-full w-[80%] max-w-[800px]"
      />
      <p className="font-poppins font-light md:text-[18px] text-[9px] text-center w-[70%] max-w-[550px] md:mt-[-80px] mt-[-30px]">
        Cita-cita untuk menjadikan Universitas Brawijaya sebagai tempat yang
        berharga dan bermanfaat bagi seluruh simpul Brawijaya.
      </p>
    </main>
  );
};

export default EventTheme;
