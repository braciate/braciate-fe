"use client";
import sponsorshipTitle from "../../../assets/img/title/sponsorship_title.png";
import type { FC } from "react";
import Image from "next/image";
import style from "../style/sponsorship.module.css";
import SponsorProps from "@/hooks/useSponsors";
import { motion } from "framer-motion";
import { sponsorImage } from "@/lib/sponsor";

const Sponsorship: FC = () => {
  const renderSlider = (className: string, reverse = false): JSX.Element => (
    <div className={`${style.slider} ${className}`}>
      <motion.div
        className={`${style.slider_track} flex gap-4 space-y-4`}
        initial={{ x: reverse ? "-100%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-100%" }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 100,
            ease: "linear",
          },
        }}
      >
        {sponsorImage.map((image, index) => (
          <div key={index} className={`${style.item} flex-shrink-0`}>
            <div
              className={`${style.circle} w-24 h-24 rounded-full overflow-hidden`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className={`${style.sponsor_image} object-cover w-full h-full`}
                width={200}
                height={200}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
  const { sliderRef } = SponsorProps();
  return (
    <main className={style.sponsorship_container} ref={sliderRef}>
      <div className={style.sponsorship_content}>
        <div className={style.sponsorship_title}>
          <Image
            src={sponsorshipTitle}
            alt="Sponsorship"
            width={300}
            height={100}
            layout="responsive"
          />
        </div>
        <div className={style.sliders_wrapper}>
          {renderSlider("slider_top")}
          {renderSlider("slider_bottom", true)}
        </div>
      </div>
    </main>
  );
};

export default Sponsorship;
