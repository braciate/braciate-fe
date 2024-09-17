import elemenAtas from "../assets/rangkaian-atas.svg";
import titleRangkaian from "../assets/rangkaian assets/rangkaian-title.svg";
import parade from "../assets/rangkaian assets/1.svg";
import bazar from "../assets/rangkaian assets/2.svg";
import seminar from "../assets/rangkaian assets/3.svg";
import awarding from "../assets/rangkaian assets/4.svg";
import paradeText from "../assets/rangkaian assets/United Rhtyms UKM Parade.svg";
import bazarText from "../assets/rangkaian assets/Market Showcase.svg";
import seminarText from "../assets/rangkaian assets/Seminar.svg";
import awardingText from "../assets/rangkaian assets/Awarding Gala Night.svg";
import line from "../assets/rangkaian assets/line.svg";

import ParadeHp from "../assets/rangkaian assets/ParadeHp.svg";
import BazarHp from "../assets/rangkaian assets/BazarHp.svg";
import SeminarHp from "../assets/rangkaian assets/SeminarHp.svg";
import AwardingHp from "../assets/rangkaian assets/AwardingHp.svg";
import ElemenAtasHp from "../assets/rangkaian assets/ElemenAtasHp.svg";
import ElemenAtasKananHp from "../assets/rangkaian assets/ElemenAtasKananHp.svg";

const Rangkaian = () => {
  return (
    <section id="rangkaian" className="h-screen bg-black flex justify-center items-center">
      <div className="flex flex-col items-center">

        <div className="flex justify-center items-center">
          <img src={ElemenAtasHp} alt="elemen" className="w-[40%] h-7 md:hidden block" />
          <img src={elemenAtas} alt="elemen" className="w-80 lg:h-9 h-7 hidden md:block" />
          <div className="md:ml-5 relative w-full max-w-xl lg:h-20">
            <img
              src={titleRangkaian}
              alt="title"
              className=" w-full h-auto transform md:-translate-y-1/4 -translate-y-[20%] "
            />
          </div>
          <img src={ElemenAtasKananHp} alt="elemen" className="w-20 h-7 md:hidden block" />
          <img src={elemenAtas} alt="elemen" className="w-80 lg:h-9 h-7 hidden md:block" />
        </div>

        <div className="flex flex-col mt-14 gap-8">

          <div className="hidden md:block">
          <div className="flex justify-center xl:gap-60 lg:gap-44 md:gap-24">
            <img src={parade} alt="parade" />
            <img src={bazar} alt="bazar" />
            <img src={seminar} alt="seminar" />
            <img src={awarding} alt="awarding" />
          </div>
          </div>
          
          <div className="flex lg:justify-center 2xl:w-full xl:w-full xl:mx-0 lg:w-[80%] lg:mx-24 md:mx-20">
            <div className="md:block hidden ">
              <img src={line} alt="line" />
            </div>
          </div>

          {/* Mobile */}
          <div className="block md:hidden">
          <div className="">
            <div className="rotate-90 relative top-40 right-32 w-[400px]  ">
              <img src={line} alt="" className=""/>
            </div>

            <div className="flex flex-col gap-10 -mt-16 ml-20">

            <div className="flex items-center justify-center gap-6">
              <div className="flex flex-col items-center justify-center ">
                <img src={parade} alt="parade" className="w-10"/>
                <img src={ParadeHp} alt="paradeText" className=""/>
              </div>
                <p className="text-[10px] w-40 text-center">
                  Parade Unit Kegiatan Mahasiswa akan menampilkan penampilan
                  kolaboratif dari UKM terpilih di tiga titik sepanjang rute.
                </p>
              </div>

              <div className="flex items-center justify-center gap-6">
              <div className="flex flex-col items-center justify-center">
                <img src={bazar} alt="parade" className="w-10"/>
                <img src={BazarHp} alt="paradeText" className=""/>
              </div>
                <p className="text-[10px] w-40 text-center">
                  Bazar yang melibatkan UMKM dari berbagai sektor, menampilkan
                  produk lokal seperti makanan, minuman, kerajinan tangan, dan
                  produk kreatif lainnya.
                </p>
              </div>


              <div className="flex items-center justify-center gap-6">
              <div className="flex flex-col items-center justify-center">
                <img src={seminar} alt="parade" className="w-10"/>
                <img src={SeminarHp} alt="paradeText" className=""/>
              </div>
                <p className="text-[10px] w-40 text-center">
                  Seminar yang membahas pentingnya apresiasi dalam organisasi,
                  bertujuan untuk memperkuat hubungan antar Ormawa melalui
                  pemahaman yang lebih baik tentang apresiasi terhadap anggota dan
                  prestasi.
                </p>
              </div>


              <div className="flex items-center justify-center gap-6">
              <div className="flex flex-col items-center justify-center">
                <img src={awarding} alt="parade" className="w-10"/>
                <img src={AwardingHp} alt="paradeText" className=""/>
              </div>
                <p className="text-[10px] w-40 text-center">
                  Puncak acara ini adalah awarding untuk Lembaga Kemahasiswaan
                  (LKM) seperti DPM, BEM, HIMA, dan UKM, sebagai bentuk apresiasi
                  atas kinerja dan kontribusi mereka selama kepengurusan.
                </p>
              </div>
            </div>
            </div>
          </div>
          {/* Mobile */}


          {/* Desktop */}
          <div className="hidden md:block">
          <div className="flex justify-center gap-9 text-center text-white text-xs font-poppins ">
            <div className="flex flex-wrap justify-center gap-2 w-full">
              <img src={paradeText} alt="paradeText" />
              <p className="mt-2">
                Parade Unit Kegiatan Mahasiswa akan menampilkan penampilan
                kolaboratif dari UKM terpilih di tiga titik sepanjang rute.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 w-full">
              <img src={bazarText} alt="bazarText" />
              <p className="mt-2">
                Bazar yang melibatkan UMKM dari berbagai sektor, menampilkan
                produk lokal seperti makanan, minuman, kerajinan tangan, dan
                produk kreatif lainnya.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 w-full">
              <img src={seminarText} alt="seminarText" />
              <p className="mt-2">
                Seminar yang membahas pentingnya apresiasi dalam organisasi,
                bertujuan untuk memperkuat hubungan antar Ormawa melalui
                pemahaman yang lebih baik tentang apresiasi terhadap anggota dan
                prestasi.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 w-full">
              <img src={awardingText} alt="awardingText" />
              <p className="mt-2">
                Puncak acara ini adalah awarding untuk Lembaga Kemahasiswaan
                (LKM) seperti DPM, BEM, HIMA, dan UKM, sebagai bentuk apresiasi
                atas kinerja dan kontribusi mereka selama kepengurusan.
              </p>
            </div>
          </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Rangkaian;
