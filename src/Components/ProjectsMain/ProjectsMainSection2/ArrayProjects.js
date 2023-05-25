import imgNewFrontTasks1 from "../../../assets/AssetsProjects/projects/project1/imgNewFrontTasks1.webp";
import imgCMlife from "../../../assets/AssetsProjects/projects/projeto3/imgCMlife.png";

import gifProjectFrontTasks from "../../../assets/AssetsProjects/projects/project1/gifproject1.gif";
import GifCMlife from "../../../assets/AssetsProjects/projects/projeto3/CMlifeGif.gif";

const CardsProjects = [
  {
    //Front-End  CM s2 Life

    img1: imgCMlife,
    gif: GifCMlife,
    title: "CM Life",

    projectDescription: "Site que apresenta os serviços de uma clinica médica",
    projectDescription2: "Html, Css",
    projectDescription3:
      "Nossa clínica está pronta para receber nossos pacientes através de uma excelente estrutura, comodidade e com a segurança de que vocês precisam.",

    projectDescriptionCreateProject:
      "Wuebsite criado como um trabalho didático, para finalizar o aprendizado de html e css na plataforma de cursos DevMedia. Demonstrando os serviços de uma clínica médica fictícia. Projeto responsivo.",
    projectDescriptionCreateProject2: "",

    usedInProject_front: "Front-end feito com: Html, Css",
    usedInProject_back: "",

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
    gif: gifProjectFrontTasks, //gif 800x600 do projeto ou img com a mesma resoluçao
    title: "App tarefas", //nome do projeto

    projectDescription: "App onde voce pode criar, alterar e deletar tarefas", //pequeno resumo da funcionalidade do projeto
    projectDescription2: "React, Mysql...", //previa das tecnologias usadas
    projectDescription3:
      "Nesse app você poderá criar tarefas para se organizar em seu dia a dia, podendo completá-las, refazê-las e deletá-las quando quiser. Com design simples e responsivo, podendo ser usado tanto em mobile quanto desktop.", //texto completo das funcionalidades

    projectDescriptionCreateProject:
      "Meu primeiro projeto em React, projeto front que consome uma API de tarefas, projeto com suporte responsivo para desktop e mobile. Requisições feitas em axios. Ele está sendo refatorado à medida que avanço meu conhecimento em React.", //texto completo sobre como foi criado o projeto
    projectDescriptionCreateProject2:
      "Essa também foi a minha primeira API-REST criada e hospedada na Vercel, é um CRUD básico com conexão ao banco de dados MYsql hospedado na Planetscale.com.",

    usedInProject_front: "Front-end feito com: React, HTML, CSS.", //todas as tecnologias usadas
    usedInProject_back: "Back-end feito com: Node, Express, Mysql.",

    FronfEnd_btnGit: true,
    BackEnd_btnGit: true,
    btnVercel: true,

    linkFrontEndGithub: "https://github.com/SirJov/FRONT-TASKS-1-New",
    linkBackEndGithub: "https://github.com/SirJov/API-TASKS-1",
    linkVercel: "https://front-tasks-1-new.vercel.app/",
  },
];

export { CardsProjects };
