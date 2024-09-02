import React from "react";
import iconLeft from "../assets/img/visi-misi-left.svg";
import iconRight from "../assets/img/visi-misi-right.svg";
import visiText from "../assets/img/visi-text.svg";
import misiText from "../assets/img/misi-text.svg";
import './VisionMission.css';

const VisionMission = () => {
    return (
        <main className="vision-mission">
            <div className="background-icons">
                <img src={iconLeft} alt="" id="icon-left"/>
                <img src={iconRight} alt="" id="icon-right" />
            </div>
            <div className="vision-container">
                <p id="vision-info">Bring The Great Story with Harmonization and Collaborative Simpul Brawijaya.</p>
                <img src={visiText} alt="" id="visi-text" />
            </div>
            <div className="mission-container">
                <img src={misiText} alt="" id="misi-text" />
                <p>
                    1. Menciptakan dan memaksimalkan kolaboratif simpul brawijaya yang berlandaskan kebersamaan dan pengembangan<br />
                    2. Menciptakan branding serta citra positif bagi simpul brawijaya dengan semangat sinergi dan harmonisasi<br />
                    3. Memotivasi simpul brawijaya menjadi wadah mahasiswa yang berimpact, berintegritas, dan future oriented
                </p>
            </div>
        </main>
    );
};

export default VisionMission;
