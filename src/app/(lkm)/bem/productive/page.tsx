"use client";
import type { FC } from "react";
import BgKategori from "@/components/lkm/background/bg-main";
import { UploaderComponent } from "@/components/lkm/section/Uploader";

const Page: FC = () => {
  return (
    <main className="w-screen min-h-screen relative flex justify-center">
      <BgKategori />
      <UploaderComponent
        lkm="BEM"
        title="Badan Eksekutif Mahasiswa"
        subtitle="Best Productive"
        description="Diukur dari jumlah program kerja yang terlaksana beserta
                dokumentasi program kerja sesuai dengan jumlah total bobot
                penilaian."
        id="bem"
        type="0"
      />
    </main>
  );
};

export default Page;
