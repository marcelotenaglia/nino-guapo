import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="brand-container">
        <p>© NIÑO GUAPO 2025 - Mar del Plata</p>
      </div>
      <div className="social-container">
        <a
          href="https://x.com/PedroSonzini"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://www.instagram.com/k1dguapo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <Link to="/newsletter">Sign up for newsletter →</Link>
      </div>
    </div>
  );
};
