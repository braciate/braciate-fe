import type React from "react";
import Hero from "@/components/home/sections/hero";
import AboutUs from "@/components/home/sections/aboutUs";
import Panduan from "@/components/home/sections/panduan";
import Nominasi from "@/components/home/sections/nominasi";
import style from "../global.module.css";
import FilosofiLogo from "@/components/home/sections/filosofi";
import VisionMission from "@/components/home/sections/vision";
import EventTheme from "@/components/home/sections/tema";
import Sponsorship from "@/components/home/sections/sponsorship";
import Rangkaian from "@/components/home/sections/rangkaian";

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <section className={style.aboutFilosofi} id="about-us">
        <AboutUs />
        <FilosofiLogo />
      </section>
      <section>
        <VisionMission />
        <EventTheme />
        <Rangkaian />
        <Panduan />
      </section>
      <section id="vote">
        <Nominasi />
      </section>
      <section>
        <main className="flex-grow"></main>
        <Sponsorship />
      </section>
    </div>
  );
};

export default Home;
