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
            <a href="#logo">{t("L1AboutAside")}</a>
          </li>
          <li>
            <a href="#About2Box">{t("L2AboutAside")}</a>
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
