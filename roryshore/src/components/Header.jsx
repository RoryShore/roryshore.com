import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container headerInner">
        <div className="brand">
          <div className="brandMark" aria-hidden="true" />
          <div className="brandText">
            <span className="brandName">Rory Shore</span>
            <span className="brandTag">software • data • systems</span>
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/" className={({ isActive }) => "navLink" + (isActive ? " active" : "")}>
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => "navLink" + (isActive ? " active" : "")}
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => "navLink" + (isActive ? " active" : "")}
          >
            About
          </NavLink>
          <a className="navCta" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
