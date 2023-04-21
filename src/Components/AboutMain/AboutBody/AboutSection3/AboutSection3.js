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
        <p className="FirstPAboutSection3">
          {t("P1-1AboutSection3")}
          <a href="https://www.devmedia.com.br/" target="_blank">
            Devmedia
          </a>
          {t("P1-2AboutSection3")}
        </p>
        <div className="AboutSection3CoursesBox">
          <AboutSection3Courses />
        </div>
        <p className="SecondPAboutSection3">
          {t("P2-1AboutSection3")}
          <a href="https://www.udemy.com/" target="_blank">
            Udemy
          </a>
          {t("P2-2AboutSection3")}
        </p>
        <div className="LinksCoucesAboutSection3">
          <a
            href="https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/"
            target="_blank"
          >
            {t("A1-AboutSection3Courses")}
          </a>
          <a
            href="https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/"
            target="_blank"
          >
            {t("A2-AboutSection3Courses")}
          </a>
        </div>
        <p className="ThirdPAboutSection3">{t("P3-1AboutSection3")}</p>
        <div className="AboutSection3CardsBox">
          <AboutSection3Cards />
        </div>
        <div>
          <p>{t("obsMsg")}</p>
        </div>
      </div>
      <p></p>
    </div>
  );
}
