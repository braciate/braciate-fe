import React from "react";
import type { FC } from "react";
import BgKategori from "@/components/lkm/background/bg-main";
import Image from "next/image";

const Page: FC = () => {
  return (
    <div className="w-screen h-screen relative">
      <BgKategori />
      <h1>page favorite</h1>
    </div>
  );
};

export default Page;
