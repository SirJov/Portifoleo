import React from "react";
import { useTranslation } from "react-i18next";

import "./BtnLinks.css";

export function BtnLinks({ info, link, text }) {
  const [t] = useTranslation();

  if (info) {
    return (
      <div>
        <a href={link} target="_blank">
          {text}
        </a>
      </div>
    );
  }
  return null;
}
