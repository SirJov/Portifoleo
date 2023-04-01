import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ProjectsModal } from "./ProjectsModal/ProjectsModal";

import { CardsProjects } from "./ArrayProjects";

import "./ProjectsMainSection2.css";

export function ProjectsMainSection2() {
  const [openModal, setOpenModal] = useState(false);

  const testeee = CardsProjects.map((iten, index) => {
    return (
      <div key={index} className="ProjectsMainSection2">
        <div
          className="ProjectsMainSection2Box2"
          onClick={() => setOpenModal(true)}
        >
          <div className="ProjectsMainSection2Box3">
            <img src={iten.img1} alt="" />
            <p>{iten.title1}</p>
          </div>
          <div className="ProjectsMainSection2Box4">
            <p></p>
          </div>
          <div className="ProjectsMainSection2Box5">
            <img
              className="iconProjectCards"
              src={iten.iconFront}
              title=""
              alt=""
            />
            <img
              className="iconProjectCards"
              title=""
              src={iten.iconProprio}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  });

  const [t] = useTranslation();

  return (
    <>
      {testeee}
      <ProjectsModal isOpen={openModal} setOpenModal={setOpenModal} />
    </>
  );
}
