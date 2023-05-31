import React from "react";

import "./AboutSection2.css";

import FrontBack from "../../../../assets/FrontBack.webp";
import imgAbout3 from "../../../../assets/imgAbout3.webp";

export function AboutSection2() {
  return (
    <div id="About2Box">
      <div className="About2SubBox1">
        <div>
          <p>Idade : 29 anos</p>
          <p>Masculino</p>
          <p>Escolaridade : Ensino médio completo.</p>
        </div>
        <div>
          <p>CNH : A, B</p>
          <p>Nacionalidade : Brasileiro</p>
          <p>Morando atualmente em Sao Bernardino - SC</p>
        </div>
      </div>
      <div className="interBox">
        <img src={imgAbout3} />
        <div>
          <p>Lealdade, honestidade.</p>
          <ul>
            <li>
              Sigo a vida em constante atenção aos meus atos, no fim não quero
              arrependimentos e angustias, quero orgulho e alegria de ter
              ajudado meu próximo.
            </li>
          </ul>
        </div>
      </div>
      <div className="About2SubBox2">
        <p>
          Aproveitando ao máximo a versatilidade do Javascript, procuro estudar
          tanto Back-end quanto Front-end, me fazendo almejar no futuro ser um
          profissional Full-stack.
        </p>
      </div>
      <img src={FrontBack} />
    </div>
  );
}
