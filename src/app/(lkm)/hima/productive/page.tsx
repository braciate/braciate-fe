"use client";
import type { FC } from "react";
import BgKategori from "@/components/lkm/background/bg-main";
import { UploaderComponent } from "@/components/lkm/section/Uploader";
const Page: FC = () => {
  return (
    <main className="w-screen min-h-screen relative flex justify-center">
      <BgKategori />
      <UploaderComponent
        lkm="HIMA"
        title="Himpunan Mahasiswa"
        subtitle="Best Productive"
        description="Diukur dari jumlah program kerja yang terlaksana beserta
                dokumentasi program kerja sesuai dengan jumlah total bobot
                penilaian."
        id="hima"
        type="0"
        nomination_id="best-productive-hima"
      />
    </main>
  );
};

export default Page;
