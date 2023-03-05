import { changeLanguage } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

import iconBr from "../../../../assets/iconBr.webp";
import iconUs from "../../../../assets/iconUs.webp";

import "./OptionsLinguage.css";

export function OptLin() {
  const [t, i18n] = useTranslation();
  function selectLenguage(i) {
    i18n.changeLanguage(i);
  }
  return (
    <div className="OptLin">
      <div>
        <p>{t("pTranslate")}</p>
      </div>
      <div>
        <a onClick={() => changeLanguage("pt")}>
          <img src={iconBr} />
        </a>
        <a onClick={() => changeLanguage("en")}>
          <img src={iconUs} />
        </a>
      </div>
    </div>
  );
}
