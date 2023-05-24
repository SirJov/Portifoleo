import React, { useContext, useEffect } from "react";
import { AboutMain } from "../../Components/AboutMain/AboutMain.js";
import ContextPagSelected from "../../Context/ContextPageSelected.js";

export function About() {
  const [PagSelected, SetPagSelected] = useContext(ContextPagSelected);
  useEffect(() => {
    SetPagSelected("About");
  }, []);

  return (
    <section>
      <AboutMain />
    </section>
  );
}
