import { changeLanguage } from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import iconBr from "../../../../assets/iconBr.webp";
import iconUs from "../../../../assets/iconUs.webp";

import "./OptionsLinguage.css";

export function OptLin() {
  const [t, i18n] = useTranslation();

  const ling = i18n.language;
  const newId = alterId(ling);

  function alterId() {
    if (ling == "en") {
      return ["LinNotSelected", "LinSelected"];
    }
    if (ling == "pt") {
      return ["LinSelected", "LinNotSelected"];
    }
  }
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
          <img id={newId[0]} src={iconBr} />
        </a>
        <a onClick={() => changeLanguage("en")}>
          <img id={newId[1]} src={iconUs} />
        </a>
      </div>
    </div>
  );
}
