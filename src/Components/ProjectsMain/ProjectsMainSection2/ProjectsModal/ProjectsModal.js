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
              <div className="modalBox1">
                <img className="bloco" src={objModal.gif} alt=""></img>
                <p className="descri">{t(objModal.project1Description3)}</p>
              </div>
              <div className="modalBox2">
                <div>
                  <p>Este projeto bla bla bla</p>
                </div>
                <div>
                  <h5>Tec usadas</h5>
                  <p>Bla Bla Bla</p>
                </div>
              </div>
              <div className="modalBox3">
                <div>
                  <p>Tec usadas</p>
                  <a></a>
                </div>
                <div>
                  <p>Tec usadas</p>
                  <a></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  return null;
}
