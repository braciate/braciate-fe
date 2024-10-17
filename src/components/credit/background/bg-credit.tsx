import type { FC } from "react";
import Image from "next/image";
import Bg from "@/public/svg/background/bg-panduan.svg";

const BgCredit: FC = () => {
  return (
    <div className="absolute w-full h-full -z-10">
      <Image
        src={Bg}
        alt="bg auth"
        className="h-full object-center object-contain"
        fill={true}
      />
    </div>
  );
};

export default BgCredit;
