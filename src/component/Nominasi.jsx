import "../style/nominasi.css";
import subtitle from "../assets/subtitle-nominasi.svg";
import backgroundVideo from "../video/BRACIATE2024.mp4";
import piala from "../assets/piala-removebg-preview 4.svg";
import { useState } from "react";
import Popup from "./Popup";

const Nominasi = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <section id="nominasi">
      <video className="videoBg" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="content-nominasi">
        <img src={subtitle} alt="subtitle" loading="lazy" />
        <div className="button-nominasi">
          <ul className="list">
            <li onClick={() => setButtonPopup(true)}>
              <span className="button-list" href="#nominasi">
                Dewan Perwakilan Mahasiswa
              </span>
            </li>
            <li>
              <span className="button-list" href="/">
                Badan Eksekutif Mahasiswa
              </span>
            </li>
            <li>
              <span className="button-list" href="/">
                Himpunan Mahasiswa
              </span>
            </li>
            <li>
              <span className="button-list" href="#">
                Unit Kegiatan Mahasiswa
              </span>
            </li>
          </ul>
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div style={{ zIndex: "1" }} className="popup-dpm">
          <span className="fav-nom">
            <p>VOTE<br/>BEST FAVORITE</p>
          </span>
          <span className="etc-nom">
          <p>UPLOAD<br/>BEST ASPIRATIVE</p>
          </span>
        </div>
      </Popup>
      <div className="gradient-top" />
      <div className="gradient-bot" />
    </section>
  );
};

export default Nominasi;
