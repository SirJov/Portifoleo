import React from "react";

import { AboutSection3Cards } from "./AboutSection3Cards/AboutSection3Cards";
import { AboutSection3Courses } from "./AboutSection3Courses/AboutSection3Courses";

import "./AboutSection3.css";

export function AboutSection3() {
  return (
    <div id="AboutSection3">
      <div id="Box1AboutSection3" className="Box1AboutSection3">
        <p className="FirstPAboutSection3">
          Abaixo alguns certificados conquistados na plataforma de cursos online
          <a href="https://www.devmedia.com.br/" target="_blank">
            {" "}
            Devmedia
          </a>
          .{" "}
        </p>
        <div className="AboutSection3CoursesBox">
          <AboutSection3Courses />
        </div>
        <p className="SecondPAboutSection3">
          Atualmente estou estudando TypeScript na
          <a href="https://www.udemy.com/" target="_blank">
            {" "}
            Udemy
          </a>
          , e criando projetos usando react com APIs em node.
        </p>

        <p className="ThirdPAboutSection3">
          Busco a transição de carreira para a área de tecnologia.
          <br /> Até conseguir, vou trabalhando na área da construção civil. As
          funções que exerço estão nos cardes a seguir.
        </p>
        <div className="AboutSection3CardsBox">
          <AboutSection3Cards />
        </div>

        <div>
          <p>
            Todas as imagens mostradas nos cards são de trabalhos realizados e
            locais por onde passei.
          </p>
        </div>
      </div>
      <p></p>
    </div>
  );
}
