import bgFaq from "../assets/faq assets/bg-faq.svg";
import titleFaq from "../assets/faq assets/faq-title.svg";
import FaqLayout from "../layout/FaqLayout";
import { useState } from "react";
import bling from "../assets/bling.png";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Pertanyaan ke-1",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: false,
    },
    {
      question: "Pertanyaan ke-2",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",

      open: false,
    },
    {
      question: "Pertanyaan ke-3",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <section
      id="faq"
      className="flex items-center justify-center w-screen h-screen"
    >
      <div className="absolute darken" />
      <div className="flex flex-wrap items-center justify-center w-full gap-10 faq-container">
        <div className="z-0 flex items-center justify-center title-faq">
          <img
            src={titleFaq}
            alt="title"
            className="bg-transparent size-4/6 md:size-full"
          />
        </div>
        <div className="faq-content">
          <div className="faqs">
            {faqs.map((faq, index) => (
              <FaqLayout
                faq={faq}
                index={index}
                key={index}
                toggleFAQ={toggleFAQ}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
