import Image from "next/image";
import titleHero from "@/assets/svg/title/herotitlenotrophy.svg";
import HeroSection from "@/assets/img/fragments/piala.png";
import type { FC } from "react";
import BgHero from "../backgrounds/bg-hero";

const Hero: FC = () => {
  return (
    <section
      className="hero-section flex justify-center h-screen items-center lg:items-start"
      id="home"
    >
      <BgHero />
      <div className="hero-title h-fit w-full max-w-[1200px] flex justify-start self-center">
        <div className="relative h-fit w-max scale-150 sm:scale-100">
          <Image
            className="z-[1] relative"
            src={titleHero}
            alt="..."
            priority={true}
          />
          <Image
            className="w-1/2 scale-[.4] sm:right-16 sm:bottom-16 bottom-8 right-9 brightness-75 opacity-50 absolute sm:block md:right-28"
            src={HeroSection}
            alt="..."
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
