import React from "react";
import { useTranslation } from "react-i18next";

import "./AboutMain.css";

export function AboutMain() {
  const [t] = useTranslation();
  return (
    <div className="divHome">
      <div className="divHome2">
        <aside className="Aside">
          <ul>
            <li>1 12312</li>
            <li>2 1231231</li>
            <li>3 123123</li>
            <li>4 123123</li>
          </ul>
        </aside>
        <div>
          <h1>{t("Home")}</h1>
        </div>
      </div>
    </div>
  );
}
