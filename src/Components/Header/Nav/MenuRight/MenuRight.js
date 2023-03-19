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
            href="https://download1655.mediafire.com/007b03o3f6sg_IMsy0Sno52-FYq5hT8DJlxzeIPxKGWBSXavHCIZwUslOnUwMxVFGeDAAl_QTSJKRdJYAgwYr0r6slr-Hg/p5l4875a4o8jw6m/Herico_Lima.pdf"
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
