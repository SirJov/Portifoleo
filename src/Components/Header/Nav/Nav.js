import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Linkedin from "../../../assets/linkedin.png";
import GitHub from "../../../assets/github.png";
import Download from "../../../assets/download.png";

import "./Nav.css";

export function Nav() {
  const [t, i18n] = useTranslation();
  const [url, setUrl] = useState();

  const url_atual = window.location.pathname;
  const valueClass = ChangeId(url_atual);

  function btnSelected(i) {
    setUrl(i);
  }

  function ChangeId(url) {
    if (url === "/") {
      const newClass = ["Selected1", "NotSelected", "NotSelected"];
      return newClass;
    }
    if (url === "/Projects") {
      const newClass = ["NotSelected", "Selected2", "NotSelected"];
      return newClass;
    }
    if (url === "/InCreation") {
      const newClass = ["NotSelected", "NotSelected", "Selected3"];
      return newClass;
    }
  }

  return (
    <nav className="MenuNav">
      <div className="MenuLeft">
        <ul>
          <li>
            <Link
              id={valueClass[0]}
              className="btn"
              to="/"
              onClick={() => btnSelected("/")}
            >
              <p>{t("btnAbaut")}</p>
            </Link>
          </li>
          <li>
            <Link
              id={valueClass[1]}
              className="btn"
              to="/Projects"
              onClick={() => btnSelected("/Projects")}
            >
              <p>{t("btnProjects")}</p>
            </Link>
          </li>
          <li>
            <Link
              id={valueClass[2]}
              className="btn"
              to="/InCreation"
              onClick={() => btnSelected("/InCreation")}
            >
              <p>{t("btnInCreation")}</p>
            </Link>
          </li>
        </ul>
      </div>

      <div className="MenuRight">
        <ul>
          <li id="ked">
            <a
              className="la"
              href="https://www.linkedin.com/in/herico-lima-de-campos/"
            >
              <img className="icon" src={Linkedin} /> <p>Linkedin</p>
            </a>
          </li>
          <li id="git">
            <a className="la" href="https://github.com/SirJov">
              <img className="icon" src={GitHub} />
              <p>GitHub</p>
            </a>
          </li>
          <li id="curri">
            <a
              className="la2"
              href="https://download1655.mediafire.com/007b03o3f6sg_IMsy0Sno52-FYq5hT8DJlxzeIPxKGWBSXavHCIZwUslOnUwMxVFGeDAAl_QTSJKRdJYAgwYr0r6slr-Hg/p5l4875a4o8jw6m/Herico_Lima.pdf"
            >
              <img className="icon" src={Download} />
              <p>Curriculum</p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
 