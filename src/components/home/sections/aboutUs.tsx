import TriangleLeft from "@/public/svg/fragments/triangle-left.svg";
import TriangleRight from "@/public/svg/fragments/triangle-right.svg";
import Image from "next/image";
import "../style/aboutUs.module.css";
import style from "../style/panduan.module.css";
import type { FC } from "react";
import bling from "@/public/img/fragments/bling.png";

const AboutUs: FC = () => {
  return (
    <div className="h-screen mb-4">
      <main
        className="w-screen flex flex-col items-center p-24 relative"
        id="about"
      >
        <div className="absolute flex flex-row flex-nowrap items-center justify-between w-full">
          <Image
            src={TriangleLeft}
            alt=""
            className=" w-3/12 md:w-auto md:scale-100 sm:scale-75 scale-[.6] -mt-10 md:mt-0"
          />
          <Image
            src={TriangleRight}
            alt=""
            className="w-3/12 md:w-auto md:scale-100 sm:scale-75 scale-[.6] -mt-10 md:mt-0"
          />
        </div>
        <div className="w-3/4 flex flex-col items-center">
          <div className="flex gap-4 font-jaoren text-7xl tracking-wider w-max h-auto relative scale-75 sm:scale-90 md:scale-100">
            <h1 className={style.subtitle}>About</h1>
            <h1>us</h1>
            <Image
              src={bling}
              alt=""
              className="absolute -bottom-14 scale-50 -right-4"
            />
          </div>
          <div className="w-64 sm:w-96 md:w-auto">
            <p className="text-xs sm:text-base text-center mt-4 md:mt-10 font-poppins">
              Brawijaya Appreciate merupakan program kerja yang diselenggarakan
              Kementerian Dalam Negeri EM UB 2024 yang bertujuan untuk
              meningkatkan keharmonisan antar lembaga-lembaga di Universitas
              Brawijaya. Brawijaya Appreciate terdiri atas tiga rangkaian
              kegiatan yaitu pre-event, main-event, dan post-event. Acara puncak
              akan diisi oleh penampilan UKM yang ada di Universitas Brawijaya.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
