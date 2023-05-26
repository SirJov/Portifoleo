import React from "react";


import "./AboutSection3Cards.css";
 
import Gesseiro from "../../../../../assets/Gesseiro.webp";
import Motoboy from "../../../../../assets/Motoboy.webp";
import Pecuarista from "../../../../../assets/Pecuarista.webp";
import Pedreiro from "../../../../../assets/Pedreiro.webp";
import Carpintaria from "../../../../../assets/Carpintaria.webp";
import Estoquista from "../../../../../assets/Estoquista.webp";

export function AboutSection3Cards() {


  const ArrayExperiencia = [
    {
      img: Gesseiro,
      h5: "Gesseiro",
      msg: "Profissão que mais exerci na minha vida, trabalhei por 6 anos como gesseiro. Das profissões da construção civil em que trabalhei, essa sem dúvidas é a que mais gostei e me adaptei. Apesar de não exercer mais essa função, ainda hoje recebo ligações de empreiteiros querendo meus serviços.",
    },
    {
      img: Motoboy,
      h5: "Motoboy",
      msg: "Além de ser meu principal meio de transporte, minha moto também já foi minha principal ferramenta de trabalho. Trabalhando com moto frete, já atravessei Curitiba e demais regiões metropolitanas.",
    },
    {
      img: Pecuarista,
      h5: "Pecuarista",
      msg: "Trabalhei por pouco mais de um ano em uma fazenda leiteira, realizando serviços gerais como operador de ordenha, manutenção, instalações, entre outros. Uma das principais funções era a pecuária, lidando com vacas leiteiras, ovelhas, porcos e outros animais. Um trabalho que me aproximou da natureza e me ensinou muitas lições que levarei para o resto da vida.",
    },
    {
      img: Pedreiro,
      h5: "Pedreiro",
      msg: "Experiência em pequenas construções e manutenções em alvenaria, por trabalhar muitos anos com meu pai, que era mestre de obras de uma grande construtora brasileira, pude aprender muito sobre a profissão de pedreiro.",
    },
    {
      img: Carpintaria,
      h5: "Carpinteiro",
      msg: "Estruturas para telhados e forros, entre outros serviços em madeira, também estão entre minhas experiências de trabalho.",
    },
    {
      img: Estoquista,
      h5: "Estoquista",
      msg: "Função que exerço atualmente em São Bernardino-SC, verificando e organizando o estoque de uma loja de produtos elétricos e materiais de construção. Também trabalhei no centro de Curitiba em uma loja de CFTV como auxiliar de estoque até ser promovido a vendedor.",
    },
  ];

  return ArrayExperiencia.map((iten, index) => {
    return (
      <div key={index} id="AboutSection3Card">
        <div>
          <img src={iten.img} />
        </div>
        <h5>{iten.h5}</h5>
        <div>
          <p>{iten.msg}</p>
        </div>
      </div>
    );
  });
}
