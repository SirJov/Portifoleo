import React from "react";

import Linkedin from "../../../../assets/linkedin.png";
import GitHub from "../../../../assets/github.png";
import Download from "../../../../assets/download.png";

import "./MenuRight.css";

export function MenuRight() {
  return (
    <div className="MenuRight">
      <ul>
        <li id="ked">
          <a
            className="la"
            href="https://www.linkedin.com/in/herico-lima-de-campos/"
            target="_blank"
          >
            <img className="icon" src={Linkedin} /> <p>Linkedin</p>
          </a>
        </li>
        <li id="git">
          <a className="la" href="https://github.com/SirJov" target="_blank">
            <img className="icon" src={GitHub} />
            <p>GitHub</p>
          </a>
        </li>
        <li id="curri">
          <a
            className="la2"
            href="https://www.mediafire.com/file/pq7ekqto3wo06g5/Herico_Lima_Curriculum.pdf/file"
            target="_blank"
          >
            <img className="icon" src={Download} />
            <p>Curriculum</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
