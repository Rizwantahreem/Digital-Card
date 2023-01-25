import React from "react";
import Git from "./git.png";
import Insta from "./insta.png";
import Twt from "./Twitter.png";
import Fb from "./fb.png";

export default function () {
  return (
    <div className="footer">
      <a href="https://github.com/Rizwantahreem" target="_blank">
        <img src={Git} alt="" />
      </a>
      <a href="https://www.instagram.com" target="_blank">
        <img src={Insta} alt="" />
      </a>
      <a href="https://www.twitter.com" target="_blank">
        <img src={Twt} alt="" />
      </a>
      <a href="https://www.facebook.com" target="_blank">
        <img src={Fb} alt="" />
      </a>
    </div>
  );
}
