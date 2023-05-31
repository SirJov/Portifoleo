import React from "react";

import "./AboutSection1.css";

import imgAbout1 from "../../../../assets/imgAbout1.webp";

import Borda1 from "../../../../assets/Borda1.webp";

export function AboutSection1() {
  return (
    <div id="About1Box">
      <div className="About1SubBox">
        <div>
          <p>Olá, meu nome é</p>
          <br />
          <h1 className="NickName">Herico de Lima Campos.</h1>
          <br />
          <p>
            Estarei falando um pouco sobre mim, e demostrando meus conhecimentos
            na programação.
          </p>
          <img id="Borda1" className="imgBordas" src={Borda1} />
        </div>
        <img className="About1Img1" src={imgAbout1} />
      </div>
    </div>
  );
}
