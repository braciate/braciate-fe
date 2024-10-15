import type { FC } from "react";
import Link from "next/link";
import Instagram from "@/assets/img/icon/instagram.png";
import Linkedin from "@/assets/img/icon/linkedin.png";
import Image from "next/image";
import shader from "../../../assets/svg/background/shader-credit.svg";
import style from "../../global.module.css";
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
    <div className="border-2 p-0.5 sm:p-4 rounded-full bg-white text-center w-full flex gap-2 justify-center font-jaoren text-black text-xl sm:text-2xl md:text-3xl items-center">
      <h2>{name}</h2>
    </div>
    <div className="flex items-center gap-2 sm:gap-4">
      <Link
        href={instagram}
        target="_blank"
        className="flex items-center justify-center rounded-full bg-white p-2 text-black w-12 h-12 sm:w-16 sm:h-16"
      >
        <Image src={Instagram} alt="..." className="h-auto w-full" />
      </Link>
      <Link
        href={linkedin}
        target="_blank"
        className="flex items-center justify-center rounded-full bg-white p-2 text-black w-12 h-12 sm:w-16 sm:h-16"
      >
        <Image src={Linkedin} alt="..." className="h-auto w-full" />
      </Link>
    </div>
  </div>
);

const TeamSection: FC<{ title: string; role: string }> = ({ title, role }) => (
  <section className="mt-10">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 bg-[#D7A129] p-2 sm:p-4 text-black text-center rounded-full font-jaoren w-5/12 ">
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
