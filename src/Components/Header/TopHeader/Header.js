import React, { useState } from "react";

import { OptLin } from "./OptionsLinguage/OptionsLinguage";
import { OptionsTheme } from "./OptionsTheme/OptionsTheme";

import "./Header.css";

export function Header() {
  return (
    <header id="logo" className="logo">
      <OptLin />
      <OptionsTheme />
    </header>
  );
}
