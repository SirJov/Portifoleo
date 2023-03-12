import React from "react";
import { useTranslation } from "react-i18next";

import { AboutSection1 } from "./AboutSection1/AboutSection1";

import "./AboutBody.css";

export function AboutBody() {
  const [t] = useTranslation();
  return (
    <div className="AbautBody">
      <AboutSection1/>
    </div>
  );
}
