import React from "react";
import { useTranslation } from "react-i18next";

import "./btnLinkGitHub.css";

export function BtnLinkGitHub({ objModal }) {
  const [t] = useTranslation();

  if (objModal.btnGit) {
    return (
      <div>
        <p>5555555555</p>
        <a href={objModal.linkGithub} target="_blank">GitHub</a>
      </div>
    );
  }
  return null;
}
