import React from "react";
import { useTranslation } from "react-i18next";

import "./AboutSection3Courses.css";

import CSS from "../../../../../assets/CSS.webp";
import HTML from "../../../../../assets/HTML.webp";
import JAVASCRYPT from "../../../../../assets/JS.webp";
import PYTHON from "../../../../../assets/Python.webp";
import REACT from "../../../../../assets/React.webp";

export function AboutSection3Courses() {
  const [t, i18n] = useTranslation();

  const ArrayCourses = [
    {
      img: JAVASCRYPT,
      TagA: t(
        "https://www.devmedia.com.br/certificado/tecnologia/javascript/herico-de-lima-de-campos"
      ),
      msg: t("Javascrypt"),
    },
    {
      img: REACT,
      TagA: t(
        "https://www.devmedia.com.br/certificado/tecnologia/react/herico-de-lima-de-campos"
      ),
      msg: t("React"),
    },
    {
      img: HTML,
      TagA: t(
        "https://www.devmedia.com.br/certificado/tecnologia/html/herico-de-lima-de-campos"
      ),
      msg: t("Html"),
    },
    {
      img: CSS,
      TagA: t(
        "https://www.devmedia.com.br/certificado/tecnologia/css/herico-de-lima-de-campos"
      ),
      msg: t("Css"),
    },
    {
      img: PYTHON,
      TagA: t(
        "https://www.devmedia.com.br/certificado/tecnologia/python/herico-de-lima-de-campos"
      ),
      msg: t("Python"),
    },
  ];

  return ArrayCourses.map((iten, index) => {
    return (
      <div key={index} id="AboutSection3Courses">
        <div>
          <img src={iten.img} />
        </div>
        <h5>{iten.msg}</h5>
      </div>
    );
  });
}
 