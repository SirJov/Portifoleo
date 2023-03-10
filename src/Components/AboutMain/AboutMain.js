import React from "react";

import { AsideAbout } from "./AsideAbaut/AsideAbaut.js";
import { AboutBody } from "./AboutBody/AboutBody.js";

import "./AboutMain.css";

export function AboutMain() {
  return (
    <div className="divAbout">
      <div className="divAbout2">
        <AsideAbout />
        <AboutBody />
      </div>
    </div>
  );
}
