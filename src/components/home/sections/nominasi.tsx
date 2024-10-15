  "use client";

  import type { FC } from "react";
  import Image from "next/image";
  import bling from "@/assets/img/fragments/bling.png";
  import style from "../style/nominasi.module.css";
  import { useState } from "react";
  import { useEffect } from "react";
  import Dpm from "../utils/modal/dpm";
  import Bem from "../utils/modal/bem";
  import Hima from "../utils/modal/hima";
  import Ukm from "../utils/modal/ukm";


  interface ModalProps { 
    onClose: () => void;
  }

  const ModalDpm: React.FC<ModalProps> = ({ onClose }) => {
    return <Dpm />;
  };

  const ModalBem: React.FC<ModalProps> = ({ onClose }) => {
    return <Bem />;
  };

  const ModalHima: React.FC<ModalProps> = ({ onClose }) => {
    return <Hima />;
  }

  const ModalUkm: React.FC<ModalProps> = ({ onClose }) => {
    return <Ukm />;
  }


  const Nominasi: FC = () => {
    const [isModalDpmOpen, setisModalDpmOpen] = useState<boolean>(false);
    const handleModalDpm = (): void => {
      setisModalDpmOpen(!isModalDpmOpen);
    } 

    const [isModalBemOpen, setisModalBemOpen] = useState<boolean>(false);
    const handleModalBem = (): void => {
      setisModalBemOpen(!isModalBemOpen);
    }

    const [isModalHimaOpen, setisModalHimaOpen] = useState<boolean>(false);
    const handleModalHima = (): void => {
      setisModalHimaOpen(!isModalHimaOpen);
    }

    const [isModalUkmOpen, setisModalUkmOpen] = useState<boolean>(false);
    const handleModalUkm = (): void => {
      setisModalUkmOpen(!isModalUkmOpen);
    }


    return (
      <section
        id="nominasi"
        className="h-screen relative flex justify-center items-center overflow-hidden"
      >
        {isModalDpmOpen ? <ModalDpm onClose={handleModalDpm} /> : null}
        {isModalBemOpen ? <ModalBem onClose={handleModalBem} /> : null}
        {isModalHimaOpen ? <ModalHima onClose={handleModalHima} /> : null}
        {isModalUkmOpen ? <ModalUkm onClose={handleModalUkm} /> : null}
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
            <h2 className="text-6xl titleatas sm:text-7xl">LKM</h2>
            <div className="relative">
              <h1
                className={`text-7xl font-extrabold tracking-wider ${style.titlebawah} sm:text-8xl bg-goldTexture`}
              >
                NOMINATION
              </h1>
              <Image
                src={bling}
                alt="bling"
                className="absolute h-auto w-auto -bottom-4 -left-10 xl:-bottom-0 size-14"
              />
              <Image
                src={bling}
                alt="bling"
                className="absolute h-auto w-auto -top-4 -right-10 xl:-top-0 size-14 "
              />
            </div>
          </div>
          <div>
            <ul className="text-xs sm:text-xl cursor-pointer text-center space-y-6 flex flex-col justify-center items-center mt-8 text-black font-poppins font-medium">
              <li
                className={`w-72 h-9 sm:w-[500px] sm:h-[50px] py-1 px-[1.7px] sm:py-6 sm:px-1 sm:hover:w-[555px] sm:hover:h-[72px] border-white transition-all ease-in-out duration-300 rounded-2xl flex items-center justify-center bg-white bg-center ${style.nominasi} bg-goldTexture`} onClick={handleModalDpm}
              >
                <span>Dewan Perwakilan Mahasiswa</span>
              </li>
              <li
                className={`w-72 h-9 sm:w-[500px] sm:h-[50px] py-1 px-[1.7px] sm:py-6 sm:px-1 sm:hover:w-[555px] sm:hover:h-[72px] border-white transition-all ease-in-out duration-300 rounded-2xl flex items-center justify-center bg-white bg-center ${style.nominasi} bg-goldTexture`} onClick={handleModalBem}
              >
                <span>Badan Eksekutif Mahasiswa</span>
              </li>
              <li
                className={`w-72 h-9 sm:w-[500px] sm:h-[50px] py-1 px-[1.7px] sm:py-6 sm:px-1 sm:hover:w-[555px] sm:hover:h-[72px] border-white transition-all ease-in-out duration-300 rounded-2xl flex items-center justify-center bg-white bg-center ${style.nominasi} bg-goldTexture`} onClick={handleModalHima}
              >
                <span>Himpunan Mahasiswa</span>
              </li>
              <li
                className={`w-72 h-9 sm:w-[500px] sm:h-[50px] py-1 px-[1.7px] sm:py-6 sm:px-1 sm:hover:w-[555px] sm:hover:h-[72px] border-white transition-all ease-in-out duration-300 rounded-2xl flex items-center justify-center bg-white bg-center ${style.nominasi} bg-goldTexture`} onClick={handleModalUkm}
              >
                <span>Unit Kegiatan Mahasiswa</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  };

  export default Nominasi;
