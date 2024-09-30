import AboutUsImg from "@/assets/svg/title/aboutustext.svg";
import TriangleLeft from "@/assets/svg/fragments/triangle-left.svg";
import TriangleRight from "@/assets/svg/fragments/triangle-right.svg";
import Image from "next/image";
import "../style/aboutUs.module.css";
import type { FC } from "react";
const AboutUs: FC = () => {
  return (
    <div className="h-screen">
      <main
        className="w-screen h-auto flex flex-col items-center p-24 relative"
        id="about"
      >
        <div className="absolute flex flex-row flex-nowrap items-center justify-between w-full">
          <Image src={TriangleLeft} alt="" className=" w-3/12 md:w-auto" />
          <Image src={TriangleRight} alt="" className="w-3/12 md:w-auto" />
        </div>
        <div className="w-3/4 flex flex-col items-center">
          <Image
            src={AboutUsImg}
            alt=""
            className="scale-125 sm:scale-110 md:scale-100"
          />
          <div className="w-64 sm:w-96 md:w-auto">
            <p className="text-xs sm:text-base text-center mt-10">
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
