import React, { useState } from "react";
import { OptionsTheme } from "./OptionsTheme/OptionsTheme";

import "./Header.css";

export function Header() {
  return (
    <header id="logo" className="logo">
     
      <OptionsTheme />
    </header>
  );
}
