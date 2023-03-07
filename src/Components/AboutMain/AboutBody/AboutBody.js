import React from "react";
import { useTranslation } from "react-i18next";

import "./AboutBody.css";

export function AboutBody() {
  const [t] = useTranslation();
  return (
    <div className="AbautBody">
      <div>
        <h1>{t("Home")}</h1>
      </div>
    </div>
  );
}
