import React, { useContext, useEffect } from "react";
import { ProjectMain } from "../../Components/ProjectsMain/ProjectsMain";
import ContextPagSelected from "../../Context/ContextPageSelected";

export function Projects() {
  const [PagSelected, SetPagSelected] = useContext(ContextPagSelected);
  useEffect(() => {
    SetPagSelected("Projects");
  }, []);

  return (
    <section>
      <ProjectMain />
    </section>
  );
}
