import React from "react";
import EventThemeTitle from "../../../assets/svg/fragments/eventheme-text.svg";
import EventThemeImg from "../../../assets/svg/fragments/anargya-text.svg";
import GlitterBg from "../../../assets/img/fragments/glitter-eventtheme.png";
import style from "../style/tema.module.css";
import type { FC } from "react";
import Image from "next/image";

const EventTheme: FC = () => {
  return (
    <main className={`${style.event_theme} -space-y-8  py-2`}>
      <div className={style.glitter_bg}>
        <Image src={GlitterBg} alt="" className="hidden sm:block" />
      </div>
      <Image
        src={EventThemeTitle}
        alt=""
        className="w-8/12 sm:w-7/12 md:w-5/12"
      />
      <Image src={EventThemeImg} alt="" id={style.anargya_text} />
      <p className="text-sm sm:text-xl">
        Cita-cita untuk menjadikan Universitas Brawijaya sebagai tempat yang
        berharga dan bermanfaat bagi seluruh simpul Brawijaya.
      </p>
    </main>
  );
};

export default EventTheme;
