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
        subtitle="Best Collaborative"
        description="Diukur dari total kegiatan partnership baik studi banding atau
                hal lainnya dalam lingkup UB maupun eksternal UB sesuai dengan
                jumlah total bobot penilaian."
        id="bem"
        type="0"
        nomination_id="best-collaborative-bem"
      />
    </main>
  );
};

export default Page;
