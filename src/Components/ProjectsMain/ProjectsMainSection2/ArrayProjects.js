import imgNewFrontTasks1 from "../../../assets/AssetsProjects/projects/project1/imgNewFrontTasks1.webp";
import imgAPItask from "../../../assets/AssetsProjects/projects/project2/imgProjectAPI.png";
import imgCMlife from "../../../assets/AssetsProjects/projects/projeto3/imgCMlife.png";

import gifProjectFrontTasks from "../../../assets/AssetsProjects/projects/project1/gifproject1.gif";
import gifProjectApiTask from "../../../assets/AssetsProjects/projects/project2/Api Task.png";
import GifCMlife from "../../../assets/AssetsProjects/projects/projeto3/CMlifeGif.gif";

const CardsProjects = [
  {
    //Front-End  CM s2 Life

    img1: imgCMlife,
    gif: GifCMlife,
    title: "CM Life",

    projectDescription: "projectCMLIFEdescription1",
    projectDescription2: "Html, Css",
    projectDescription3: "projectCMLIFEdescription2",

    projectDescriptionCreateProject: "projectCMLIFEDescriptionCreateProject",
    usedInProject: "Html, Css",

    FronfEnd_btnGit: true,
    BackEnd_btnGit: false,
    btnVercel: true,

    linkFrontEndGithub:
      "https://gitlab.com/Herico_Campos/second-front-end-project",
    linkBackEndGithub: null,
    linkVercel: "https://second-front-end-project.vercel.app/",
  },

  {
    //Front Tasks 1 New

    img1: imgNewFrontTasks1, //icone redondo do projeto
    gif: gifProjectFrontTasks, //gif 80x600 do projeto ou img com a mesma resoluçao
    title: "titleProjectFrontTarefas", //nome do projeto

    projectDescription: "projectFrontTarefasDescription1", //pequeno resumo da funcionalidade do projeto
    projectDescription2: "React, Javascrypt...", //previa das tecnologias usadas
    projectDescription3: "projectFrontTarefasDescription3", //texto completo das funcionalidades

    projectDescriptionCreateProject:
      "projectFrontTarefasDescriptionCreateProject", //texto completo sobre como foi criado o projeto
    usedInProject: "React, Javascrypt, HTML, CSS.", //todas as tecnologias usadas

    FronfEnd_btnGit: true,
    BackEnd_btnGit: true,
    btnVercel: true,

    linkFrontEndGithub: "https://github.com/SirJov/FRONT-TASKS-1-New",
    linkBackEndGithub: "https://github.com/SirJov/API-TASKS-1",
    linkVercel: "https://front-tasks-1-new.vercel.app/",
  },
];

export { CardsProjects };
