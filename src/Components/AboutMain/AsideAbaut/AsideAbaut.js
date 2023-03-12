import React from "react";
import { useTranslation } from "react-i18next";

import "./AsideAbaut.css";

export function AsideAbout() {
  const [t] = useTranslation();
  return (
    <aside className="Aside">
      <div className="DivSticky">
        <p>{t("IndexAboutAside")}</p>
        <ul>
          <li>
            <a href="#About1Box">Presentation</a>
          </li>
          <li>
            <a href="">tetete</a>
          </li>
          <li>
            <a href="">tetaaata</a>
          </li>
          <li>
            <a href="">astastast</a>
          </li>
        </ul>
        <div></div>
        <div></div>
      </div>
    </aside>
  );
}
