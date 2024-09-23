"use client";

import { useState } from "react";
import Popup from "@/components/home/utils/popup";
import type { FC } from "react";
import Image from "next/image";
import bling from "@/assets/img/fragments/bling.png";
import style from "../style/nominasi.module.css";
const Nominasi: FC = () => {
  const [buttonPopupDpm, setButtonPopupDpm] = useState(false);
  const [buttonPopupUkm, setButtonPopupUkm] = useState(false);
  const [buttonPopupBem, setButtonPopupBem] = useState(false);
  const [buttonPopupHima, setButtonPopupHima] = useState(false);
  return (
    <section
      id="nominasi"
      className="h-screen relative flex justify-center items-center overflow-hidden"
    >
      <div className="absolute -z-10 ">
        <video
          src={require("../../../assets/videos/BRACIATE2024.mp4")}
          autoPlay={true}
          muted={true}
          loop={true}
          className="w-screen h-auto scale-[3.5] lg:scale-100 brightness-50"
        />
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-col items-center font-jaoren">
          <h2 className="text-5xl titleatas sm:text-7xl">LKM</h2>
          <div className="relative">
            <h1
              className={`text-6xl font-extrabold tracking-wider ${style.titlebawah} sm:text-8xl bg-goldTexture`}
            >
              NOMINATION
            </h1>
            <Image
              src={bling}
              alt="bling"
              className="absolute h-auto w-auto -bottom-4 -left-10 size-14"
            />
            <Image
              src={bling}
              alt="bling"
              className="absolute h-auto w-auto -top-4 -right-10 size-14 "
            />
          </div>
        </div>
        <div>
          <ul className="text-xs sm:text-xl cursor-pointer text-center space-y-6 flex flex-col justify-center items-center mt-8 text-black font-poppins font-bold">
            <li
              className={`hover:w-64 hover:h-8 w-60 h-7 sm:w-[500px] sm:h-[50px] py-1 px-[1.7px] sm:py-6 sm:px-1 sm:hover:w-[555px] sm:hover:h-[72px] border-white transition-all ease-in-out duration-300 rounded-2xl flex items-center justify-center bg-white bg-center ${style.nominasi} bg-goldTexture`}
              onClick={() => {
                setButtonPopupDpm(true);
              }}
            >
              <span>Dewan Perwakilan Mahasiswa</span>
            </li>
            <li
              className={`hover:w-64 hover:h-8 w-60 h-7 sm:w-[500px] sm:h-[50px] py-1 px-[1.7px] sm:py-6 sm:px-1 sm:hover:w-[555px] sm:hover:h-[72px] border-white transition-all ease-in-out duration-300 rounded-2xl flex items-center justify-center bg-white bg-center ${style.nominasi} bg-goldTexture`}
              onClick={() => {
                setButtonPopupBem(true);
              }}
            >
              <span>Badan Eksekutif Mahasiswa</span>
            </li>
            <li
              className={`hover:w-64 hover:h-8 w-60 h-7 sm:w-[500px] sm:h-[50px] py-1 px-[1.7px] sm:py-6 sm:px-1 sm:hover:w-[555px] sm:hover:h-[72px] border-white transition-all ease-in-out duration-300 rounded-2xl flex items-center justify-center bg-white bg-center ${style.nominasi} bg-goldTexture`}
              onClick={() => {
                setButtonPopupHima(true);
              }}
            >
              <span>Himpunan Mahasiswa</span>
            </li>
            <li
              className={`hover:w-64 hover:h-8 w-60 h-7 sm:w-[500px] sm:h-[50px] py-1 px-[1.7px] sm:py-6 sm:px-1 sm:hover:w-[555px] sm:hover:h-[72px] border-white transition-all ease-in-out duration-300 rounded-2xl flex items-center justify-center bg-white bg-center ${style.nominasi} bg-goldTexture`}
              onClick={() => {
                setButtonPopupUkm(true);
              }}
            >
              <span>Unit Kegiatan Mahasiswa</span>
            </li>
          </ul>
        </div>
      </div>
      {/* <Popup trigger={buttonPopupDpm} setTrigger={setButtonPopupDpm}>
        <div style={{ zIndex: "1" }} className="popup-container">
          <span className="flex fav-nom">
            <p className="z-10 self-end text-5xl mb-9">BEST FAVORITE</p>
          </span>
          <div className="etc-nom">
            <span>
              <p>
                UPLOAD
                <br />
                BEST ASPIRATIVE
              </p>
            </span>
          </div>
        </div>
      </Popup>
      <Popup trigger={buttonPopupUkm} setTrigger={setButtonPopupUkm}>
        <div style={{ zIndex: "1" }} className="popup-container">
          <span className="fav-nom">
            <p className="z-10 self-end text-5xl mb-9">BEST FAVORITE</p>
          </span>
          <div className="etc-nom">
            <span>
              <p>
                UPLOAD
                <br />
                Achievement of Critical Thinking & Creativity
              </p>
            </span>
            <span>
              <p>
                UPLOAD
                <br />
                Achievement of Art & Sport
              </p>
            </span>
            <span>
              <p>
                UPLOAD
                <br />
                BEST PRODUCTIVE
              </p>
            </span>
          </div>
        </div>
      </Popup>
      <Popup trigger={buttonPopupBem} setTrigger={setButtonPopupBem}>
        <div style={{ zIndex: "1" }} className="popup-container">
          <span className="fav-nom">
            <p className="z-10 self-end text-5xl mb-9">BEST FAVORITE</p>
          </span>
          <div className="etc-nom">
            <span>
              <p>
                UPLOAD
                <br />
                BEST
                <br />
                PRODUCTIVE
              </p>
            </span>
            <span>
              <p>
                UPLOAD
                <br />
                BEST AGENT OF
                <br />
                CHANGE
              </p>
            </span>
          </div>
        </div>
      </Popup>
      <Popup trigger={buttonPopupHima} setTrigger={setButtonPopupHima}>
        <div style={{ zIndex: "1" }} className="popup-container">
          <span className="fav-nom">
            <p className="z-10 self-end text-5xl mb-9">BEST FAVORITE</p>
          </span>
          <div className="etc-nom">
            <span>
              <p>
                UPLOAD
                <br />
                BEST
                <br />
                PRODUCTIVE
              </p>
            </span>
            <span>
              <p>
                UPLOAD
                <br />
                BEST
                <br />
                COLLABORATIVE
              </p>
            </span>
          </div>
        </div>
      </Popup> */}
    </section>
  );
};

export default Nominasi;
