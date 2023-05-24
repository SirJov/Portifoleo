import React from "react";


import "./ProjectsMainSection1.css";

import Borda2L from "../../../assets/AssetsProjects/Borda2L.webp";
import Borda2R from "../../../assets/AssetsProjects/Borda2R.webp";

export function ProjectsMainSection1() {
 

  return (
    <div className="ProjectsMainSection1">
      <img id="borda1Project" className="imgBordas" src={Borda2L} alt="" />
      <h2>PROJETOS</h2>
      <img id="borda2Project" className="imgBordas" src={Borda2R} alt="" />
    </div>
  );
}
