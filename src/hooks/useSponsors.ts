import { useRef } from "react";

interface Props {
  sliderRef: React.RefObject<HTMLDivElement>;
  sponsorImages: string[];
}

const useSponsors = (): Props => {
  const sponsorImages = [
    "/src/assets/img/sponsorship_imgs/slider2_1.png",
    "/src/assets/img/sponsorship_imgs/slider2_2.png",
    "/src/assets/img/sponsorship_imgs/slider2_3.png",
    "/src/assets/img/sponsorship_imgs/slider2_4.png",
    "/src/assets/img/sponsorship_imgs/slider2_1.png",
    "/src/assets/img/sponsorship_imgs/slider2_2.png",
    "/src/assets/img/sponsorship_imgs/slider2_3.png",
    "/src/assets/img/sponsorship_imgs/slider2_4.png",
  ];
  const sliderRef = useRef<HTMLDivElement>(null);

  return { sliderRef, sponsorImages };
};

export default useSponsors;
