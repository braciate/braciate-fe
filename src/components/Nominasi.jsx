import "../style/nominasi.css";
import subtitle from "../assets/subtitle-nominasi.svg";
import backgroundVideo from "../video/BRACIATE2024.mp4";
import { useState } from "react";
import Popup from "./Popup";

const Nominasi = () => {
  const [buttonPopupDpm, setButtonPopupDpm] = useState(false);
  const [buttonPopupUkm, setButtonPopupUkm] = useState(false);
  const [buttonPopupBem, setButtonPopupBem] = useState(false);
  const [buttonPopupHima, setButtonPopupHima] = useState(false);
  return (
    <section id="nominasi">
      <video className="videoBg" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="content-nominasi">
        <div className="title-nominasi">
          <img src={subtitle} alt="subtitle" loading="lazy" />
        </div>
        <div className="button-nominasi">
          <ul className="list">
            <li className="li-nominasi" onClick={() => setButtonPopupDpm(true)}>
              <span className="button-list" href="#nominasi">
                Dewan Perwakilan Mahasiswa
              </span>
            </li>
            <li className="li-nominasi" onClick={() => setButtonPopupBem(true)}>
              <span className="button-list" href="/">
                Badan Eksekutif Mahasiswa
              </span>
            </li>
            <li className="li-nominasi" onClick={() => setButtonPopupHima(true)}>
              <span className="button-list" href="/">
                Himpunan Mahasiswa
              </span>
            </li>
            <li className="li-nominasi" onClick={() => setButtonPopupUkm(true)}>
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
          <span className="fav-nom">
            <p>
              VOTE
              <br />
              BEST FAVORITE
            </p>
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
            <p>
              VOTE
              <br />
              BEST FAVORITE
            </p>
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
            <p>
              VOTE
              <br />
              BEST FAVORITE
            </p>
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
            <p>
              VOTE
              <br />
              BEST FAVORITE
            </p>
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
