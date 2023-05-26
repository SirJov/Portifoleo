import React from "react";

import "./ProjectsMainSection3.css";

import Borda2L from "../../../assets/AssetsProjects/Borda3L.webp";
import Borda2R from "../../../assets/AssetsProjects/Borda4R.webp";

export function ProjectsMainSection3() {
  return (
    <div className="ProjectsMainSection3">
      <img id="borda1Project" className="imgBordas" src={Borda2L} alt="" />
      <img id="borda2Project" className="imgBordas" src={Borda2R} alt="" />
    </div>
  );
}
