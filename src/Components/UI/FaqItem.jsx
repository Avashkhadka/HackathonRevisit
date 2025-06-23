import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function FaqItem({ currData, isActive, setIsActive }) {
  const { id, question, answer } = currData;
  return (
    <li>
      {/* {console.log(currData)} */}
      <div className="faq-container">
        <div className="faq-qust-title" onClick={setIsActive}>
          <div className="faq-Outerdiv">
            <p className={`faq-question ${isActive?"questionActive":""}`}>
              {question}
            </p>
          </div>
          <div>
            <button>
              {isActive ? (
                <IoIosArrowDown
                  size={"2rem"}
                  style={{ transform: "rotate(180deg)" }}
                />
              ) : (
                <IoIosArrowDown size={"2rem"} />
              )}
            </button>
          </div>
        </div>
        {<p className={`faq-ans ${isActive ? "faq-Open" : "faq-close"}`}>{answer}</p>}
      </div>
    </li>
  );
}

export default FaqItem;
