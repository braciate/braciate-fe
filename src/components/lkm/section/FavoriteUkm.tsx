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
import { useState } from "react";
import { Check } from "lucide-react";
import bg from "@/assets/svg/background/bg-validFav.svg";
import useVote from "@/hooks/useVote";

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
  } = usePage("ukm", "6");
  const placeholder = lkm.toUpperCase();

  const { submitVote, error: voteError } = useVote();
  const [isVoting, setIsVoting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [voteSuccess, setVoteSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleVoteClick = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    setVoteSuccess(false);
  };

  const handleConfirmVote = async () => {
    if (selectedItem) {
      setIsVoting(true);
      setError(null);
      try {
        const result = await submitVote(selectedItem.id, lkm);
        if (result) {
          setVoteSuccess(true);
        } else if (voteError) {
          setError(voteError);
        }
      } catch (err) {
        console.error("Failed to submit vote:", err);
        setError("Failed to submit vote. Please try again.");
      } finally {
        setIsVoting(false);
      }
    }
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setVoteSuccess(false);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "modal-overlay") {
      handleCloseModal();
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
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
                      : "border-white text-white hover:bg-white/40 hover:text-black"
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
                    className="flex flex-col justify-between border-2 mx-auto items-center rounded-4xl max-h-40 md:max-h-44 lg:max-h-48 sm:h-40 md:h-44 lg:h-48 gap-4  w-36 sm:w-48 md:w-40 lg:w-44"
                  >
                    <CardContent className="px-3 py-2 flex items-center flex-col text-center w-full">
                      <span className="w-20 h-20 lg:w-24 lg:h-24 rounded-full mb-2 lg:mb-2 relative overflow-hidden border-2 border-gray-500 bg-black/40">
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
                        onClick={() => handleVoteClick(item)}
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
      {/* Modal confirmation */}
      {isModalOpen && selectedItem && (
        <div
          id="modal-overlay"
          onClick={handleOutsideClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-[2px]"
        >
          <div
            className="relative p-6 text-white rounded-[2rem] w-3/4 overflow-hidden sm:max-w-sm sm:w-full border-white border"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={bg}
              alt=""
              className="object-cover absolute -z-10 brightness-[.4]"
              fill
            />
            {!voteSuccess ? (
              <>
                <button
                  onClick={handleCloseModal}
                  className="absolute top-2 right-2 text-white text-2xl"
                >
                  ✕
                </button>
                <h3 className="text-center text-2xl font-jaoren">
                  Yakin Sudah Sesuai Pilihanmu?
                </h3>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-32 h-32 rounded-full bg-black/40 relative overflow-hidden border-2 p-1 border-white">
                    <Image
                      src={selectedItem.logo_file}
                      alt={selectedItem.name}
                      fill={true}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-3xl font-bold font-jaoren text-center">
                    {selectedItem.name}
                  </h4>
                </div>
                <div className="flex justify-center">
                  <Button
                    onClick={handleConfirmVote}
                    disabled={isVoting}
                    className="px-6 py-2 border font-jaoren text-xl border-white rounded-full text-white hover:bg-white hover:text-black transition-all"
                  >
                    {isVoting ? "Voting..." : "Vote Now"}
                  </Button>
                </div>
                {error && (
                  <div className="text-red-500 text-center">{error}</div>
                )}
                {voteSuccess && (
                  <div className="text-green-500">
                    Vote submitted successfully!
                  </div>
                )}
              </>
            ) : (
              <>
                {/* Modal Sukses Vote */}
                <div className="flex flex-col items-center gap-4 mt-4">
                  <div className="w-32 h-32 rounded-full bg-[#D4AF37] flex justify-center items-center border-2 border-black">
                    <span className="text-black">
                      <Check className="w-20 h-20" />
                    </span>
                  </div>
                  <h4 className=" text-2xl md:text-3xl font-bold mt-2 font-jaoren">
                    Kamu Berhasil Nge-Vote!
                  </h4>
                </div>
                <div className="flex justify-center mt-6">
                  <Button
                    onClick={handleCloseModal}
                    className="px-8 py-2 border font-jaoren text-xl border-white rounded-full text-white hover:bg-white hover:text-black transition-all"
                  >
                    Kembali
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
