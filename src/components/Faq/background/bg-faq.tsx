import type { FC } from "react";
import Image from "next/image";
import BgFaqSection from "@/assets/svg/background/bg-faq.svg";

const BgFaq: FC = () => {
  return (
    <div className="absolute w-full h-full brightness-50 -z-10 bg-black">
      <Image
        src={BgFaqSection}
        alt="bg auth"
        className="object-cover h-screen"
        fill={true}
      />
    </div>
  );
};

export default BgFaq;
