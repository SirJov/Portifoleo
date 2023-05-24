import imgNewFrontTasks1 from "../../../assets/AssetsProjects/projects/project1/imgNewFrontTasks1.webp";
import imgAPItask from "../../../assets/AssetsProjects/projects/project2/imgProjectAPI.png";
import imgCMlife from "../../../assets/AssetsProjects/projects/projeto3/imgCMlife.png";

import gifProjectFrontTasks from "../../../assets/AssetsProjects/projects/project1/gifproject1.gif";
import gifProjectApiTask from "../../../assets/AssetsProjects/projects/project2/Api Task.png";
import GifCMlife from "../../../assets/AssetsProjects/projects/projeto3/CMlifeGif.gif";

import iconFront from "../../../assets/AssetsProjects/iconFront.webp";
import iconBack from "../../../assets/AssetsProjects/iconBack.webp";
import iconProprio from "../../../assets/AssetsProjects/iconProprio.webp";
import iconDidatic from "../../../assets/AssetsProjects/iconDidatic.webp";

const CardsProjects = [
  {
    //Front-End  CM s2 Life

    img1: imgCMlife,
    gif: GifCMlife,
    title: "CM Life",
    iconFront: iconFront,
    iconBack: "",
    iconProprio: "",
    iconDidatic: iconDidatic,

    projectDescription: "projectCMLIFEdescription1",
    projectDescription2: "Html, Css",
    projectDescription3: "projectCMLIFEdescription2",

    projectDescriptionCreateProject: "projectCMLIFEDescriptionCreateProject",
    usedInProject: "Html, Css",

    btnGit: true,
    btnVercel: true,

    linkGithub: "https://gitlab.com/Herico_Campos/second-front-end-project",
    linkVercel: "https://second-front-end-project.vercel.app/",
  },

  {
    //Back-end  API tarefas

    img1: imgAPItask,
    gif: gifProjectApiTask,
    title: "titleProjectApiTask",

    projectDescription: "projectApiTaskDescription1",
    projectDescription2: "Node, Javascrypt...",
    projectDescription3: "projectApiTaskDescription3",

    projectDescriptionCreateProject: "projectApiTaskDescriptionCreateProject",
    usedInProject: "Node, Javascrypt, Express, Mysql.",

    btnGit: true,
    btnVercel: false,

    linkGithub: "https://github.com/SirJov/API-TASKS-1",
    linkVercel: "",
  },

  {
    //Front Tasks 1 New

    img1: imgNewFrontTasks1, //icone redondo do projeto
    gif: gifProjectFrontTasks, //gif 80x600 do projeto ou img com a mesma resoluçao
    title: "titleProjectFrontTarefas", //nome do projeto

    iconFront: iconFront,
    iconBack: "",
    iconProprio: iconProprio,
    iconDidatic: "",

    projectDescription: "projectFrontTarefasDescription1", //pequeno resumo da funcionalidade do projeto
    projectDescription2: "React, Javascrypt...", //previa das tecnologias usadas
    projectDescription3: "projectFrontTarefasDescription3", //texto completo das funcionalidades

    projectDescriptionCreateProject:
      "projectFrontTarefasDescriptionCreateProject", //texto completo sobre como foi criado o projeto
    usedInProject: "React, Javascrypt, HTML, CSS.", //todas as tecnologias usadas

    btnGit: true, //verdadeiro para ter botao git
    btnVercel: true, //verdadeiro para ter botao Vercel

    linkGithub: "https://github.com/SirJov/FRONT-TASKS-1-New", //link Git se tiver
    linkVercel: "https://front-tasks-1-new.vercel.app/", //link vercel se tiver
  },
];

export { CardsProjects };
