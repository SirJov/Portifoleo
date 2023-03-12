import React from "react";
import { useTranslation } from "react-i18next";

import "./AboutSection2.css";

import FrontBack from "../../../../assets/FrontBack.webp";

export function AboutSection2() {
  const [t, i18n] = useTranslation();
  return (
    <div id="About2Box">
      <div className="About2SubBox1">
        <div>
          <p>{t("P1AboutSection2")}</p>
          <p>{t("P2AboutSection2")}</p>
          <p>{t("P3AboutSection2")}</p>
          <p>{t("P4AboutSection2")}</p>
        </div>
        <div>
          <p>{t("P5AboutSection2")}</p>
          <p>{t("P6AboutSection2")}</p>
          <p>{t("P7AboutSection2")}</p>
          <p>{t("P8AboutSection2")}</p>
        </div>
      </div>
      <div className="About2SubBox2">
        <p>{t("P9AboutSection2")}</p>
      </div>
      <img src={FrontBack} />
    </div>
  );
}
