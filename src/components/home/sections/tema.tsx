import React from "react";
import EventThemeTitle from "../../../assets/svg/fragments/eventheme-text.svg";
import EventThemeImg from "../../../assets/svg/fragments/anargya-text.svg";
import GlitterBg from "../../../assets/img/fragments/glitter-eventtheme.png";
import style from "../style/tema.module.css";
import type { FC } from "react";
import Image from "next/image";

const EventTheme: FC = () => {
  return (
    <main className={style.event_theme}>
      <div className={style.glitter_bg}>
        <Image src={GlitterBg} alt="" />
      </div>
      <Image src={EventThemeTitle} alt="" />
      <Image src={EventThemeImg} alt="" id={style.anargya_text} />
      <p>
        Cita-cita untuk menjadikan Universitas Brawijaya sebagai tempat yang
        berharga dan bermanfaat bagi seluruh simpul Brawijaya.
      </p>
    </main>
  );
};

export default EventTheme;
