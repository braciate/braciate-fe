import type { FC } from "react";
import Image from "next/image";
import BgHeroSection from "@/public/img/background/herobackground.png";
import glitter from "@/public/img/background/glitter.png";
import ShadowBot from "@/public/img/fragments/blackshadow-bottom.png";
import kilau from "@/public/img/background/kilau_hero.png";

const BgHero: FC = () => {
  return (
    <div className="absolute w-full h-full brightness-100 bg-black">
      <Image
        src={glitter}
        alt=""
        fill={true}
        className="object-cover"
        priority={true}
      />
      <Image
        src={BgHeroSection}
        alt="bg auth"
        className="object-cover"
        priority
        fill={true}
      />
      <Image src={kilau} alt="kilau" className="object-cover" fill />
      <Image
        src={ShadowBot}
        alt="bg auth"
        className="absolute h-full bottom-0"
      />
    </div>
  );
};

export default BgHero;
