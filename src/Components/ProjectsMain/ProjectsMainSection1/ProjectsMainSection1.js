import React from "react";

import "./ProjectsMainSection1.css";

import Borda2L from "../../../assets/AssetsProjects/Borda2L.webp";
import Borda2R from "../../../assets/AssetsProjects/Borda2R.webp";

export function ProjectsMainSection1() {
  return (
    <div className="ProjectsMainSection1">
      <img className="imgBordas" src={Borda2L} />
      <div>
        <h3>Projetos</h3>
        <div className="ProjectsMainSection1Box2">
          <div>
            <p>AHSUHEuHASuHE</p>
          </div>
          <div>
            <ul>
              <li>
                <img />
                <p>asdasdddddddddddddd d dd</p>
              </li>
              <li>
                <img />
                <p>asdasd</p>
              </li>
              <li>
                <img />
                <p>asdasd</p>
              </li>
            </ul>
            <ul>
              <li>
                <img />
                <p>asdasd</p>
              </li>
              <li>
                <img />
                <p>asdasd</p>
              </li>
              <li>
                <img />
                <p>asdasd</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img className="imgBordas" src={Borda2R} />
    </div>
  );
}
