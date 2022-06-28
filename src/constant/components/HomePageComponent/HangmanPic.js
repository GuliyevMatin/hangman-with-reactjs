import { useState } from "react";
import myImages from "./hangmanImages";
import HomeCss from "../../../style/home.module.css";

function HangmanPic({ health }) {
  return (
    <div className={`${HomeCss.HangmanPic}`} >
      <img  src={myImages[health]} className={`${HomeCss.HangmanPicImg}`} />
    </div>
  );
}

export default HangmanPic;
