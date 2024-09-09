import React from "react";
import iconLeft from "../assets/img/visi-misi-left.svg";
import iconRight from "../assets/img/visi-misi-right.svg";
import visiText from "../assets/img/visi-text.svg";
import misiText from "../assets/img/misi-text.svg";
import MissionHp from "../assets/visimisi/MissionHp.png"
import VisionHp from "../assets/visimisi/VisionHp.png"

const VisionMission = () => {
    return (
        <main className="w-full h-auto bg-black py-[16%] flex flex-col items-center justify-center relative">
            <div className="flex flex-row items-center justify-between w-full h-auto absolute">
                <img src={iconLeft} alt="" id="icon-left" className=" w-[20%]"/>
                <img src={iconRight} alt="" id="icon-right" className="md:w-[15%] w-[20%]" />
            </div>
            {/* visi */}
            <div className="md:flex md:flex-row flex flex-col-reverse text-center items-center justify-center">
                <p className="md:w-[70%] w-[90%] mt-[5%] font-poppins font-light md:text-[18px] text-[8px]">
                    Bring The Great Story with Harmonization and Collaborative Simpul Brawijaya.
                </p>
                <img src={VisionHp} alt="" id="visi-text" className=" block md:hidden"/>
                <img src={visiText} alt="" id="visi-text" className="md:w-[25%] w-[50%] hidden md:block"/>
            </div>
            {/* Misi */}
            <div className="mt-[30px] md:w-[70%] w-[50%] md:flex md:flex-row items-center justify-center">
                {/* mobile */}
                <img src={MissionHp} alt="" id="misi-text" className="px-10 block md:hidden"/>
                {/* tab dan desktop */}
                <img src={misiText} alt="" id="misi-text" className="hidden md:block" />
                <p className="md:w-[70%] w-[130%] md:ml-[5%] -ml-[10%] mt-[5%] font-poppins font-light md:text-[18px] text-[8px]">
                    1. Menciptakan dan memaksimalkan kolaboratif simpul brawijaya yang berlandaskan kebersamaan dan pengembangan<br />
                    2. Menciptakan branding serta citra positif bagi simpul brawijaya dengan semangat sinergi dan harmonisasi<br />
                    3. Memotivasi simpul brawijaya menjadi wadah mahasiswa yang berimpact, berintegritas, dan future oriented
                </p>
            </div>
        </main>
    );
};

export default VisionMission;
