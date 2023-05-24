import React, { useContext, useEffect } from "react";
import { InCreationMain } from "../../Components/InCreationMain/InCreation";
import ContextPagSelected from "../../Context/ContextPageSelected";

export function InCreation() {
  const [PagSelected, SetPagSelected] = useContext(ContextPagSelected);
  useEffect(() => {
    SetPagSelected("InCreation");
  }, []);

  return (
    <section>
      <InCreationMain />
    </section>
  );
}
