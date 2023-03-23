import React from "react";
import { useTranslation } from "react-i18next";

import { ProjectsMainSection1 } from "./ProjectsMainSection1/ProjectsMainSection1";
import { ProjectsMainSection2 } from "./ProjectsMainSection2/ProjectsMainSection2";

import "./ProjectMain.css";

export function ProjectMain() {
  const [t] = useTranslation();
  return (
    <div className="divProject">
      <div className="divProject2">
        <ProjectsMainSection1 />
        <ProjectsMainSection2 />
      </div>
    </div>
  );
}
