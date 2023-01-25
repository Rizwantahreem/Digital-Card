import React from "react";
import Imgs from "./hijabi.jpg";
import Email from "./Mail.png";
import Linkedin from "./linkedin.png";

export default function info() {
  return (
    <div className="infos">
      <img src={Imgs} className="back" />
      <h3>Tahreem Rizwan Khan</h3>
      <p>Web Developer & Data Analyst</p>

      <div className="infobtn">
        <button className="btn">
          <img className="inline" src={Email} alt="" />
          <a href="mailto:rkt@gmail.com">Email</a>
        </button>

        <button className="btn1">
          <img className="inline" src={Linkedin} alt="" />
          <a
            href="https://www.linkedin.com/in/tahreem-rizwankhan"
            target={"_blank"}
            alt="Redirect LinkedIn"
          >
            LinkdIn
          </a>
        </button>
      </div>
    </div>
  );
}
