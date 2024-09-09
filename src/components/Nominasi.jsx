import "../style/nominasi.css";
import backgroundVideo from "../video/BRACIATE2024.mp4";
import bling from "../assets/bling.png";
import { useState } from "react";
import Popup from "./Popup";

const Nominasi = () => {
  const [buttonPopupDpm, setButtonPopupDpm] = useState(false);
  const [buttonPopupUkm, setButtonPopupUkm] = useState(false);
  const [buttonPopupBem, setButtonPopupBem] = useState(false);
  const [buttonPopupHima, setButtonPopupHima] = useState(false);
  return (
    <section id="nominasi" className="my-8 ">
      <video className="videoBg size-11/12" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="gap-9 content-nominasi md:gap-14">
        <div className="flex flex-col items-center title-nominasi">
          <h2 className="text-5xl title-atas md:text-7xl">LKM</h2>
          <div className="relative">
            <h1 className="text-6xl font-extrabold tracking-wider title-bawah md:text-8xl">
              NOMINATION
            </h1>
            <img
              src={bling}
              alt="bling"
              className="absolute h-auto md:w-auto bottom-2 -left-5 size-14 md:-bottom-10 md:-left-24"
            />
            <img
              src={bling}
              alt="bling"
              className="absolute h-auto md:w-auto top-2 -right-5 size-14 md:-top-10 md:-right-24"
            />
          </div>
        </div>
        <div className="button-nominasi">
          <ul className="gap-5 text-[0.65rem] md:text-xl list md:gap-10">
            <li
              className="li-nominasi hover:w-64 hover:h-8 w-60 h-7 md:w-[500px] md:h-[50px] py-1 px-[1.7px] md:py-3 md:px-1 md:hover:w-[555px] md:hover:h-[72px]"
              onClick={() => setButtonPopupDpm(true)}
            >
              <span className="button-list" href="#nominasi">
                Dewan Perwakilan Mahasiswa
              </span>
            </li>
            <li
              className="li-nominasi md:hover:w-[555px] md:hover:h-[72px] hover:w-64 hover:h-8 w-60 h-7 md:w-[500px] md:h-[50px]"
              onClick={() => setButtonPopupBem(true)}
            >
              <span className="button-list" href="/">
                Badan Eksekutif Mahasiswa
              </span>
            </li>
            <li
              className="li-nominasi md:hover:w-[555px] md:hover:h-[72px] hover:w-64 hover:h-8 w-60 h-7 md:w-[500px] md:h-[50px]"
              onClick={() => setButtonPopupHima(true)}
            >
              <span className="button-list" href="/">
                Himpunan Mahasiswa
              </span>
            </li>
            <li
              className="li-nominasi md:hover:w-[555px] md:hover:h-[72px] hover:w-64 hover:h-8 w-60 h-7 md:w-[500px] md:h-[50px]"
              onClick={() => setButtonPopupUkm(true)}
            >
              <span className="button-list" href="#">
                Unit Kegiatan Mahasiswa
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* pop up dpm */}
      <Popup trigger={buttonPopupDpm} setTrigger={setButtonPopupDpm}>
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
      {/* pop up ukm */}
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
      {/* pop up bem */}
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
      {/* pop up hima */}
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
      </Popup>
      <div className="gradient-top" />
      <div className="gradient-bot" />
    </section>
  );
};

export default Nominasi;
