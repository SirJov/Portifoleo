import React from "react";

import { BtnLinks } from "./BtnLinks/BtnLinks";

import "./ProjectsModal.css";

export function ProjectsModal({ isOpen, objModal, setOpenModal }) {
  function InfoBack() {
    if (objModal.projectDescriptionCreateProject2) {
      console.log(typeof objModal.projectDescriptionCreateProject2);
      return (
        <div>
          <p>{objModal.projectDescriptionCreateProject2}</p>
          <p>{objModal.usedInProject_back}</p>
        </div>
      );
    }
  }
  if (isOpen)
    return (
      <>
        <style>{"body {position: fixed;top: 2000px;}"}</style>
        <div
          className="ProjectModalBackground"
          onClick={() => setOpenModal(false)}
        ></div>
        <div className="ProjectsModalBox1">
          <div className="ModalContainer">
            <div className="modalDivHeader">
              <div>
                <p>{objModal.title}</p>
              </div>
              <div>
                <button onClick={() => setOpenModal(false)}>X</button>
              </div>
            </div>
            <div className="modalDivBody">
              <div className="modalBox1">
                <img className="bloco" src={objModal.gif} alt=""></img>
                <p className="descri">{objModal.projectDescription3}</p>
              </div>
              <div className="modalBox2">
                <div>
                  <p>{objModal.projectDescriptionCreateProject}</p>
                  <p>{objModal.usedInProject_front}</p>
                </div>
                {InfoBack()}
              </div>

              <div className="modalBox4">
                <BtnLinks
                  info={objModal.FronfEnd_btnGit}
                  link={objModal.linkFrontEndGithub}
                  text={"Git Front"}
                />
                <BtnLinks
                  info={objModal.BackEnd_btnGit}
                  link={objModal.linkBackEndGithub}
                  text={"Git Back"}
                />
                <BtnLinks
                  info={objModal.btnVercel}
                  link={objModal.linkVercel}
                  text={"Site"}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  return null;
}
