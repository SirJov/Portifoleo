import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import ConfigTheme from "./configTheme/ConfigTheme.js";

import iconDark from "../../../../assets/iconDark.webp";
import iconLigth from "../../../../assets/iconLight.webp";

import "./OptionsTheme.css";

export function OptionsTheme() {
  const [t, i18n] = useTranslation();
  const [Theme, setTheme] = useState("dark");
  const idTheme = SetThemeId(Theme);

  function SetThemeState(i) {
    return setTheme(i);
  }

  function SetThemeId(i) {
    if (i == "dark") {
      return ["ThemeSelected", "ThemeNotSelected"];
    }
    if (i == "light") {
      return ["ThemeNotSelected", "ThemeSelected"];
    }
  }

  return (
    <>
      <ConfigTheme Theme={Theme} />
      <div className="OptTheme">
        <div>
          <p>{t("pTheme")}</p>
        </div>
        <div>
          <a>
            <img
              id={idTheme[0]}
              src={iconDark}
              onClick={() => SetThemeState("dark")}
            />
          </a>
          <a>
            <img
              id={idTheme[1]}
              src={iconLigth}
              onClick={() => SetThemeState("light")}
            />
          </a>
        </div>
      </div>
    </>
  );
}
