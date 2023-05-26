import React from "react";

import "./BtnLinks.css";

export function BtnLinks({ info, link, text }) {
  if (info) {
    return (
      <div className="btnLinkss">
        <a href={link} target="_blank">
          {text}
        </a>
      </div>
    );
  }
  return null;
}
