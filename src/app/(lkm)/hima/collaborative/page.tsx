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
        subtitle="Best Collaborative"
        description="Diukur dari total kegiatan partnership baik studi banding atau
                hal lainnya dalam lingkup UB maupun eksternal UB sesuai dengan
                jumlah total bobot penilaian."
      />
    </main>
  );
};

export default Page;
