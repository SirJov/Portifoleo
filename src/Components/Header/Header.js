import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav className="MenuNav">
      <div>
        <h1>Herico</h1>
      </div>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/Projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="link" to="/InCreation">
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
