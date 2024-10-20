import elemenAtas from "@/public/svg/Rangkaian_imgs/rangkaian-atas.svg";
import parade from "@/public/svg/Rangkaian_imgs/1.svg";
import bazar from "@/public/svg/Rangkaian_imgs/2.svg";
import pameran from "@/public/svg/Rangkaian_imgs/3.svg";
import awarding from "@/public/svg/Rangkaian_imgs/4.svg";
import line from "@/public/svg/Rangkaian_imgs/line.svg";
import style from "@/app/(lkm)/page.module.css";
import ElemenAtasHp from "@/public/svg/Rangkaian_imgs/ElemenAtasHp.svg";
import ElemenAtasKananHp from "@/public/svg/Rangkaian_imgs/ElemenAtasKananHp.svg";
import type { FC } from "react";
import React from "react";
import Image from "next/image";
import styleText from "../style/panduan.module.css";
import bling from "@/public/img/fragments/bling.png";

const Rangkaian: FC = () => {
  return (
    <>
      <section
        id="rangkaian"
        className="h-screen bg-black flex justify-center items-center"
      >
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center">
            <Image
              src={ElemenAtasHp}
              alt="elemen"
              className="w-24 h-7 mr-4 md:hidden block"
              data-aos="fade-right"
            />
            <Image
              src={elemenAtas}
              alt="elemen"
              className="w-80 lg:h-9 h-7 hidden md:block"
              data-aos="fade-right"
            />
            <div
              className="flex gap-3 text-7xl mx-4 tracking-wider relative w-max h-auto scale-75 sm:scale-90 md:scale-100"
              data-aos="fade-up"
            >
              <h1 className={`font-jaoren ${styleText.subtitle}`}>Series</h1>
              <h1 className="font-jaoren">of</h1>
              <h1 className={`font-jaoren ${styleText.subtitle}`}>events</h1>
              <Image
                src={bling}
                alt=""
                className="absolute scale-50 md:scale-75 -bottom-14 -right-16 "
              />
              <Image
                src={bling}
                alt=""
                className="absolute scale-50 md:scale-75 -top-16 -left-24"
              />
            </div>
            <Image
              src={ElemenAtasKananHp}
              alt="elemen"
              className="w-28 h-7 md:hidden block"
              data-aos="fade-left"
            />
            <Image
              src={elemenAtas}
              alt="elemen"
              className="w-80 lg:h-9 h-7 hidden md:block"
              data-aos="fade-left"
            />
          </div>

          <div
            className="flex flex-col mt-14 mx-4 xl:mx-8 gap-8"
            data-aos="zoom-in"
          >
            <div className="hidden md:block">
              <div className="flex justify-center xl:gap-60 lg:gap-40 md:gap-28 lg:scale-100 md:scale-95">
                <Image src={parade} alt="parade" />
                <Image src={bazar} alt="bazar" />
                <Image src={pameran} alt="seminar" />
                <Image
                  src={awarding}
                  alt="awarding"
                  className="md:mr-4 lg:ml-5 xl:ml-4"
                />
              </div>
            </div>

            <div
              className="flex lg:justify-center 2xl:w-full xl:w-full xl:mx-0 lg:w-[85%] lg:mx-24 md:mx-20 md:w-10/12"
              data-aos="zoom-in"
            >
              <div className="md:block hidden 2xl:ml-16 xl:ml-16 md:mr-12 lg:mr-14 mx-auto">
                <Image src={line} alt="line" />
              </div>
            </div>

            {/* Mobile */}
            <div className="block md:hidden" data-aos="zoom-in">
              <div>
                <div className="rotate-90 relative top-44 right-32 w-[450px] ">
                  <Image src={line} alt="" />
                </div>

                <div
                  className="flex flex-col gap-10 -mt-16 ml-20"
                  data-aos="zoom-in"
                >
                  <div className="flex items-center justify-center gap-6">
                    <div className="flex flex-col items-center justify-center gap-2 ">
                      <Image src={parade} alt="parade" className="w-10" />
                      <p
                        id={style.text_clip}
                        className="font-jaoren text-base mt-2 text-center"
                      >
                        United rtyhm
                        <br />
                        ukm parade
                      </p>
                    </div>
                    <p className="text-[10px] w-40 text-center">
                      Parade Unit Kegiatan Mahasiswa akan menampilkan penampilan
                      kolaboratif dari UKM terpilih di tiga titik sepanjang
                      rute.
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-6">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Image src={bazar} alt="parade" className="w-10" />
                      <p
                        id={style.text_clip}
                        className="font-jaoren text-base mt-2"
                      >
                        market showcase
                      </p>
                    </div>
                    <p className="text-[10px] w-40 text-center">
                      Bazar yang melibatkan UMKM dari berbagai sektor,
                      menampilkan produk lokal seperti makanan, minuman,
                      kerajinan tangan, dan produk kreatif lainnya.
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-6">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Image src={pameran} alt="parade" className="w-10" />
                      <p
                        id={style.text_clip}
                        className="font-jaoren text-base mt-2"
                      >
                        art exhibition
                      </p>
                    </div>
                    <p className="text-[10px] w-40 text-center">
                      Pameran Karya merupakan rangkaian hasil pameran terkait
                      karya seni yang dilakukan Mahasiswa. Tak hanya itu,
                      pameran karya terkait poster UKM, profile UKM, dan
                      dokumentasi aktivitas UKM.
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-6">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Image src={awarding} alt="parade" className="w-10" />
                      <p
                        id={style.text_clip}
                        className="font-jaoren text-base mt-2 text-center"
                      >
                        awarding
                        <br />
                        gala night
                      </p>
                    </div>
                    <p className="text-[10px] w-40 text-center">
                      Puncak acara ini adalah awarding untuk Lembaga
                      Kemahasiswaan (LKM) seperti DPM, BEM, HIMA, dan UKM,
                      sebagai bentuk apresiasi atas kinerja dan kontribusi
                      mereka selama kepengurusan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile */}

            {/* Desktop */}
            <div className="hidden md:block mx-4">
              <div
                className="flex justify-center gap-9 text-center text-white text-xs font-poppins "
                data-aos="zoom-in"
              >
                <div className="flex flex-wrap justify-center gap-2 w-full">
                  <p
                    id={style.text_clip}
                    className="font-jaoren text-3xl mt-2 text-center"
                  >
                    United rtyhm
                    <br />
                    ukm parade
                  </p>
                  <p className="mt-2">
                    Parade Unit Kegiatan Mahasiswa akan menampilkan penampilan
                    kolaboratif dari UKM terpilih di tiga titik sepanjang rute.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 w-full">
                  <p id={style.text_clip} className="font-jaoren text-3xl mt-2">
                    market showcase
                  </p>
                  <p className="mt-2">
                    Bazar yang melibatkan UMKM dari berbagai sektor, menampilkan
                    produk lokal seperti makanan, minuman, kerajinan tangan, dan
                    produk kreatif lainnya.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 w-full">
                  <p id={style.text_clip} className="font-jaoren text-3xl mt-2">
                    art exhibition
                  </p>
                  <p className="mt-2">
                    Pameran Karya merupakan rangkaian hasil pameran terkait
                    karya seni yang dilakukan Mahasiswa. Tak hanya itu, pameran
                    karya terkait poster UKM, profile UKM, dan dokumentasi
                    aktivitas UKM.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 w-full">
                  <p id={style.text_clip} className="font-jaoren text-3xl mt-2">
                    awarding gala night
                  </p>
                  <p className="mt-2">
                    Puncak acara ini adalah awarding untuk Lembaga Kemahasiswaan
                    (LKM) seperti DPM, BEM, HIMA, dan UKM, sebagai bentuk
                    apresiasi atas kinerja dan kontribusi mereka selama
                    kepengurusan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rangkaian;
