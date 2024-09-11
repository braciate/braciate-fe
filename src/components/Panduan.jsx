import "../style/panduan.css";
import kiri from "../assets/kiri.svg";
import kanan from "../assets/kiri.svg";
import bling from "../assets/bling.png";
const Panduan = () => {
  return (
    <section id="panduan">
      <div className="gradient-topPanduan" />
      <div className="content pr-0 lg:pr-[20vh]">
        <img className="kiri h-52 sm:h-72" src={kiri} alt="samping" />
        <div className="flex items-center flex-wrap gap-[40px] md:gap-20 text-content flex-col md:flex-row justify-center md:justify-between">
          <div className="text-center title md:text-start">
            <div className="relative">
              <h1 className="subtitle text-7xl md:text-8xl">Voting</h1>
              <img
                src={bling}
                alt="bling"
                className="absolute bottom-0 w-1/2 h-auto -left-10 md:w-auto md:-left-20 md:-bottom-10"
              />
            </div>
            <h3 className="subtitle2 text-5xl md:text-[50px]">Guide</h3>
          </div>
          <div className="text-sm desc md:text-xl">
            <p>1. ansjdajndjnwqndij</p>
            <p>2. ansjdajndjnwqndij</p>
            <p>3. ansjdajndjnwqndij</p>
            <p>4. ansjdajndjnwqndij</p>
          </div>
        </div>
        <img className="kanan h-52 sm:h-72" src={kanan} alt="samping" />
      </div>
      <div className="gradient-botPanduan" />
    </section>
  );
};

export default Panduan;
