import React from "react";

import Dark from "./ThemeDark";
import Light from "./ThemeLight";

export default function ConfigTheme({ Theme }) {
  function insertTheme(t) {
    if (t == "dark") {
      return Dark;
    }
    if (t == "light") {
      return Light;
    }
  }

  return <style>{insertTheme(Theme)}</style>;
}
