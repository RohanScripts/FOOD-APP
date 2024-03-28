import React, { useState } from "react";
import "./LoginPopCss.css";
import { assets } from "../assets/assets";

const LoginPop = ({ setShowLoginPop }) => {
  const [curState, setCurState] = useState("SignUp");

  return (
    <div className="loginpop">
      <form className="loginpop-container">
        <div className="loginpop-title">
          <h2>{curState}</h2>
          <img
            onClick={() => setShowLoginPop(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="loginpop-inputs">
          {curState === "Login" ? (
            <></>
          ) : (
            <input required type="text" placeholder="enter name..." />
          )}
          <input required type="email" placeholder="enter email..." />
          <input required type="password" placeholder="enter password..." />
        </div>
        {curState === "SignUp" ? (
          <div className="loginpop-terms-condition">
            <input type="checkbox" required name="" id="" />
            <p>By continuing, i agree to terms of use and privacy policy.</p>
          </div>
        ) : (
          <></>
        )}
        <button>{curState === "Login" ? "Login" : "SignUp"}</button>

        {curState === "Login" ? (
          <p>
            Create New Account ?{" "}
            <span onClick={() => setCurState("SignUp")}>Signup Here</span>
          </p>
        ) : (
          <p>
            Already Have An Account ?{" "}
            <span onClick={() => setCurState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPop;
