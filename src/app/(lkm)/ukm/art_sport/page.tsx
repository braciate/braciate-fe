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
        subtitle="BEST Achievement of Art & Sport"
        description="Diukur dari hasil prestasi berdasarkan skala bagi UKM Kesenian &
                Olahraga sesuai dengan jumlah total bobot penilaian."
        id="ukm"
        type="6"
        nomination_id="best-art-sport-ukm"
      />
    </main>
  );
};

export default Page;
