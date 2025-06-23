import React, { useEffect, useState } from "react";
import FAQ from "../API/FAQ.json";
import FaqItem from "./UI/FaqItem";
function Faq() {
  const [faq, setFaq] = useState([]);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setFaq(faq);
  }, []);

  const onToggle = (id) => {
    setIsActive((prev) => {
      return prev === id ? false : id;
    });
  };

  return (
    <div>
      <div className="faqheading">
        <p>Frequently Asked Question</p>
        <p>
          Have questions about CodeFest? We're here to help! If you don't
          find what you need, just reach out to us.
        </p>
      </div>
      <ul className="faq">
        {FAQ.map((currElem) => {
          return (
            <FaqItem
              key={currElem.id}
              currData={currElem}
              setIsActive={() => {
                onToggle(currElem.id);
              }}
              isActive={isActive === currElem.id}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Faq;
