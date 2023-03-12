import React, { startTransition } from "react";
import { useTranslation } from "react-i18next";

import "./AboutSection1.css";

import imgAbout1 from "../../../../assets/imgAbout1.webp";
import imgAbout2 from "../../../../assets/imgAbout2.webp";
import imgAbout3 from "../../../../assets/imgAbout3.webp";

import Borda1 from "../../../../assets/Borda1.webp";

export function AboutSection1() {
  const [t, i18n] = useTranslation();
  return (
    <div id="About1Box">
      <div className="About1SubBox">
        <div>
          <p>{t("P1AboutSection1")}</p>
          <br />
          <h1 className="NickName">{t("H1AboutSection1")}</h1>
          <br />
          <p>{t("P2AboutSection1")}</p>
          <img className="About1Borda1" src={Borda1} />
        </div>
        <img className="About1Img1" src={imgAbout1} />
      </div>
    </div>
  );
}
