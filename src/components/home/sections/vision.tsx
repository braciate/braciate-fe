import React from "react";
import iconLeft from "../../../assets/svg/fragments/visi-misi-left.svg";
import iconRight from "../../../assets/svg/fragments/visi-misi-right.svg";
import visiText from "../../../assets/svg/fragments/visi-text.svg";
import misiText from "../../../assets/svg/fragments/misi-text.svg";
import style from "../style/vision.module.css";
import type { FC } from "react";
import Image from "next/image";

const VisionMission: FC = () => {
  return (
    <main className={style.vision_mission}>
      <div className={style.background_icons}>
        <Image src={iconLeft} alt="" id={style.icon_left} />
        <Image src={iconRight} alt="" id={style.icon_right} />
      </div>
      <div className={style.vision_container}>
        <p id={style.vision_info}>
          Bring The Great Story with Harmonization and Collaborative Simpul
          Brawijaya.
        </p>
        <Image src={visiText} alt="" id={style.visi_text} />
      </div>
      <div className={style.mission_container}>
        <Image src={misiText} alt="" id={style.misi_text} />
        <p className="z-0">
          1. Menciptakan dan memaksimalkan kolaboratif simpul brawijaya yang
          berlandaskan kebersamaan dan pengembangan
          <br />
          2. Menciptakan branding serta citra positif bagi simpul brawijaya
          dengan semangat sinergi dan harmonisasi
          <br />
          3. Memotivasi simpul brawijaya menjadi wadah mahasiswa yang berimpact,
          berintegritas, dan future oriented
        </p>
      </div>
    </main>
  );
};

export default VisionMission;
