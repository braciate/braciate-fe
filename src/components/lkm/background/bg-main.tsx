import type { FC } from "react";
import Image from "next/image";
import Bg from "../../../assets/svg/background/bg-kipas.svg";
import BgFavorite from "./bg-favoriteTop";

const BgKategori: FC = () => {
  return (
    <div className="absolute w-full h-full -z-10">
      <Image
        src={Bg}
        alt="bg auth"
        className="object-cover h-full"
        fill={true}
      />
      <BgFavorite />
    </div>
  );
};

export default BgKategori;
