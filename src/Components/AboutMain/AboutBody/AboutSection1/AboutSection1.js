import React from "react";

import "./AboutSection1.css";

import imgAbout1 from "../../../../assets/imgAbout1.webp";
import imgAbout2 from "../../../../assets/imgAbout2.webp";
import imgAbout3 from "../../../../assets/imgAbout3.webp";

export function AboutSection1() {
  return (
    <div className="About1Box">
      <div className="About1SubBox">
        <div>
          <p>- Olá, meu nome é</p>
          <br />
          <h1 className="NickName">Herico de Lima Campos</h1>
          <br />
          <p></p>
        </div>
        <img src={imgAbout1} />
      </div>
    </div>
  );
}
