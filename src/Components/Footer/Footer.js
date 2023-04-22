import React from "react";
import { useTranslation } from "react-i18next";

import "./Footer.css";

export function Footer() {
  const [t] = useTranslation();
  return (
    <footer>
      <p>{t("footerDescription1")}</p>
    </footer>
  );
}
