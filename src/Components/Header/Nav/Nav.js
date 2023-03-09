import React from "react";

import { MenuLeft } from "./MenuLeft/MenuLeft";
import { MenuRight } from "./MenuRight/MenuRight";

import "./Nav.css";

export function Nav() {
  return (
    <nav className="MenuNav">
      <MenuLeft />
      <MenuRight />
    </nav>
  );
}
