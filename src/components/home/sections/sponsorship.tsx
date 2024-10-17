"use client";
import sponsorshipTitle from "@/public/img/title/sponsorship_title.png";
import sponsorshipBg from "@/public/img/background/sponsorship_bg.png";
import type { FC } from "react";
import Image from "next/image";
import style from "../style/sponsorship.module.css";
import SponsorProps from "@/hooks/useSponsors";
import { sponsorImage } from "@/lib/sponsor";

// Renders a slider with sponsor logos
const renderSlider = (className: string, reverse = false): JSX.Element => (
  <div className={`${style.slider} ${style[className]}`}>
    <div className={`${style.slider_track} ${reverse ? style.reverse : ""}`}>
      {[...sponsorImage, ...sponsorImage, ...sponsorImage].map(
        (image, index) => (
          <div key={index} className={style.item}>
            <div className={style.circle}>
              <Image
                src={image.src}
                alt={image.alt}
                className={style.sponsor_image}
                width={200}
                height={200}
              />
            </div>
          </div>
        )
      )}
    </div>
  </div>
);

// Main Sponsorship component
const Sponsorship: FC = () => {
  const { sliderRef } = SponsorProps();
  return (
    <main className={style.sponsorship_container} ref={sliderRef}>
      {/* Background gradient overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(to bottom, 
              rgba(0,0,0,1) 0%, 
              rgba(0,0,0,0.6) 25%, 
              rgba(0,0,0,0.2) 40%, 
              rgba(0,0,0,0.2) 70%, 
              rgba(0,0,0,0.6) 90%, 
              rgba(0,0,0,1) 100%
            ),
            url(${sponsorshipBg.src})
          `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 1,
          zIndex: 1,
        }}
      />
      <div className={style.sponsorship_content}>
        {/* Sponsorship title */}
        <div className={style.sponsorship_title}>
          <Image
            src={sponsorshipTitle}
            alt="Sponsorship"
            style={{
              width: "auto",
              height: "200px",
            }}
          />
        </div>
        {/* Sponsor logo sliders */}
        <div className={style.sliders_wrapper}>
          {renderSlider("slider_top")}
          {/* {renderSlider("slider_bottom", true)} */}
        </div>
        {/* <>
          <h1 className="font-jaoren text-6xl sm:text-7xl tracking-wider my-10 text-center">
            Media partners
          </h1>
          <div className={style.sliders_wrapper}>
            {renderSlider("slider_bottom", true)}
          </div>
        </> */}
      </div>
    </main>
  );
};

export default Sponsorship;
