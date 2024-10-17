import Image from "next/image";
import Trophy from "@/assets/img/fragments/piala.png";
import type { FC } from "react";
import BgHero from "../backgrounds/bg-hero";
import style from "../style/panduan.module.css";
import bling from "@/assets/img/fragments/bling.png";
const Hero: FC = () => {
  return (
    <section
      className="hero-section flex justify-center h-screen items-center lg:items-start"
      id="home"
    >
      <BgHero />
      <div className="hero-title h-fit w-full max-w-[1200px] flex justify-start self-center">
        <div className="relative h-fit w-full text-center">
          <div className="relative w-max h-auto self-center mx-auto scale-75 sm:scale-90 md:scale-100">
            <h1 className="font-jaoren text-5xl md:text-7xl relative z-10">
              brawijaya
            </h1>
            <h1
              className={`font-jaoren text-6xl md:text-8xl ${style.subtitle} relative z-10`}
            >
              appreciate
            </h1>
            <Image
              className="w-1/2 scale-125 absolute -bottom-10 -right-20 opacity-60 z-20"
              src={bling}
              alt=""
            />
            <Image
              className="w-1/2 scale-125 absolute top-10 -left-10 opacity-60 z-20"
              src={bling}
              alt=""
            />
            <Image
              className="w-1/2 scale-110 md:scale-125 absolute bottom-10 md:-right-10 right-20 brightness-50  z-0"
              src={Trophy}
              alt="Trophy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
