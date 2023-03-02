import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav className="MenuNav">
      <div>
        <h1>Herico</h1>
      </div>
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
      <div>
        <a>Linkedin</a>
        <a>GitHub</a>
        <a>Curriculum</a>
      </div>
    </nav>
  );
}
