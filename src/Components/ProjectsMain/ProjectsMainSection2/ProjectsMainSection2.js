import React from "react";
import { useTranslation } from "react-i18next";

import "./ProjectsMainSection2.css";

import imgNewFrontTasks1 from "../../../assets/AssetsProjects/imgNewFrontTasks1.webp";

import iconFront from "../../../assets/AssetsProjects/iconFront.webp";
import iconProprio from "../../../assets/AssetsProjects/iconProprio.webp";

export function ProjectsMainSection2() {
  const teste = "iconPerson";
  const [t] = useTranslation();
  return (
    <div className="ProjectsMainSection2">
      <div className="ProjectsMainSection2Box2">
        <div className="ProjectsMainSection2Box3">
          <img src={imgNewFrontTasks1} alt="" />
          <p>Front React Tasks</p>
        </div>
        <div className="ProjectsMainSection2Box4">
          <p></p>
        </div>
        <div className="ProjectsMainSection2Box5">
          <img
            className="iconProjectCards"
            src={iconFront}
            title="Front-end"
            alt=""
          />
          <img
            className="iconProjectCards"
            title={t(teste)}
            src={iconProprio}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
