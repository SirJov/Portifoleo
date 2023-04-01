import React from "react";

import "./ProjectsModal.css";

export function ProjectsModal({ isOpen, setOpenModal }) {
  if (isOpen)
    return (
      <>
        <div
          className="ProjectModalBackground"
          onClick={() => setOpenModal(false)}
        ></div>
        <div className="ProjectsModalBox1"></div>
      </>
    );
  return null;
}
 