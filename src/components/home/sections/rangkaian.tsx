import "../style/rangkaian.css";
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
import type { FC } from "react";

const Rangkaian: FC = () => {
  return (
    <section id="rangkaian">
      <div className="title-rangkaian">
        <div className="atas">
          <Image src={elemenAtas} alt="elemen" className="vector-atas" />
          <div className="ml-5 main-title">
            <Image src={titleRangkaian} alt="title" />
          </div>
          <Image src={elemenAtas} alt="elemen" className="vector-atas" />
        </div>
        <div className="content-rangkaian">
          <div className="acara">
            <Image src={parade} alt="parade" />
            <Image src={bazar} alt="bazar" />
            <Image src={seminar} alt="seminar" />
            <Image src={awarding} alt="awarding" />
          </div>
          <div
            className="line"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image src={line} alt="line" />
          </div>
          <div className="list-acara">
            <div className="text">
              <Image src={paradeText} alt="paradeText" />
              <p>
                Parade Unit Kegiatan Mahasiswa akan menampilkan penampilan
                kolaboratif dari UKM terpilih di tiga titik sepanjang rute.
              </p>
            </div>
            <div className="text">
              <Image src={bazarText} alt="bazarText" />
              <p>
                Bazar yang melibatkan UMKM dari berbagai sektor, menampilkan
                produk lokal seperti makanan, minuman, kerajinan tangan, dan
                produk kreatif lainnya.
              </p>
            </div>
            <div className="text">
              <Image src={seminarText} alt="seminarText" />
              <p>
                Seminar yang membahas pentingnya apresiasi dalam organisasi,
                bertujuan untuk memperkuat hubungan antar Ormawa melalui
                pemahaman yang lebih baik tentang apresiasi terhadap anggota dan
                prestasi.
              </p>
            </div>
            <div className="text">
              <Image src={awardingText} alt="awardingText" />
              <p>
                Puncak acara ini adalah awarding untuk Lembaga Kemahasiswaan
                (LKM) seperti DPM, BEM, HIMA, dan UKM, sebagai bentuk apresiasi
                atas kinerja dan kontribusi mereka selama kepengurusan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rangkaian;
