import React from "react";
import { useTranslation } from "react-i18next";

import "./btnLinkVercel.css";

export function BtnLinkVercel({ objModal }) {
  const [t] = useTranslation();

  if (objModal.btnVercel) {
    return (
      <div>
        <p>asdasd</p>
        <a href={objModal.linkVercel} target="_blank">
          Site
        </a>
      </div>
    );
  }
  return null;
}
