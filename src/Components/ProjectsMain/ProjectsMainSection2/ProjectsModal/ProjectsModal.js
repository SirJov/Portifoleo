import React from "react";
import { useTranslation } from "react-i18next";

import { BtnLinkGitHub } from "./btnLinkGitHub/btnLinkGitHub";
import { BtnLinkVercel } from "./btnLinkVercel/btnLinkVercel";

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
          <div className="ModalContainer">
            <div className="modalDivHeader">
              <div>
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
                  <p>{t("project1DescriptionCreateProject")}</p>
                </div>
                <div>
                  <h6>{t("wasUsed")}</h6>
                  <p>{objModal.usedInProject}</p>
                </div>
              </div>
              <div className="modalBox3">
                <div>
                  <p>{t("project1DescriptionGit")}</p>
                </div>
                <div>
                  <p>{t("project1DescriptionVercel")}</p>
                </div>
              </div>
              <div className="modalBox4">
                <BtnLinkGitHub objModal={objModal} />
                <BtnLinkVercel objModal={objModal} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  return null;
}
