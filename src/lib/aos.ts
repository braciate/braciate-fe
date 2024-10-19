"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);
  return null;
};
