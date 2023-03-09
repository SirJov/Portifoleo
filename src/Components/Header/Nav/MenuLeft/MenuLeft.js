import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./MenuLeft.css";

export function MenuLeft() {
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
  );
}
