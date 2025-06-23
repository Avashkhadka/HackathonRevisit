import React, { useState } from "react";
import Navbar, { NavMobile } from "./Navbar";
import Hero from "./Hero";
import Faq from "../Faq";

function Index() {
  const targetDate = "2025-06-30T00:00:00";
  const [ishamOpen, sethamOpen] = useState(false);
  return (
    <>
      <div className="MainBlockContainer">
        <Navbar
          targetDate={targetDate}
          sethamOpen={sethamOpen}
          ishamOpen={ishamOpen}
        />
      </div>
      {ishamOpen ? (
        <NavMobile targetDate={targetDate} />
      ) : (
        <div className="MainBlockContainer AllOther">
          <div>
            <Hero targetDate={targetDate} />
            <Faq />
            <div className="main"></div>
          
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
