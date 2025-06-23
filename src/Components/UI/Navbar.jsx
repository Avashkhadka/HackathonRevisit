import React, { useState } from "react";
import Countdown from "./Countdown";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import cognito from "../../assets/cognito.png";
function Navbar({ ishamOpen, sethamOpen, targetDate }) {
  return (
    <>
      {/* {ishamOpen?<MobileMenu/>:<></>} */}
      {/* <MobileMenu /> */}
      <div className="Nav-Pc">
        <div className="navbar-container">
          <div className="navleft">
            <img className="logo" src={cognito} alt="Logo" />
            <div className="navleftpc">
              <Countdown targetDate={targetDate} />
            </div>
          </div>
          <div className="navright">
            <div className="navrightpc navright">
              <div>
                <a href="">Resource</a>
              </div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfH9gAjxecDRwbWONdfD5TcR6BcjAgFHIfcHGF0iOXeSKV8Og/viewform">
                {" "}
                <button> Register Now</button>
              </a>
            </div>
            <div className="navrightham">
              {ishamOpen ? (
                <RxCross1
                  size={"3.5rem"}
                  style={{ color: "black" }}
                  onClick={() => {
                    sethamOpen(!ishamOpen);
                  }}
                />
              ) : (
                <RxHamburgerMenu
                  size={"3.5rem"}
                  style={{ color: "black" }}
                  onClick={() => {
                    sethamOpen(!ishamOpen);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

export const NavMobile = ({ targetDate }) => {
  return (
    <div className="Nav-mb">
      <Countdown targetDate={targetDate} />
      <div className="resnav-info">
        <div>
          {" "}
          <a href="">Resource</a>
        </div>

        <button
          onClick={() =>
            (window.location.href =
              "https://docs.google.com/forms/d/e/1FAIpQLSfH9gAjxecDRwbWONdfD5TcR6BcjAgFHIfcHGF0iOXeSKV8Og/viewform")
          }
        >
          {" "}
          Register Now
        </button>
      </div>
    </div>
  );
};
