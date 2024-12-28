import { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <p>NIÑO GUAPO</p>
      </div>
      <div className={`navbar-list ${isOpen && "open"}`}>
        <a href="/">Work</a>
        <a href="/">About</a>
        <a href="/">Ideas</a>
        <a href="/">Contact</a>
        <a href="/">Newsletter</a>
      </div>
      <div
        className={`navbar-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
