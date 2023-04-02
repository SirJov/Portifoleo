import React from "react";

import "./ProjectsModal.css";

export function ProjectsModal({ isOpen, objModal, setOpenModal }) {
  if (isOpen)
    return (
      <>
        <div
          className="ProjectModalBackground"
          onClick={() => setOpenModal(false)}
        ></div>
        <div className="ProjectsModalBox1">
          <p>aaaaa</p>
          <p>{objModal.projectDescription1}</p>
        </div>
      </>
    );
  return null;
}
