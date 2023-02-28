import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav>
      <div>
        <h1>Herico</h1>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/InCreation">In Creation</Link>
        </li>
      </ul>
    </nav>
  );
}
