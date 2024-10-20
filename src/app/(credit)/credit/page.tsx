import type { FC } from "react";
import Link from "next/link";
import style from "../../global.module.css";
import { Linkedin } from "lucide-react";
import styles from "@/components/home/style/navbar.module.css";
import text from "@/components/home/style/panduan.module.css";
interface TeamMember {
  id: number;
  name: string;
  role: string;
  linkedin: string;
  instagram: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Risqi Achmad Fahreal | Teknik Informatika",
    role: "tech",
    linkedin: "https://www.linkedin.com/in/risqi-achmad-fahreal-a2b7a4289//",
    instagram: "https://www.instagram.com/arfah.real_/",
  },
  {
    id: 2,
    name: "Syifani Adillah Salsabila | Teknik Informatika",
    role: "ui",
    linkedin: "https://www.linkedin.com/in/syifani-adillah-salsabila-a69140288",
    instagram: "https://www.instagram.com/syifaniads?igsh=MXJpODhyZXN0YTI3MQ==",
  },
  {
    id: 3,
    name: "Vincentia Melody Viviane | Teknik Informatika",
    role: "ui",
    linkedin: "https://www.linkedin.com/in/vincentia-melody-vivianne/",
    instagram: "https://www.instagram.com/vincentiavivianne/",
  },
  {
    id: 4,
    name: "Nickolas Quinn Budiyono | Teknik Informatika",
    role: "fe",
    linkedin:
      "https://www.linkedin.com/in/nickolasquinn?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram:
      "https://www.instagram.com/nickolaswewee/profilecard/?igsh=MTlobmc4NHBueGVjeg==",
  },
  {
    id: 5,
    name: "Sayyidah Fatimah Azzahra | Teknik Informatika",
    role: "fe",
    linkedin: "https://www.linkedin.com/in/sfatimah-azzahra",
    instagram: "http://instagram.com/zahrasido",
  },
  {
    id: 6,
    name: "Putu Indah Githa Cahyani | Teknik Informatika",
    role: "fe",
    linkedin:
      "https://www.linkedin.com/in/putu-indah-githa-c-9ba86b1b2?trk=blended-typeahead",
    instagram: "http://instagram.com/indahgithaa",
  },
  {
    id: 7,
    name: "Akbar Fikri Abdillah | Teknik Informatika",
    role: "be",
    linkedin: "https://www.linkedin.com/in/akbarfikriabdillah",
    instagram: "https://www.instagram.com/akbawbaw_",
  },
  {
    id: 8,
    name: "Kadek Nandana Tyo Nayotama | Teknik Informatika",
    role: "be",
    linkedin:
      "https://www.linkedin.com/in/kadek-nandana-tyo-nayotama-590912289/",
    instagram: "http://instagram.com/nandanatyo",
  },
  {
    id: 9,
    name: "Gaung Taqwa Indraswara | Teknik Informatika",
    role: "be",
    linkedin: "https://www.linkedin.com/in/gaungtaqwa",
    instagram: "https://www.instagram.com/arawsardni/",
  },
];

const TeamMemberCard: FC<TeamMember> = ({ name, linkedin, instagram }) => (
  <div className="flex gap-2 sm:gap-6 my-4">
    <div className="border-2 p-0.5 sm:p-4 rounded-full bg-white text-center w-full flex gap-2 justify-center text-black text-sm sm:text-xl md:text-2xl items-center">
      <h2>{name}</h2>
    </div>
    <div className="flex items-center gap-2 sm:gap-4">
      <Link
        href={instagram}
        target="_blank"
        className={`flex items-center justify-center rounded-full bg-white p-3 md:p-5 text-black w-12 h-12 sm:w-16 sm:h-16 ${styles.footer} fill-black hover:fill-white`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      </Link>
      <Link
        href={linkedin}
        target="_blank"
        className={`flex items-center justify-center rounded-full bg-white p-1 text-black w-12 h-12 sm:w-16 sm:h-16 ${styles.footer} hover:text-white`}
      >
        <Linkedin />
      </Link>
    </div>
  </div>
);

const TeamSection: FC<{ title: string; role: string }> = ({ title, role }) => (
  <section className="mt-10">
    <h2
      className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 p-2 sm:p-4 text-white font-jaoren w-full ${text.subtitle}`}
    >
      {title}
    </h2>
    {teamMembers
      .filter((member) => member.role === role)
      .map((member) => (
        <TeamMemberCard key={member.id} {...member} />
      ))}
  </section>
);

const Page: FC = () => {
  return (
    <section className={`w-full h-max py-12 relative ${style.bgCredits}`}>
      <div className="w-11/12 max-w-5xl mx-auto">
        <div className="flex flex-col">
          <TeamSection title="IT Leader & Front End" role="tech" />
          <TeamSection title="Tim UI/UX" role="ui" />
          <TeamSection title="Tim Front end" role="fe" />
          <TeamSection title="Tim Back end" role="be" />
        </div>
      </div>
    </section>
  );
};

export default Page;
