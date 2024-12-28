import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../About/About";
import "../Contact/Contact";
import "../Ideas/Ideas";
import "../Newsletter/Newsletter";
import "../Work/Work";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo" onClick={handleCloseMenu}>
        <Link to="/">NIÑO GUAPO</Link>
      </div>
      <div className={`navbar-list ${isOpen && "open"}`}>
        <Link to="/work" onClick={handleCloseMenu}>
          Work
        </Link>
        <Link to="/about" onClick={handleCloseMenu}>
          About
        </Link>
        <Link to="/ideas" onClick={handleCloseMenu}>
          Ideas
        </Link>
        <Link to="/contact" onClick={handleCloseMenu}>
          Contact
        </Link>
        <Link to="/newsletter" onClick={handleCloseMenu}>
          Newsletter
        </Link>
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
