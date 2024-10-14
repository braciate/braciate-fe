"use client";
import type { FC } from "react";
import BgKategori from "@/components/lkm/background/bg-main";
import { UploaderComponent } from "@/components/lkm/section/Uploader";

const Page: FC = () => {
  return (
    <main className="w-screen min-h-screen relative flex justify-center">
      <BgKategori />
      <UploaderComponent
        lkm="DPM"
        title="Dewan Perwakilan Mahasiswa"
        subtitle="Best Aspirative"
        description="Penilaian berdasarkan pada isu-isu yang terjaring & terselesaikan beserta pada program kerja penjaringan isu."
        id="dpm"
        type="0"
        nomination_id="best-aspirative-dpm"
      />
    </main>
  );
};

export default Page;
