"use client";
import type { FC } from "react";
import BgKategori from "@/components/lkm/background/bg-main";
import { UploaderComponent } from "@/components/lkm/section/Uploader";

const Page: FC = () => {
  return (
    <main className="w-screen min-h-screen relative flex justify-center">
      <BgKategori />
      <UploaderComponent
        lkm="UKM"
        title="Unit Kegiatan Mahasiswa"
        subtitle="BEST Productive"
        description=" Diukur dari jumlah program kerja yang terlaksana beserta
                dokumentasi program kerja sesuai dengan jumlah total bobot
                penilaian."
        id="ukm"
        type="6"
        nomination_id="best-productive-ukm"
      />
    </main>
  );
};

export default Page;
