import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div
          className="mobile-menu-container"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="logo">Tarkalanii</h1>

          <ul>
            <li>
              <a className="menu-item" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="menu-item" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="menu-item" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" href="#contact">
                Contact
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
