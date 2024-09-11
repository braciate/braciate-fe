import "../layout/Faqlayout.css";

const FaqLayout = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="pb-2 text-sm font-semibold border-b-2 faq-question md:text-lg">
        {faq.question}
      </div>
      <div className="font-light faq-answer">{faq.answer}</div>
    </div>
  );
};

export default FaqLayout;
