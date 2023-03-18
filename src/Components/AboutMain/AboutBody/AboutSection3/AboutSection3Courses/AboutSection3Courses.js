import React from "react";
import { useTranslation } from "react-i18next";

import "./AboutSection3Courses.css";

import Gesseiro from "../../../../../assets/Gesseiro.webp";
import Motoboy from "../../../../../assets/Motoboy.webp";
import Pecuarista from "../../../../../assets/Pecuarista.webp";
import Pedreiro from "../../../../../assets/Pedreiro.webp";
import Carpintaria from "../../../../../assets/Carpintaria.webp";
import Estoquista from "../../../../../assets/Estoquista.webp";

export function AboutSection3Cards() {
  const [t, i18n] = useTranslation();

  const ArrayCourses = [
    { img: Gesseiro, TagA: t(""), msg: t("") },
    { img: Motoboy, TagA: t(""), msg: t("") },
    {
      img: Pecuarista,
      TagA: t(""),
      msg: t(""),
    },
    { img: Pedreiro, TagA: t(""), msg: t("") },
    {
      img: Carpintaria,
      h5: t(""),
      msg: t(""),
    },
    { img: Estoquista, h5: t(""), msg: t("") },
  ];

  return ArrayExperiencia.map((iten, index) => {
    return (
      <div key={index} id="AboutSection3Card">
        <div>
          <img src={iten.img} />
        </div>
        <h5>{iten.h5}</h5>
        <div>
          <p>{iten.msg}</p>
        </div>
      </div>
    );
  });
}
