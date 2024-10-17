import React from "react";
import iconLeft from "@/public/svg/fragments/visi-misi-left.svg";
import iconRight from "@/public/svg/fragments/visi-misi-right.svg";
import type { FC } from "react";
import Image from "next/image";
import styleText from "../style/panduan.module.css";
import bling from "@/public/img/fragments/bling.png";
const VisionMission: FC = () => {
  return (
    <section className="w-full h-screen relative flex flex-col justify-center">
      <div className="absolute w-full h-auto flex flex-row items-center justify-between">
        <Image src={iconLeft} alt="" className="w-3/12 md:w-2/12 h-auto" />
        <Image src={iconRight} alt="" className="w-3/12 md:w-2/12 h-auto" />
      </div>
      <main className="w-4/6 mx-auto grid gap-9">
        <div className="flex flex-col md:flex-row-reverse gap-4 items-center text-center w-full justify-around">
          <div className="relative w-max h-auto">
            <h1
              className={`font-jaoren ${styleText.subtitle} text-5xl sm:text-6xl md:text-7xl`}
            >
              Vision
            </h1>
            <Image
              src={bling}
              alt=""
              className="absolute -bottom-6 sm:-bottom-8 scale-50 sm:scale-75 left-0"
            />
          </div>
          <p className="text-xs sm:text-base w-10/12 sm:w-7/12">
            Bring The Great Story with Harmonization and Collaborative Simpul
            Brawijaya.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full items-center">
          <div className="relative w-max h-auto">
            <h1
              className={`font-jaoren ${styleText.subtitle} text-5xl sm:text-6xl md:text-7xl`}
            >
              Mission
            </h1>
            <Image
              src={bling}
              alt=""
              className="absolute -bottom-8 sm:-bottom-12 scale-50 sm:scale-75 left-10 sm:left-14"
            />
          </div>
          <ol className="list-none p-0 m-0 space-y-2 text-xs sm:text-base z-10">
            <li className="flex">
              <span className="flex-none w-6">1.</span>
              <span>
                Menciptakan dan memaksimalkan kolaboratif simpul brawijaya yang
                berlandaskan kebersamaan dan pengembangan
              </span>
            </li>
            <li className="flex">
              <span className="flex-none w-6">2.</span>
              <span>
                Menciptakan branding serta citra positif bagi simpul brawijaya
                dengan semangat kolaboratif
              </span>
            </li>
            <li className="flex">
              <span className="flex-none w-6">3.</span>
              <span>
                Memotivasi simpul brawijaya menjadi wadah mahasiswa yang
                progressive, berinovasi, dan future oriented
              </span>
            </li>
          </ol>
        </div>
      </main>
    </section>
  );
};

export default VisionMission;
