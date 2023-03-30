import React from "react";


import { ProjectsMainSection1 } from "./ProjectsMainSection1/ProjectsMainSection1";
import { ProjectsMainSection2 } from "./ProjectsMainSection2/ProjectsMainSection2";

import "./ProjectMain.css";

export function ProjectMain() {
  return (
    <div className="divProject">
      <div className="divProject2">
        <ProjectsMainSection1 />
        <div className="divProjectCards">
          <ProjectsMainSection2 />
        </div>
      </div>
    </div>
  );
}
