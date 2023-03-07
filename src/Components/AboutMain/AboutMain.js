import React from "react";

import { AsideAbout } from "./AsideAbaut/AsideAbaut.js";
import { AboutBody } from "./AboutBody/AboutBody.js";

import "./AboutMain.css";

export function AboutMain() {
  return (
    <div className="divHome">
      <div className="divHome2">
        <AsideAbout />
        <AboutBody />
      </div>
    </div>
  );
}
