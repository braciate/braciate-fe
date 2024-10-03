import type { FC } from "react";
import Link from "next/link";
import Instagram from "@/assets/img/icon/instagram.png";
import Linkedin from "@/assets/img/icon/linkedin.png";
import Image from "next/image";

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
    name: "Risqi Achmad Fahreal",
    role: "tech",
    linkedin: "https://www.linkedin.com/in/risqi-achmad-fahreal-a2b7a4289//",
    instagram: "https://www.instagram.com/arfah.real_/",
  },
  {
    id: 2,
    name: "Syifani Adillah Salsabila",
    role: "ui",
    linkedin: "https://www.linkedin.com/in/risqi-achmad-fahreal-b355781b0/",
    instagram: "https://www.instagram.com/risqiachmadfahreal/",
  },
  {
    id: 3,
    name: "Vincentia Melody Viviane",
    role: "ui",
    linkedin: "https://www.linkedin.com/in/risqi-achmad-fahreal-b355781b0/",
    instagram: "https://www.instagram.com/risqiachmadfahreal/",
  },
  {
    id: 4,
    name: "Nickolas Quinn Budiyono",
    role: "fe",
    linkedin: "https://www.linkedin.com/in/risqi-achmad-fahreal-b355781b0/",
    instagram: "https://www.instagram.com/risqiachmadfahreal/",
  },
  {
    id: 5,
    name: "Sayyidah Fatimah Azzahra",
    role: "fe",
    linkedin: "https://www.linkedin.com/in/risqi-achmad-fahreal-b355781b0/",
    instagram: "https://www.instagram.com/risqiachmadfahreal/",
  },
  {
    id: 6,
    name: "Putu Indah Githa Cahyani",
    role: "fe",
    linkedin: "https://www.linkedin.com/in/risqi-achmad-fahreal-b355781b0/",
    instagram: "https://www.instagram.com/risqiachmadfahreal/",
  },
  {
    id: 7,
    name: "Akbar Fikri Abdillah",
    role: "be",
    linkedin: "https://www.linkedin.com/in/risqi-achmad-fahreal-b355781b0/",
    instagram: "https://www.instagram.com/risqiachmadfahreal/",
  },
  {
    id: 8,
    name: "Kadek Nandana Tyo Nayotama",
    role: "be",
    linkedin: "https://www.linkedin.com/in/risqi-achmad-fahreal-b355781b0/",
    instagram: "https://www.instagram.com/risqiachmadfahreal/",
  },
  {
    id: 9,
    name: "Gaung Taqwa Indraswara",
    role: "be",
    linkedin: "https://www.linkedin.com/in/risqi-achmad-fahreal-b355781b0/",
    instagram: "https://www.instagram.com/risqiachmadfahreal/",
  },
];

const TeamMemberCard: FC<TeamMember> = ({ name, linkedin, instagram }) => (
  <div className="flex gap-2 sm:gap-6 my-8">
    <div className="border-2 p-0.5 sm:p-4 rounded-full bg-white text-center w-full flex gap-2 justify-center font-jaoren text-black text-xl sm:text-3xl items-center">
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
  <section className="mb-8">
    <h2 className="text-xl sm:text-3xl font-bold mb-4 bg-[#D7A129] p-2 sm:p-4 text-black text-center rounded-full font-jaoren ">
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
    <main className="w-full min-h-screen py-12">
      <div className="w-11/12 max-w-5xl mx-auto space-y-8">
        <TeamSection
          title="Teknik Informatika | IT Leader & Front End"
          role="tech"
        />
        <TeamSection title="Teknik Informatika | Tim UI/UX" role="ui" />
        <TeamSection title="Teknik Informatika | Tim Frontend" role="fe" />
        <TeamSection title="Teknik Informatika | Tim Backend" role="be" />
      </div>
    </main>
  );
};

export default Page;
