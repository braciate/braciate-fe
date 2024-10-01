import type { FC } from "react";
import Image from "next/image";
import BgHeroSection from "@/assets/img/background/herobackground.png";
import glitter from "@/assets/img/background/glitter.png";
import ShadowBot from "@/assets/img/fragments/blackshadow-bottom.png";

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
        fill={true}
      />
      <Image
        src={ShadowBot}
        alt="bg auth"
        className="absolute h-full bottom-0"
      />
    </div>
  );
};

export default BgHero;
