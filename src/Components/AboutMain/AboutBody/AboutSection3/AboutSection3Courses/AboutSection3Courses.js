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
      TagA: "https://www.devmedia.com.br/certificado/tecnologia/javascript/herico-de-lima-de-campos",
      msg: "Js",
    },
    {
      img: REACT,
      TagA: "https://www.devmedia.com.br/certificado/tecnologia/react/herico-de-lima-de-campos",
      msg: "React",
    },
    {
      img: HTML,
      TagA: "https://www.devmedia.com.br/certificado/tecnologia/html/herico-de-lima-de-campos",
      msg: "Html",
    },
    {
      img: CSS,
      TagA: "https://www.devmedia.com.br/certificado/tecnologia/css/herico-de-lima-de-campos",
      msg: "Css",
    },
    {
      img: PYTHON,
      TagA: "https://www.devmedia.com.br/certificado/tecnologia/python/herico-de-lima-de-campos",
      msg: "Python",
    },
  ];

  return ArrayCourses.map((iten, index) => {
    return (
      <div key={index} id="AboutSection3Courses">
        <a href={iten.TagA} target="_blank">
          <img src={iten.img} />
        </a>
        <h5>{iten.msg}</h5>
      </div>
    );
  });
}
