import React from "react";
import { useTranslation } from "react-i18next";

import "./InCreationMain.css";

export function InCreationMain() {
  const [t] = useTranslation();
  return (
    <div className="InCreation">
      <h1>{t("InCreation")}</h1>
    </div>
  );
}
