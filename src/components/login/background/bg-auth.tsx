import type { FC } from "react";
import Image from "next/image";
import BgLogin from "@/assets/svg/background/bg-auth.svg";

const BgAuth: FC = () => {
  return (
    <div className="fixed w-screen h-screen -z-10 brightness-75">
      <Image
        src={BgLogin}
        alt="bg auth"
        className="object-cover bg-repeat h-screen"
        fill={true}
      />
    </div>
  );
};

export default BgAuth;
