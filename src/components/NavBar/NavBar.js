import React from "react";
import "./NavBar.css"; // matches the CSS file exactly

const NavBar = () => {
  return (
    <nav className="navbar">
      <p>Portfolio</p>
      <div>
         <a href="#aboutme">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
