"use client";
import React from "react";
import type { FC } from "react";
import BgKategori from "@/components/lkm/background/bg-main";
import style from "../../page.module.css";
import { Input } from "@/components/ui/input";
import usePage from "@/hooks/usePage";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StepBack, StepForward, Search } from "lucide-react";
import { useRouter } from "next/navigation";

const Page: FC = () => {
  const router = useRouter();
  const { currentPage, currentItems, totalPages, setCurrentPage } = usePage();
  return (
    <section className="w-screen h-max relative flex flex-col items-center">
      <BgKategori />
      <main className="w-screen flex flex-col items-center space-y-3">
        <div className="font-jaoren text-center mt-12">
          <h1 className="text-6xl">Badan Eksekutif Mahasiswa</h1>
          <h2 id={style.text_clip} className="text-5xl">
            Best Favorite
          </h2>
        </div>
        <div className="mx-4 w-11/12 space-y-6">
          <div className="relative flex w-11/12 mx-auto">
            <Input
              className="bg-transparent border-2 rounded-full py-3 px-12 placeholder:text-white"
              placeholder="Cari BEM terfavorit kamu"
            />
            <Search className="absolute bottom-3 left-4" />
          </div>
          <div className="flex justify-center items-center gap-2">
            <Button
              onClick={() => {
                setCurrentPage((prev) => Math.max(prev - 1, 1));
              }}
              disabled={currentPage === 1}
              className="p-0"
            >
              <StepBack className="h-auto w-6" />
            </Button>
            <div className="grid grid-cols-2 md:grid-cols-4 mb-4 w-11/12 gap-8 justify-center">
              {currentItems.map((item) => (
                <Card
                  key={item.id}
                  className="flex flex-col justify-between border-2 mx-auto items-center rounded-4xl w-32 h-40 sm:w-56 sm:h-44 md:w-36 lg:w-48 lg:h-48 gap-4"
                >
                  <CardContent className="px-3 py-2 flex items-center flex-col text-center w-full">
                    <span className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white mb-2 lg:mb-2" />
                    <h3 className=" text-2xl sm:text-3xl  font-semibold font-jaoren">
                      {item.title}
                    </h3>
                    <Button
                      className="text-xs sm:text-base lg:text-xl rounded-full border w-full font-jaoren mt-0 lg:mt-2 h-6"
                    >
                      Vote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button
              onClick={() => {
                setCurrentPage((prev) => Math.min(prev + 1, totalPages));
              }}
              disabled={currentPage === totalPages}
              className="p-0"
            >
              <StepForward className="h-auto w-6" />
            </Button>
          </div>
          <div className="flex justify-center items-center gap-2 pb-12">
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i}
                onClick={() => {
                  setCurrentPage(i + 1);
                }}
                className={`w-2 h-2 p-0 rounded-full ${
                  currentPage === i + 1 ? `${style.dot}` : "bg-white"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Page;
