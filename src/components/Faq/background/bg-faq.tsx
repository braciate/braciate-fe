import type { FC } from "react";
import Image from "next/image";
import BgFaqSection from "@/public/svg/background/bg-faq.svg";
import ShadowBot from "@/public/img/fragments/blackshadow-bottom.png";
const BgFaq: FC = () => {
  return (
    <div className="absolute w-full h-full brightness-50 -z-10 bg-black">
      <Image
        src={BgFaqSection}
        alt="bg auth"
        className="object-cover h-screen"
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

export default BgFaq;
