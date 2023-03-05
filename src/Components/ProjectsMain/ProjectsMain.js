import React from "react";
import { useTranslation } from "react-i18next";


import "./ProjectMain.css";

export function ProjectMain() {
  const [t] = useTranslation();
  return (
    <div className="divProject">
      <h1>{t("Projects")}</h1>
    </div>
  );
}
