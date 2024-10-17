import type { FC } from "react";
import Image from "next/image";
import BgAuSection from "@/public/img/background/bg-au.png";

const BgAu: FC = () => {
  return (
    <div className="absolute w-full h-full brightness-100 bg-black">
      <Image
        src={BgAuSection}
        alt="bg auth"
        className="object-cover h-screen"
        fill={true}
      />
    </div>
  );
};

export default BgAu;
