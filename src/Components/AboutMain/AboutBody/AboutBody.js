import React from "react";

import { AboutSection1 } from "./AboutSection1/AboutSection1";
import { AboutSection2 } from "./AboutSection2/AboutSection2";
import { AboutSection3 } from "./AboutSection3/AboutSection3";

import "./AboutBody.css";

export function AboutBody() {
  return (
    <div className="AbautBody">
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
    </div>
  );
}
