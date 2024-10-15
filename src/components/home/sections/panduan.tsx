import kiri from "@/assets/svg/fragments/kiri.svg";
import kanan from "@/assets/svg/fragments/kanan.svg";
import bling from "@/assets/img/fragments/bling.png";
import type { FC } from "react";
import BgPanduan from "../backgrounds/bg-panduan";
import style from "../style/panduan.module.css";
import Image from "next/image";
const Panduan: FC = () => {
  return (
    <section id="panduan" className={`h-screen relative ${style.panduan}`}>
      <BgPanduan />
      <div className={`${style.content} relative w-screen`}>
        <Image
          className={`${style.kiri} h-64 sm:h-72`}
          src={kiri}
          alt="samping"
        />
        <div className="flex items-center flex-wrap gap-[40px] md:gap-20 flex-col h-max md:flex-row w-max mx-10 justify-evenly px-2">
          <div className="text-center title min-[863px]:text-start leading-4">
            <div className="relative">
              <h1
                className={`${style.subtitle} text-7xl md:text-8xl font-jaoren bg-clip-text`}
              >
                Voting
              </h1>
              <Image
                src={bling}
                alt="bling"
                className="absolute -bottom-7 h-auto w-3/4 -left-16"
              />
            </div>
            <h3 className={`subtitle2 text-5xl md:text-[50px] font-jaoren`}>
              Guide
            </h3>
          </div>
          <ol className="text-sm desc md:text-xl text-justify w-max">
            <li className="flex">
              <p className="flex-none w-6">1.</p>
              <p>Login menggunakan akun UB anda</p>
            </li>
            <li className="flex">
              <p className="flex-none w-6">2.</p>
              <p>
                Pilih kategori nominasi <strong>BEST FAVORITE</strong>
              </p>
            </li>
            <li className="flex">
              <p className="flex-none w-6">3.</p>
              <p>Pilih LKM atau UKM yang akan ada vote</p>
            </li>
          </ol>
        </div>
        <Image
          className={`h-64 sm:h-72 absolute right-0`}
          src={kanan}
          alt="samping"
        />
      </div>
    </section>
  );
};

export default Panduan;
