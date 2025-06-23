import React, { useState, useEffect } from "react";
import { FaRegCalendar } from "react-icons/fa";

function Hero({ targetDate }) {
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const difference = new Date(targetDate) - new Date();
      if (difference < 0) {
        setExpired(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div>
      {!expired ? (
        <div className="RegStatus ">
          <div className="valid">
            <FaRegCalendar size={"2.2rem"} />
            <p> Registration Now Open</p>
          </div>
        </div>
      ) : (
        <div className="RegStatus ">
          <div className="expired">
            <FaRegCalendar size={"2.2rem"} />
            <p> Registration Closed</p>
          </div>
        </div>
      )}
      <div className="regdeadline">
        <p>Deadline: July 23,2025</p>
      </div>
      <div className="HeorhackathonInfo">
        <div>
          <p>Code</p>
          <p>Fest</p>
        </div>
        <p>Some Slogan 2025</p>
        <p>
          Be part of Nepal's biggest 48-hour hackathon — innovate to uplift
          communities, protect cultural heritage, and build a sustainable
          future.
        </p>
        <div className="HeroRegButton">
          <button
            onClick={() =>
              (window.location.href =
                "https://docs.google.com/forms/d/e/1FAIpQLSfH9gAjxecDRwbWONdfD5TcR6BcjAgFHIfcHGF0iOXeSKV8Og/viewform")
            }
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
