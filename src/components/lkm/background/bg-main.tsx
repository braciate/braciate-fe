import type { FC } from "react";
import BgFavorite from "./bg-Top";
import style from "@/app/global.module.css"
const BgKategori: FC = () => {
  return (
    <div className={`absolute w-full h-full -z-10 ${style.aboutFilosofi}`}>
      <BgFavorite />
    </div>
  );
};

export default BgKategori;
