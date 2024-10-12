"use client";
import React from "react";
import BgFaq from "@/components/Faq/background/bg-faq";
import useFaq from "@/hooks/useFaq";
import titleFaq from "../../../assets/svg/faq-assets/faq-title.svg";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import goldTexture from "../../../assets/svg/fragments/gold-texture.svg";
import type { FC } from "react";
import bling from "@/assets/img/fragments/bling.png";

interface FaqProps {
  question: string;
  answer: string;
  open: boolean;
}

const FaqLayout: React.FC<{
  faq: FaqProps;
  index: number;
  toggleFAQ: (index: number) => void;
}> = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className="max-w-2xl p-2 scale-75"
      onClick={() => {
        toggleFAQ(index);
      }}
    >
      <div
        className={`flex cursor-pointer p-4 relative overflow-hidden ${faq.open ? "rounded-t-2xl" : "rounded-2xl"}`}
      >
        <div>
          <Image
            src={goldTexture}
            alt=".."
            fill={true}
            className="absolute object-cover -z-10 brightness-[.70] scale-110"
          />
        </div>
        <h3 className="text-lg font-medium text-white mr-auto">
          {faq.question}
        </h3>
        {faq.open ? (
          <ChevronUp className="h-auto min-w-7 text-white" />
        ) : (
          <ChevronDown className="h-auto min-w-7 text-white" />
        )}
      </div>
      <div
        className={`overflow-scroll transition-all duration-300 ease-in-out rounded-b-2xl bg-white ${
          faq.open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`transform transition-transform duration-300 ${faq.open ? "translate-y-0" : "-translate-y-4"}`}
        >
          <p className="text-black text-justify p-4 text-xs sm:text-lg">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const Faq: FC = () => {
  const { faqs, toggleFAQ } = useFaq();
  return (
    <div className="h-max w-screen">
      <BgFaq />
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-4 ">
        <div className="w-2/3 sm:w-1/2 lg:w-1/3">
          <div className="relative">
            <Image
              src={bling}
              alt="bling"
              className="absolute right-0 -top-5 sm:right-14 lg:right-20 sm:top-0 "
            />
            <Image
              src={bling}
              alt="bling"
              className="absolute bottom-0 -left-5 sm:-left-5 sm:bottom-2 w-32 h-auto"
            />
            <Image src={titleFaq} alt="Faq" />
          </div>
        </div>
        <div className="mt-8 -space-y-4">
          {faqs.map((faq, index) => (
            <FaqLayout
              key={index}
              faq={faq}
              index={index}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
