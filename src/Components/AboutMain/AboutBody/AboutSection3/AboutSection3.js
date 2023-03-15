import React from "react";
import { useTranslation } from "react-i18next";

import { AboutSection3Cards } from "./AboutSection3Cards/AboutSection3Cards";

import "./AboutSection3.css";

export function AboutSection3() {
  const [t, i18n] = useTranslation();
  return (
    <div id="AboutSection3">
      <div id="Box1AboutSection3" className="Box1AboutSection3">
        <AboutSection3Cards />
      </div>
      <p></p>
    </div>
  );
}
