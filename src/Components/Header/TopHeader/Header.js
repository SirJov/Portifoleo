import React, { useContext, useEffect, useState } from "react";
import { OptionsTheme } from "./OptionsTheme/OptionsTheme";
import ContextPagSelected from "../../../Context/ContextPageSelected";

import "./Header.css";

export function Header() {
  const [PagSelected, SetPagSelected] = useContext(ContextPagSelected);
  function ColorBorder() {
    if (PagSelected === "About") {
      return (
        <style>
          {"header {border-bottom: 5px solid rgba(0, 255, 34, 0.486);}"}
        </style>
      );
    }
    if (PagSelected === "Projects") {
      return (
        <style>
          {"header {border-bottom: 5px solid rgba(255, 251, 0, 0.589);}"}
        </style>
      );
    }
  }
  return (
    <>
      {ColorBorder()}
      <header>
        <div id="logo" className="logo">
          <OptionsTheme />
        </div>
      </header>
    </>
  );
}
