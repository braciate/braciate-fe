import AboutUsImg from "@/assets/svg/title/aboutustext.svg";
import TriangleLeft from "@/assets/svg/fragments/triangle-left.svg";
import TriangleRight from "@/assets/svg/fragments/triangle-right.svg";
import Image from "next/image";
import style from "../style/aboutUs.module.css";
import type { FC } from "react";
const AboutUs: FC = () => {
  return (
    <div className="h-screen">
      <main className={style.aboutUs} id="about">
        <div className={style.triangleIcons}>
          <Image src={TriangleLeft} alt="" />
          <Image src={TriangleRight} alt="" id={style.triangleRight} />
        </div>
        <Image src={AboutUsImg} alt="" id={style.aboutUsImg} />
        <p id={style.aboutUsInfo} className="text-justify">
          Brawijaya Appreciate merupakan program kerja yang diselenggarakan
          Kementerian Dalam Negeri EM UB 2024 yang bertujuan untuk meningkatkan
          keharmonisan antar lembaga-lembaga di Universitas Brawijaya. Brawijaya
          Appreciate terdiri atas tiga rangkaian kegiatan yaitu pre-event,
          main-event, dan post-event. Acara puncak akan diisi oleh penampilan
          UKM yang ada di Universitas Brawijaya.
        </p>
      </main>
    </div>
  );
};

export default AboutUs;
