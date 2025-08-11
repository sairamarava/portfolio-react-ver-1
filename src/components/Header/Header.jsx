import React from "react";
import logo from "../../../public/ram.jpg"; // Adjust the path as necessary

const Header = () => {
  return (
    <header className="header container flex justify-between items-center p-4">
      <div className="logo flex items-center gap-2">
        <img
          src={logo}
          alt="ServicesByRam Logo"
          className="logo-img h-15 w-auto rounded-lg"
        />
        <span className="animated-logo" id="animatedLogo">
          <span>P</span>
          <span>o</span>
          <span>r</span>
          <span>t</span>
          <span>f</span>
          <span>o</span>
          <span>l</span>
          <span>i</span> <span>o</span>
        </span>
      </div>

      <nav className="nav" id="mainNav" style={{ fontSize: "1.2rem" }}>
        <a href="#services" className="nav-link">
          Domains
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </nav>
      <button className="mobile-menu-toggle" id="menuToggle">
        ☰
      </button>
    </header>
  );
};

export default Header;
