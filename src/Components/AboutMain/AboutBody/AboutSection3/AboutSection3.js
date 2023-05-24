import React from "react";


import { AboutSection3Cards } from "./AboutSection3Cards/AboutSection3Cards";
import { AboutSection3Courses } from "./AboutSection3Courses/AboutSection3Courses";

import "./AboutSection3.css";

export function AboutSection3() {

  return (
    <div id="AboutSection3">
      <div id="Box1AboutSection3" className="Box1AboutSection3">
        <p className="FirstPAboutSection3">
          Ainda estou à procura do meu primeiro emprego na área da programação,
          atualmente sigo cursos online e ainda desenvolvo projetos pessoais.
          Por mais de um ano, estudei na plataforma de cursos online
          <a href="https://www.devmedia.com.br/" target="_blank">
            {" "}
            Devmedia{" "}
          </a>
          , onde aprendi e pratiquei muitas coisas sobre programação e ganhei
          diversos certificados que estou disponibilizando para visualização
          logo abaixo.
        </p>
        <div className="AboutSection3CoursesBox">
          <AboutSection3Courses />
        </div>
        <p className="SecondPAboutSection3">
          Atualmente estou focando em 2 cursos mais específicos na plataforma
          <a href="https://www.udemy.com/" target="_blank">
            {" "}
            Udemy{" "}
          </a>
          são cursos mais focados para o Front-end do básico ao avançado e estou
          fazendo muitas pesquisas pela internet de conteúdos específicos e
          problemas que encontro durante a criação dos meus projetos. Abaixo
          estão os links dos cursos em que estou focando meus estudos
          atualmente.
        </p>
        <div className="LinksCoucesAboutSection3">
          <a
            href="https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/"
            target="_blank"
          >
            Javascrypt-Moderno-Basico/Avançado
          </a>
          <a
            href="https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/"
            target="_blank"
          >
            Reactjs-Nextjs-Completo-Basico/Avançado
          </a>
        </div>
        <p className="ThirdPAboutSection3">
          Até eu conseguir um trabalho de programador, eu vou continuando os
          estudos e trabalhando em outras áreas para me manter. Durante o
          percurso da minha vida eu aprendi muitas habilidades e funções que
          estarei mostrando nos cards a seguir.
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
