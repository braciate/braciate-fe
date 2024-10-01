import React from "react";
import iconLeft from "../../../assets/svg/fragments/visi-misi-left.svg";
import iconRight from "../../../assets/svg/fragments/visi-misi-right.svg";
import visiText from "../../../assets/svg/fragments/visi-text.svg";
import misiText from "../../../assets/svg/fragments/misi-text.svg";
import type { FC } from "react";
import Image from "next/image";

const VisionMission: FC = () => {
  return (
    <section className="w-full h-screen relative flex flex-col justify-center">
      <div className="absolute w-full h-auto flex flex-row items-center justify-between">
        <Image src={iconLeft} alt="" className="w-3/12 md:w-2/12 h-auto" />
        <Image src={iconRight} alt="" className="w-3/12 md:w-2/12 h-auto" />
      </div>
      <main className="w-4/6 mx-auto grid gap-9">
        <div className="flex flex-col md:flex-row-reverse gap-4 items-center md:items-end text-center w-full">
          <Image src={visiText} alt="" className="w-6/12 md:w-3/12" />
          <p className="text-xs sm:text-base">
            Bring The Great Story with Harmonization and Collaborative Simpul
            Brawijaya.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full items-center">
          <Image src={misiText} alt="" className="w-7/12 md:w-4/12 md:-mt-10" />
          <ol className="list-none p-0 m-0 space-y-2 text-xs sm:text-base">
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
