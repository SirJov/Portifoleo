import React from "react";
import { useTranslation } from "react-i18next";

import { AboutSection3Cards } from "./AboutSection3Cards/AboutSection3Cards";
import { AboutSection3Courses } from "./AboutSection3Courses/AboutSection3Courses";

import "./AboutSection3.css";

export function AboutSection3() {
  const [t, i18n] = useTranslation();
  return (
    <div id="AboutSection3">
      <div id="Box1AboutSection3" className="Box1AboutSection3">
        <p className="FirstPAboutSection3">{t("P1AboutSection3")}</p>
        <div className="AboutSection3CoursesBox">
          <AboutSection3Courses />
        </div>
        <p className="SecondPAboutSection3">TESTEEEE</p>
        <div className="AboutSection3CardsBox">
          <AboutSection3Cards />
        </div>
      </div>
      <p></p>
    </div>
  );
}
