import type { FC } from "react";
import Image from "next/image";
import Bg from "@/public/svg/background/bg-panduan.svg";
import ShadowTop from "@/public/img/fragments/blackuppershadow.png";
import ShadowBot from "@/public/img/fragments/blackshadow-bottom.png";
const BgPanduan: FC = () => {
  return (
    <main className="absolute">
      <div className="relative w-full h-full -z-10">
        <Image src={ShadowTop} alt="bg auth" className="absolute h-full" />
        <Image src={Bg} alt="bg auth" className="object-cover h-screen" />
        <Image
          src={ShadowBot}
          alt="bg auth"
          className="absolute h-full bottom-0"
        />
      </div>
    </main>
  );
};

export default BgPanduan;
