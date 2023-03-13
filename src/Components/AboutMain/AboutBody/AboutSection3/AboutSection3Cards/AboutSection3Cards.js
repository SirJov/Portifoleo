import React from "react";
import { useTranslation } from "react-i18next";

import "./AboutSection3Cards.css";

import Gesseiro from "../../../../../assets/Gesseiro.webp";
import Motoboy from "../../../../../assets/Motoboy.webp";
import Pecuarista from "../../../../../assets/Pecuarista.webp";
import Pedreiro from "../../../../../assets/Pedreiro.webp";
import Carpintaria from "../../../../../assets/Carpintaria.webp";
import Estoquista from "../../../../../assets/Estoquista.webp";

export function AboutSection3Cards() {
  const [t, i18n] = useTranslation();

  const ArrayExperiencia = [
    { img: Gesseiro, h5: t("Gesseiro"), msg: t("GesseiroAboutSection3") },
    { img: Motoboy, h5: t("Motoboy"), msg: t("MotoboyAboutSection3") },
    { img: Pecuarista, h5: t("Pecuarista"), msg: t("PecuaristaAboutSection3") },
    { img: Pedreiro, h5: t("Pedreiro"), msg: t("PedreiroAboutSection3") },
    {
      img: Carpintaria,
      h5: t("Carpinteiro"),
      msg: t("CarpintariaAboutSection3"),
    },
    { img: Estoquista, h5: t("Estoquista"), msg: t("EstoquistaAboutSection3") },
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
