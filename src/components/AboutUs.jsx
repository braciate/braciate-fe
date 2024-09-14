import AboutUsImg from "../assets/img/aboutustext.svg";
import TriangleLeft from "../assets/img/triangle-left.svg";
import TriangleRight from "../assets/img/triangle-right.svg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <main className="about-us" id="about">
      <div className="triangle-icons">
        <img src={TriangleLeft} alt="" />
        <img src={TriangleRight} alt="" id="triangle-right" />
      </div>
      <img src={AboutUsImg} alt="" id="about-us-img" />
      <p id="about-us-info">
        Brawijaya Appreciate merupakan program kerja yang diselenggarakan
        Kementerian Dalam Negeri EM UB 2024 yang bertujuan untuk meningkatkan
        keharmonisan antar lembaga-lembaga di Universitas Brawijaya. Brawijaya
        Appreciate terdiri atas tiga rangkaian kegiatan yaitu pre-event,
        main-event, dan post-event. Acara puncak akan diisi oleh penampilan UKM
        yang ada di Universitas Brawijaya.
      </p>
    </main>
  );
};

export default AboutUs;
