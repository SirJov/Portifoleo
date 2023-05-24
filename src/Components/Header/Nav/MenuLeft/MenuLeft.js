import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ContextPagSelected from "../../../../Context/ContextPageSelected";

import "./MenuLeft.css";

export function MenuLeft() {
  const [PagSelected, SetPagSelected] = useContext(ContextPagSelected);

  const [t, i18n] = useTranslation();
  const [clas, setclas] = useState(["Selected1", "NotSelected", "NotSelected"]);

  useEffect(() => {
    if (PagSelected === "About") {
      return setclas(["Selected1", "NotSelected", "NotSelected"]);
    }
    if (PagSelected === "Projects") {
      return setclas(["NotSelected", "Selected2", "NotSelected"]);
    }
    if (PagSelected === "InCreation") {
      return setclas(["NotSelected", "NotSelected", "Selected3"]);
    }
  }, [PagSelected]);

  return (
    <div className="MenuLeft">
      <ul>
        <li>
          <Link id={clas[0]} className="btn" to="/">
            <p>{t("btnAbaut")}</p>
          </Link>
        </li>
        <li>
          <Link id={clas[1]} className="btn" to="/Projects">
            <p>{t("btnProjects")}</p>
          </Link>
        </li>

        <li>
          <Link id={clas[2]} className="btn" to="/InCreation">
            <p>{t("btnInCreation")}</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
