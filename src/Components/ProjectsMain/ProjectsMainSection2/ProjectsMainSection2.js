import React, { useState } from "react";
import { ProjectsModal } from "./ProjectsModal/ProjectsModal";
import { CardsProjects } from "./ArrayProjects";

import "./ProjectsMainSection2.css";

export function ProjectsMainSection2() {
  const [openModal, setOpenModal] = useState(false);
  const [objModal, setobjModal] = useState("");

  function SetObjCardModal(index) {
    setOpenModal(true);

    return setobjModal(CardsProjects[index]);
  }

  const ArrayCardsProjects = CardsProjects.map((iten, index) => {
    return (
      <div key={index} className="ProjectsMainSection2">
        <div
          className="ProjectsMainSection2Box2"
          onClick={() => SetObjCardModal(index)}
        >
          <div className="ProjectsMainSection2Box2-2">
            <div className="ProjectsMainSection2Box3">
              <img src={iten.img1} alt="" />
              <p>{iten.title}</p>
            </div>
            <div className="ProjectsMainSection2Box4">
              <p className="CardsProjectsDescription1">
                {iten.projectDescription}
              </p>
              <div>
                <p className="BtnProjectsCardClick">Click</p>
              </div>
              <div className="CardsProjectsDescryption">
                <p className="CardsProjectsUsedTecDesInfo">
                  Neste projeto foi utilizado :
                </p>
                <p className="CardsProjectsUsedTecDescryption">
                  {iten.projectDescription2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {ArrayCardsProjects}
      <ProjectsModal
        objModal={objModal}
        isOpen={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
}
