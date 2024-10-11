"use client";

import React from "react";
import BgKategori from "@/components/lkm/background/bg-main";
import style from "@/app/(lkm)/page.module.css";
import { Input } from "@/components/ui/input";
import usePage from "@/hooks/useFavUkm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StepBack, StepForward, Search } from "lucide-react";
import Image from "next/image";
import LoadingScreen from "@/components/loading/LoadingScreen";

interface Props {
  title: string;
  lkm: string;
  type: string;
}

export function FavoriteUKM({ title, lkm, type }: Props) {
  const {
    currentPage,
    currentItems,
    setCurrentPage,
    totalPages,
    setSearchTerm,
    setActiveFilter,
    activeFilter,
    searchTerm,
    filterKategori,
    noDataFound,
    isLoading,
    error,
  } = usePage("ukm", "6");
  const placeholder = lkm.toUpperCase();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="w-screen h-max relative flex flex-col items-center">
      <BgKategori />
      <main className="w-screen flex flex-col items-center space-y-3">
        <div className="font-jaoren text-center mt-12">
          <h1 className="text-6xl">{title}</h1>
          <h2 id={style.text_clip} className="text-5xl">
            Best Favorite
          </h2>
        </div>
        <div className="mx-4 w-11/12 space-y-6">
          <div className="relative flex w-11/12 mx-auto">
            <Input
              className="bg-transparent border-2 rounded-full py-3 px-12 placeholder:text-white"
              placeholder={`Cari ${placeholder} terfavorit kamu`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute bottom-3 left-4" />
          </div>
          {type !== "0" ? (
            <div className="gap-4 justify-center flex flex-wrap">
              {filterKategori.map((item: any) => (
                <span
                  key={item.type}
                  className={`font-jaoren rounded-3xl tracking-wider bg-transparent px-2 py-0.5 text-xl transition-colors cursor-pointer text-center border-2 w-36 ${
                    activeFilter === item.kategori
                      ? "bg-white text-black border-black"
                      : "border-white text-white"
                  }`}
                  onClick={() => setActiveFilter(item.kategori)}
                >
                  {item.kategori}
                </span>
              ))}
            </div>
          ) : null}
          <div className="flex justify-center items-center gap-2">
            <Button
              onClick={() => {
                setCurrentPage((prev: number) => Math.max(prev - 1, 1));
              }}
              disabled={currentPage === 1}
              className="p-0"
            >
              <StepBack className="h-auto w-6" />
            </Button>
            <div className="grid grid-cols-2 md:grid-cols-4 mb-4 w-11/12 gap-4 md:gap-8 justify-center min-h-[450px]">
              {noDataFound ? (
                <div className="col-span-2 md:col-span-4 text-center text-white text-2xl self-center font-jaoren">
                  Data tidak ditemukan
                </div>
              ) : (
                currentItems.map((item: any) => (
                  <Card
                    key={item.id}
                    className="flex flex-col justify-between border-2 mx-auto items-center rounded-4xl min-h-40 sm:h-40 md:h-44 lg:h-48 gap-4  w-36 sm:w-48 md:w-40 lg:w-44 "
                  >
                    <CardContent className="px-3 py-2 flex items-center flex-col text-center w-full">
                      <span className="w-20 h-20 lg:w-24 lg:h-24 rounded-full mb-2 lg:mb-2 relative overflow-hidden border-2 border-gray-500 bg-white/40">
                        <Image
                          src={item.logo_file}
                          alt={item.name}
                          fill={true}
                          className="object-contain h-auto w-full"
                        />
                      </span>
                      <div className="w-full overflow-hidden">
                        <div className="overflow-x-auto scrollbar-visible whitespace-nowrap">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold font-jaoren inline-block">
                            {item.name}
                          </h3>
                        </div>
                      </div>
                      <Button
                        onClick={() => {
                          alert(item.id);
                        }}
                        className="text-xs sm:text-sm md:text-base lg:text-xl rounded-full border w-full font-jaoren mt-0 lg:mt-2 h-6 md:h-8 hover:bg-white/50 hover:text-black"
                      >
                        Vote
                      </Button>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
            <Button
              onClick={() => {
                setCurrentPage((prev: number) =>
                  Math.min(prev + 1, totalPages),
                );
              }}
              disabled={currentPage === totalPages}
              className="p-0"
            >
              <StepForward className="h-auto w-6" />
            </Button>
          </div>
          {!noDataFound && (
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
          )}
        </div>
      </main>
    </section>
  );
}
