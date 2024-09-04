import "../style/panduan.css";
import kiri from "../assets/kiri.svg";
import subtitle from "../assets/subtitle.svg";
import kanan from "../assets/kiri.svg";
import bling from "../assets/bling.png";
const Panduan = () => {
  return (
    <section id="panduan">
      <div className="gradient-topPanduan" />
      <div className="content">
        <img className="kiri" src={kiri} alt="samping" />
        <div className="text-content">
          <div className="title">
            <img className="subtitle" src={subtitle} alt="subtitle" />
            <img src={bling} className="bling"/>
          </div>
          <div className="desc">
            <p>1. ansjdajndjnwqndij</p>
            <p>2. ansjdajndjnwqndij</p>
            <p>3. ansjdajndjnwqndij</p>
            <p>4. ansjdajndjnwqndij</p>
          </div>
        </div>
        <img className="kanan" src={kanan} alt="samping" />
      </div>
      <div className="gradient-botPanduan" />
    </section>
  );
};

export default Panduan;
