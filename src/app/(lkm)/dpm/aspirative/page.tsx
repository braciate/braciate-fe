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
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                alias doloremque, architecto tempore eos, ad rem voluptatum unde
                quisquam accusamus commodi dolores totam aut amet inventore
                maiores ducimus, tenetur ut!"
      />
    </main>
  );
};

export default Page;
