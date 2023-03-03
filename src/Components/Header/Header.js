import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav className="MenuNav">
      <div className="MenuLeft">
        <ul>
          <li>
            <Link id="BtnHome" className="link" to="/" onClick={""}>
              Home
            </Link>
          </li>
          <li>
            <Link id="BtnProjects" className="link" to="/Projects" onClick={""}>
              Projects
            </Link>
          </li>
          <li>
            <Link className="link" to="/InCreation" onClick={""}>
              In Creation
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h1>Herico de Lima Campos</h1>
      </div>
      <div className="MenuRight">
        <a href="">Linkedin</a>
        <a href="">GitHub</a>
        <a href="">Curriculum</a>
      </div>
    </nav>
  );
}
