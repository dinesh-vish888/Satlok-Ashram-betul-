import { useState, useEffect } from "react";
import { siteData } from "../../data/siteData";
import "./Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  function handleLinkClick() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <nav
        className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
        id="navbar"
      >
        <div className="navbar__inner">
          <a href="#home" className="navbar__logo">
            <img src="/ashram-logo.png" alt="Satlok Ashram Logo" className="navbar__logo-img" />
            <span className="navbar__logo-text">Satlok Ashram Betul</span>
          </a>

          <div className="navbar__links">
            {siteData.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="navbar__link"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a href="#connect" className="navbar__join-btn">
            Join Us
          </a>

          <button
            className={`navbar__hamburger ${isMenuOpen ? "navbar__hamburger--open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            id="navbar-toggle"
          >
            <span className="navbar__hamburger-line"></span>
            <span className="navbar__hamburger-line"></span>
            <span className="navbar__hamburger-line"></span>
          </button>
        </div>

        <div
          className="navbar__progress"
          style={{ width: `${scrollProgress}%` }}
        />
      </nav>

      {/* Mobile Menu */}
      <div
        className={`navbar__mobile-menu ${isMenuOpen ? "navbar__mobile-menu--open" : ""}`}
      >
        {siteData.navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
