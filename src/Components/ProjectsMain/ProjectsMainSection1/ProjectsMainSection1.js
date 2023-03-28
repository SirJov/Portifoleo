import React from "react";
import { useTranslation } from "react-i18next";

import "./ProjectsMainSection1.css";

import Borda2L from "../../../assets/AssetsProjects/Borda2L.webp";
import Borda2R from "../../../assets/AssetsProjects/Borda2R.webp";

import iconFront from "../../../assets/AssetsProjects/iconFront.webp";
import iconBack from "../../../assets/AssetsProjects/iconBack.webp";
import iconDidatic from "../../../assets/AssetsProjects/iconDidatic.webp";
import iconProprio from "../../../assets/AssetsProjects/iconProprio.webp";

export function ProjectsMainSection1() {
  const [t] = useTranslation();

  return (
    <div className="ProjectsMainSection1">
      <img id="borda1Project" className="imgBordas" src={Borda2L} alt="" />
      <div className="ProjectsMainSection1Box2">
        <p>{t("ProjectsMainP1")}</p>
        <div>
          <ul>
            <li>
              <img className="iconProject" src={iconProprio} alt="" />
              <p>{t("iconPerson")}</p>
            </li>
            <li>
              <img className="iconProject" src={iconFront} alt="" />
              <p>Front-end</p>
            </li>

            <li>
              <img className="iconProject" src={iconBack} alt="" />
              <p>Back-end</p>
            </li>
            <li>
              <img className="iconProject" src={iconDidatic} alt="" />
              <p>{t("iconDidatic")}</p>
            </li>
          </ul>
        </div>
      </div>
      <img id="borda2Project" className="imgBordas" src={Borda2R} alt="" />
    </div>
  );
}
