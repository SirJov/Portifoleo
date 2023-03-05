import React from "react";
import { useTranslation } from "react-i18next";

import "./InCreation.css";

export function InCreation() {
  const [t] = useTranslation();
  return (
    <div className="InCreation">
      <h1>{t("InCreation")}</h1>
    </div>
  );
}
