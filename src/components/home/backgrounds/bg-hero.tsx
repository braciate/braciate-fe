import type { FC } from "react";
import Image from "next/image";
import BgHeroSection from "@/assets/img/background/herobackground.png";
import glitter from "@/assets/img/background/glitter.png";

const BgHero: FC = () => {
  return (
    <div className="absolute w-full h-full brightness-100 bg-black">
      <Image src={glitter} alt="glitter" fill={true} className="object-cover" />
      <Image
        src={BgHeroSection}
        alt="bg auth"
        className="object-cover"
        fill={true}
      />
    </div>
  );
};

export default BgHero;
