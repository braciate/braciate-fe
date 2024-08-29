import "../layout/Faqlayout.css";

const FaqLayout = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question font-semibold border-b-2 pb-2">{faq.question}</div>
      <div className="faq-answer font-light">{faq.answer}</div>
    </div>
  );
};

export default FaqLayout;
