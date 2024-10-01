import React from "react";
import EventThemeTitle from "../../../assets/svg/fragments/eventheme-text.svg";
import EventThemeImg from "../../../assets/svg/fragments/anargya-text.svg";
import GlitterBg from "../../../assets/img/fragments/glitter-eventtheme.png";
import style from "../style/tema.module.css";
import type { FC } from "react";
import Image from "next/image";

const EventTheme: FC = () => {
  return (
    <main className={`${style.event_theme} h-96 sm:h-screen`}>
      <div className="absolute h-auto w-full ">
        <Image src={GlitterBg} alt="" />
      </div>
      <Image
        src={EventThemeTitle}
        alt=""
        className="w-8/12 sm:w-7/12 md:w-5/12 z-[1]"
      />
      <Image
        src={EventThemeImg}
        alt=""
        id={style.anargya_text}
        className=" -mt-10 md:-mt-20 z-[1]"
      />
      <p className="text-sm sm:text-xl -mt-10 md:-mt-20 font-medium">
        Cita-cita untuk menjadikan Universitas Brawijaya sebagai tempat yang
        berharga dan bermanfaat bagi seluruh simpul Brawijaya.
      </p>
    </main>
  );
};

export default EventTheme;
