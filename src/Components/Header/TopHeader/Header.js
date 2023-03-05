import React, { useState } from "react";

import { OptLin } from "./OptionsLinguage/OptionsLinguage";

import "./Header.css";

export function Header() {
  return (
    <header className="logo">
      <OptLin />
    </header>
  );
}
