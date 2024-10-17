import type { FC } from "react";
import Image from "next/image";
import BgLogin from "@/public/svg/background/bg-auth.svg";
import glitter from "@/public/img/background/glitter.png";

const BgAuth: FC = () => {
  return (
    <div className="absolute w-full h-full brightness-75">
      <Image
        src={glitter}
        alt="glitter"
        fill={true}
        className="object-cover z-0"
      />
      <Image
        src={BgLogin}
        alt="bg auth"
        className="object-cover -z-10 brightness-75"
        fill={true}
      />
    </div>
  );
};

export default BgAuth;
