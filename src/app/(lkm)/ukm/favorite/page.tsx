"use client";

import React from "react";
import type { FC } from "react";
import BgKategori from "@/components/lkm/background/bg-main";
import { FavoriteUKM } from "@/components/lkm/section/FavoriteUkm";
const Page: FC = () => {
  return (
    <section className="w-screen h-max relative flex flex-col items-center">
      <BgKategori />
      <FavoriteUKM title="Unit Kegiatan Mahasiswa" lkm="ukm" type="2" />
    </section>
  );
};

export default Page;
