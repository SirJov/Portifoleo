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

          <p>CNH : A, B</p>
          <p>Masculino</p>
          <p>Escolaridade : Ensino médio completo.</p>
        </div>
        <div>
          <p>Nacionalidade : Brasileiro</p>
          <p>Ingles : baixo</p>
          <p>Cidade natal : Curitiba</p>
          <p>Morando atualmente em Sao Bernardino - SC</p>
        </div>
      </div>
      <div className="interBox">
        <img src={imgAbout3} />
        <div>
          <p>
            Procuro entregar meu trabalho de forma simples, porém eficiente e
            intuitiva na programação e em todas as áreas em que atuo.
          </p>
          <ul>
            <li>
              Eficiente de forma a entregar todas as funcionalidades desejadas
              de forma adequada.
            </li>
            <li>
              Intuitivo para que pessoas de qualquer idade possam entender como
              o aplicativo funciona.
            </li>
          </ul>
        </div>
      </div>
      <div className="About2SubBox2">
        <p>
          Há aproximadamente um ano, estou focando meu tempo livre após o
          trabalho, em estudos sobre programação. Com foco principal no
          Front-end, estou tendo contato diário com html, css e Javascript em
          cursos online e projetos pessoais onde eu pratico os conceitos
          aprendidos. Apesar do foco em Front-end, a curiosidade e os conselhos
          de amigos já programadores, me levaram a estudar também o Back-end
          aproveitando ao máximo a versatilidade do Javascript, me fazendo
          almejar no futuro ser um profissional Full-stack.
        </p>
      </div>
      <img src={FrontBack} />
    </div>
  );
}
