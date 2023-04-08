import React from "react";
import { useTranslation } from "react-i18next";

import "./ProjectsModal.css";

export function ProjectsModal({ isOpen, objModal, setOpenModal }) {
  const [t] = useTranslation();

  if (isOpen)
    return (
      <>
        <div
          className="ProjectModalBackground"
          onClick={() => setOpenModal(false)}
        ></div>
        <div className="ProjectsModalBox1">
          <div>
            <div className="modalDivHeader">
              <div>
                <img className="img1Modal" src={objModal.img1} alt="" />
                <p>{t(objModal.title)}</p>
              </div>
              <div>
                <button onClick={() => setOpenModal(false)}>X</button>
              </div>
            </div>
            <div className="modalDivBody">
              <p>{t(objModal.project1Description3)}</p>
            </div>
          </div>
        </div>
      </>
    );
  return null;
}
