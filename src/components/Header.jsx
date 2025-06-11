import React, { useState } from "react";
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="logo">T</div>
      <button
        className={`hamburger${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={menuOpen ? "open" : ""}>
        <a href="#home" onClick={handleNavClick}>HOME</a>
        <a href="#about" onClick={handleNavClick}>ABOUT</a>
        <a href="#skills" onClick={handleNavClick}>SKILLS</a>
        <a href="#portfolio" onClick={handleNavClick}>PORTFOLIO</a>
        <a href="#contact" onClick={handleNavClick}>CONTACT</a>
        <div className="header-icons">
          <a
            href="https://linkedin.com/in/tomer-hadas"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/tomerhadas"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </nav>

      {menuOpen && <div className="nav-overlay" onClick={handleNavClick}></div>}
    </header>
  );
}

export default Header;
