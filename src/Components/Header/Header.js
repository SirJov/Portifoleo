import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export function Header() {
  const [url, setUrl] = useState();

  const url_atual = window.location.pathname;
  const valueClass = ChangeId(url_atual);

  function btnSelected(i) {
    setUrl(i);
  }

  function ChangeId(url) {
    if (url === "/") {
      const newClass = ["Selected1", "NotSelected", "NotSelected"];
      return newClass;
    }
    if (url === "/Projects") {
      const newClass = ["NotSelected", "Selected2", "NotSelected"];
      return newClass;
    }
    if (url === "/InCreation") {
      const newClass = ["NotSelected", "NotSelected", "Selected3"];
      return newClass;
    }
  }

  return (
    <>
      <div className="logo">
        <h1>Portfolio</h1>
      </div>
      <nav className="MenuNav">
        <div className="MenuLeft">
          <ul>
            <li>
              <Link
                id={valueClass[0]}
                className="btn"
                to="/"
                onClick={() => btnSelected("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                id={valueClass[1]}
                className="btn"
                to="/Projects"
                onClick={() => btnSelected("/Projects")}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                id={valueClass[2]}
                className="btn"
                to="/InCreation"
                onClick={() => btnSelected("/InCreation")}
              >
                In Creation
              </Link>
            </li>
          </ul>
        </div>

        <div className="MenuRight">
          <a href="">Linkedin</a>
          <a href="">GitHub</a>
          <a href="">Curriculum</a>
        </div>
      </nav>
    </>
  );
}
