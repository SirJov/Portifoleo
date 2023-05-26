import React, { useContext } from "react";

import "./Footer.css";
import ContextPagSelected from "../../Context/ContextPageSelected";

export function Footer() {
  const [PagSelected, SetPagSelected] = useContext(ContextPagSelected);

  function ColorBorder() {
    if (PagSelected === "About") {
      return (
        <style>
          {"footer {border-top: 5px solid rgba(0, 255, 34, 0.486);}"}
        </style>
      );
    }
    if (PagSelected === "Projects") {
      return (
        <style>
          {"footer {border-top: 5px solid rgba(255, 251, 0, 0.589);}"}
        </style>
      );
    }
  }

  return (
    <>
      {ColorBorder()}
      <footer>
        <div className="foooter">
          <p>
            "Tudo aqui está em desenvolvimento. Dicas, sugestões ou opiniões
            serão bem-vindas. Contate-me pelas redes sociais. Abraços!!"
          </p>
        </div>
      </footer>
    </>
  );
}
