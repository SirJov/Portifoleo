import React from "react";
import { useTranslation } from "react-i18next";

import "./HomeMain.css";

export function HomeMain() {
  const [t] = useTranslation();
  return (
    <div className="divHome">
      <h1>{t("Home")}</h1>
    </div>
  );
}
