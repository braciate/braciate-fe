import type { FC } from "react";

const BgNominasi: FC = () => {
  return (
    <div className="absolute w-full h-full">
      <video width="320" height="240" preload="none">
        <source src="/public/video/BRACIATE2024.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BgNominasi;
