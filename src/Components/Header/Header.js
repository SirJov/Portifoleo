import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export function Header() {
  const [btn, setBtn] = useState("a");
  const valueClass = alterClass(btn);

  function btnSelected(n) {
    setBtn(n);
    alterClass(btn);
  }

  function alterClass(bt) {
    if (bt === "a") {
      const newClass = ["btnSelect", "a", "a"];
      return newClass;
    }
    if (bt === "b") {
      const newClass = ["a", "btnSelect", "a"];
      return newClass;
    }
    if (bt === "c") {
      const newClass = ["a", "a", "btnSelect"];
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
                onClick={() => btnSelected("a")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                id={valueClass[1]}
                className="btn"
                to="/Projects"
                onClick={() => btnSelected("b")}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                id={valueClass[2]}
                className="btn"
                to="/InCreation"
                onClick={() => btnSelected("c")}
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
